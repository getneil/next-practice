import { render, screen, act, fireEvent } from "@testing-library/react";
import FormPage, { utils } from "../[id]";
import { apiFetch } from "../../../utils/api";
jest.mock("../../../utils/api");

test("should getRandomDog and set it to the form as value", async () => { 
  const mockResponse = { url: "http://example.com/test.jpg" };
  apiFetch.mockResolvedValue({
    json: () => Promise.resolve(mockResponse)
  } as Response);
  await render(<FormPage/>);

  await act(async () => {
    const randomDog = screen.getByTestId("ImportDog");
    fireEvent.click(randomDog);
  });

  const urlInput =  await screen.findByTestId("UrlInput");
  expect(urlInput.value).toBe(mockResponse.url);
});

test("should create dog", async () => {
  const data = {
    url: "http://test.com/test.jpg",
    caption: "captiontest",
  }
  const mockResponse = { dog_id: 123 };
  apiFetch.mockResolvedValue({
    json: () => Promise.resolve(mockResponse)
  } as Response);
  await render(<FormPage/>);

  await act(async () => {
    const urlInput = screen.getByTestId("UrlInput");
    const captionInput = screen.getByTestId("CaptionInput");
    await fireEvent.change(urlInput, {target: {value: data.url}});
    await fireEvent.change(captionInput, {target: {value: data.caption}});
  });

  await act(async () => {
    const addDog = screen.getByTestId("AddDog");
    await fireEvent.click(addDog);
  });

  expect(apiFetch).toHaveBeenCalledWith("http://localhost:3000/api/dogs/create", {
    method: "POST",
    body: JSON.stringify(data),
  });
});