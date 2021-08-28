import { NextApiRequest, NextApiResponse } from "next";
import { apiFetch } from "../../../utils/api";

export default async function getRandomDogUrl (req: NextApiRequest, res: NextApiResponse) {
  const { url } = await (await apiFetch("https://random.dog/woof.json")).json();
  return res.status(200).json({ url });
};