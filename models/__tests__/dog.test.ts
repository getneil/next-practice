import { Dog, getDogs, addDog } from "../dog";

test("should get all dogs", async () => {
  const spy = jest.spyOn(Dog, "findAll");

  const mockDogs = [
    {
      dog_id: 1,
      url: "url",
      caption: "caption1",
    },
  ];
  spy.mockResolvedValueOnce(mockDogs as Dog[]);
  const dogsFound = await getDogs();
  expect(dogsFound).toBe(mockDogs);
});

test("should add new dog", async () => {
  const newDog = {
    dog_id: 123,
  }
  const spy = jest.spyOn(Dog, "create");
  spy.mockResolvedValue(newDog as Dog);

  const sampleNewDog = {
    url: "https://test.com/test.jpg",
    caption: "caption test",
  }


  const createdDog = await addDog(sampleNewDog);
  expect(createdDog).toBe(newDog);

  expect(spy).toHaveBeenCalledWith(sampleNewDog);
});