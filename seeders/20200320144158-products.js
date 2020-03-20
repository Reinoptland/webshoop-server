"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Toilet Paper",
          description: "Get it while you can!",
          price: 25,
          imageUrl:
            "https://assets.2ser.com/wp-content/uploads/2020/03/05204803/shutterstock_144564563-685x368.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Face mask",
          description: "Be safe, look cool as hell",
          price: 33,
          imageUrl:
            "https://ichef.bbci.co.uk/news/1024/cpsprodpb/D9C8/production/_111125755_facemask.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Warm fuzzy feeling",
          description: "Don't prep for the apocalypse, just chill",
          price: 1,
          imageUrl:
            "https://hetnlpcollege.nl/wp-content/uploads/2018/04/wat-is-zen-meditatie1.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  }
};
