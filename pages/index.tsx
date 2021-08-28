import React, { useState } from "react";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import Link from "next/link";

import { Dog } from "../types/Dog";

import DogItem from "../components/dog_item/dog_item";


const Title = styled.div`
  font-size: 2rem;
`;

const DogsList = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;

type StaticProps = {
  dogs: Dog[];
};

export default function Home({ dogs: initialDogs }: StaticProps) {
  const [dogs] = useState<Dog[]>(initialDogs);
  const [extFilter, setFilter] = useState<string>('');

  return (
    <>
      <Title>Dogs!</Title>
      <label>Filter</label>
      <select onChange={(e) => {
        setFilter(e.target.value);
      }}>
        <option value="" >no filter</option>
        <option value="jpeg">jpeg</option>
        <option value="png">png</option>
        <option value="mp4">mp4</option>
        <option value="gif">gif</option>
      </select>
      <p>
        <Link href="/dogs/new">Create Dog</Link>
      </p>
      <DogsList>
        {
          dogs
          .filter((dog:Dog) => dogExtMatches(dog.ext, extFilter))
          .map((dog:Dog) => (
            <DogItem key={dog.dog_id} dog={dog}/>
          ))
        }
      </DogsList>
    </>
  );
};

export const dogExtMatches = (dogExt:string, extFilter:string) => {
  if (!extFilter) return true;
  const lowerExt = dogExt.toLowerCase().trim();

  if (lowerExt === extFilter) return true;

  if (extFilter === "jpeg") {
    const jpegs = ["jpg","jpeg","jpe","jif","jfif"];
    return jpegs.includes(lowerExt); 
  }

  return false;
}

export const getServerSideProps: GetServerSideProps<StaticProps> = async () => {
  const fetchedDogs = await fetch("http://localhost:3000/api/dogs");
  const dogs = await fetchedDogs.json();
  return {
    props: {
      dogs,
    },
  };
};