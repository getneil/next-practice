import React, { useState } from "react";
import styled from "styled-components";
import { GetStaticProps } from "next";

const Title = styled.div`
  font-size: 5rem;
  color: red;
`;

type Dog = {
  url: string;
  caption: string;
};

type StaticProps = {
  dogs: Dog[];
};

export default ({ dogs: initialDogs }: StaticProps) => {
  const [dogs, setDogs] = useState<Dog[]>(initialDogs);

  return (
    <>
      <Title>Hello, World!</Title>
      Here are the dogs:
      {dogs.map((dog) => (
        <div>
          url: {dog.url}, caption: {dog.caption}
        </div>
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  return {
    props: {
      dogs: [],
    },
  };
};
