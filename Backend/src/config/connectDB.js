const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hospital', 'root', null, {
    host: "127.0.0.1",
    port: 3307,
  dialect: 'mysql',
  logging: false
});
let connectDB =async ()=>{
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
module.exports = connectDB;