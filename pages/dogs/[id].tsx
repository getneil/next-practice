import React, { useState } from "react";

import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import DogForm from "../../components/dog_form/dog_form";
import { Dog } from "../../types/Dog";

import { apiFetch } from "../../utils/api";

type StaticProps = {
};

export const utils = {
  fetch: process.env.JEST_WORKER_ID ? jest.fn() : fetch,
}

export default ({ }: StaticProps) => {
  const [dog, setDog] = useState<Dog>();

  const onChange = (data:any) => {
    const d = ({
      ...dog,
      ...data,
    }) as Dog;
    setDog(d);
  }

  const getDog = async () => {
    const urlFetch = await apiFetch("http://localhost:3000/api/dogs/random");
    const {url} = await urlFetch.json();
    onChange({ url });
  }

  const createDog = async () => {
    const dogFetch = await apiFetch("http://localhost:3000/api/dogs/create", {
      method: "POST",
      body: JSON.stringify(dog),
    });
    const { dog_id } = await dogFetch.json();
    onChange({ dog_id });
  }

  return (
    <>
      <DogForm dog={dog} onChange={onChange}/>
      {
        dog && dog.dog_id ?
        <div>
          <p>Dog has been created</p>
          <Link href="/">Back to gallery</Link>
        </div> :
        <div>
          <button onClick={getDog} data-testid="ImportDog">Import dog</button>
          <button onClick={createDog} data-testid="AddDog">Add</button>
        </div>
      }
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<StaticProps> = async ({ params }) => {
  return {
    props: {
    },
  };
};
