import React, { useEffect } from "react";
import styled from "styled-components";
import Media from "../media/media";

import { Dog } from "../../types/Dog";

const Form = styled.div`
  font-size: 1rem;
  color: black;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  max-width: 200px;
  input {
    margin-bottom: 10px;
  }
`;

type StaticProps = {
  dog: Dog;
  onChange: Function;
};

export default ({ dog, onChange }: StaticProps) => {
  const { url = "", caption = "" } = dog || {};

  return (
    <Form>
      <Media url={url} />
      <input
        defaultValue={url}
        type="url"
        placeholder="https://example.com/filename.jpeg"
        required
        onChange={(e) => {
          onChange({
            url: e.target.value || '',
          });
        }}
        data-testid="UrlInput"
      >
      </input>
      <textarea
        defaultValue={caption}
        placeholder="caption"
        required
        data-testid="CaptionInput"
        onChange={(e) => {
          onChange({
            caption: e.target.value || '',
          });
        }}
      >
      </textarea>
    </Form>
  );
};