import { NextApiRequest, NextApiResponse } from "next";
import * as Dog from "../../../models/dog";
import { parse } from "path";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const dogs = await Dog.getDogs();
  const dogMap = dogs.map((dog) => {
    const data = dog.get();
    data.ext = getExtension(data.url);
    return data;
  });
  return res.status(200).json(dogMap);
};

function getExtension(path:string) {
  return parse(path).ext.split('?')[0].replace('.','');
}