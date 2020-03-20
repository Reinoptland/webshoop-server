"use strict";
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "product",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.TEXT,
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      imageUrl: DataTypes.STRING
    },
    {}
  );
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};
