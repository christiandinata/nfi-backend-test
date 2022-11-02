module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "users",
    {
      username: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      balance: {
        type: Sequelize.NUMBER,
        defaultValue: 0,
      },
    },
    {
      timestamps: true,
      createdAt: true,
      updatedAt: false,
    }
  );
  return User;
};
