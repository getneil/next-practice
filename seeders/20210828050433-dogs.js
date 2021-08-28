const dogs = [
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/vax-prod.appspot.com/o/test%2Fdog1.jpeg?alt=media&token=a8541eaa-f254-4530-a835-eb2013789d9e',
    caption: "place_dog_500",
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/vax-prod.appspot.com/o/test%2Fdog2.gif?alt=media&token=b88d7443-ea76-45fe-ae82-9adb891b1b75',
    caption: "place_dog_501",
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/vax-prod.appspot.com/o/test%2Fdog3.png?alt=media&token=f584bdfb-0fe5-4b3b-94b4-6e4ff0d3f110',
    caption: "place_dog_502",
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/vax-prod.appspot.com/o/test%2Fdog4.mp4?alt=media&token=1947d143-3f71-4c09-ba1a-2e9f19e33060',
    caption: "place_dog_503",
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/vax-prod.appspot.com/o/test%2Fdog5.jpeg?alt=media&token=11cfd659-0637-4f9c-adb3-cac833a20c4f',
    caption: "place_dog_504",
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/vax-prod.appspot.com/o/test%2Fdog6.jpeg?alt=media&token=e3c34f3d-6b17-4a9e-85a8-f9966aeb7a77',
    caption: "place_dog_505",
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('dogs_tbl', dogs, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('dogs_tbl', {
      caption: dogs.map((dog) => dog.caption),
    });
  }
};
