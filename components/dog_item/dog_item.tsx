import React from "react";
import styled from "styled-components";
import Media from "../media/media";
import { Dog } from "../../types/Dog";

const DogItem = styled.div`
  width: 100%;

  @media (min-width: 600px) {
    overflow: hidden;
  }
`;

const Caption = styled.div`
  font-size: 1rem;
  color: black;
  padding: 1rem;
`;

type StaticProps = {
  dog: Dog;
};

export default ({ dog }: StaticProps) => {
  return (
    <DogItem data-testid="DogItem">
      <Media url={dog.url}/>
      <Caption>{dog.caption} type:{dog.ext}</Caption>
    </DogItem>
  );
};