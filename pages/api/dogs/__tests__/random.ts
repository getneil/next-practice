import random from "../random";
import { apiFetch } from "../../../../utils/api";
import { NextApiRequest, NextApiResponse } from "next";

jest.mock("../../../../utils/api");


test("should fetch random dog", async () => {
  const randomDog = {
    url: "http://test.com/dog.jpeg",
  }
  apiFetch.mockResolvedValue({
    json: () => Promise.resolve(randomDog)
  } as Response);

  const req = {} as NextApiRequest;
  const res = {
    status: jest.fn(),
    json: jest.fn(),
  } as NextApiResponse;
  res.status.mockReturnValue(res);

  await random(req, res);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith(randomDog);
});