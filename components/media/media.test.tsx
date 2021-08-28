import { render, screen } from "@testing-library/react";
import Media from "./media";

test("should show image", async () => {
  await render(
    <Media url="https://google.com/image.jpg"></Media>
  );
  const img = screen.getByTestId("Image");
  expect(img).toBeInTheDocument();
});
test("should show video", async () => {
  await render(
    <Media url="https://google.com/image.mp4"></Media>
  );
  const vid = screen.getByTestId("Video");
  expect(vid).toBeInTheDocument();
});