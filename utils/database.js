import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('gymdb', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;
