import { render, screen } from "@testing-library/react";
import { dogExtMatches, default as Home } from "../index";
import { Dog } from "../../types/Dog";

test("filter dogExtMatches by extension", () => {
  const b1a:boolean = dogExtMatches("jpg", "jpeg");
  const b1b:boolean = dogExtMatches("jpeg", "jpeg");
  expect(b1a).toBeTruthy();
  expect(b1b).toBeTruthy();

  const b2:boolean = dogExtMatches("mp4", "mp4");
  expect(b2).toBeTruthy();

  const noFilter = dogExtMatches("mp4", "");
  expect(noFilter).toBeTruthy();

  const c:boolean = dogExtMatches("png", "jpeg");
  expect(c).toBeFalsy();
});

test("should list dogs", async () => {
  const dogs = [
    {
      dog_id: 1,
      url: "https://placedog.com/dog1.jpg",
      caption: "dog 1",
      ext: "jpg",
    },
    {
      dog_id: 2,
      url: "https://placedog.com/dog2.png",
      caption: "dog 2",
      ext: "png",
    },
    {
      dog_id: 3,
      url: "https://placedog.com/dog2.jpg",
      caption: "dog 3",
    },
  ] as Dog[];
  await render(
    <Home dogs={dogs}></Home>
  );

  const dogItems = screen.getAllByTestId("DogItem");
  expect(dogItems.length).toBe(dogs.length);
});