import { NextApiRequest, NextApiResponse } from "next";
import * as Dog from "../../../models/dog";

export default async function addDog(req: NextApiRequest, res: NextApiResponse) {
  const dog = await Dog.addDog(JSON.parse(req.body));
  return res.status(200).json(dog.get());
}