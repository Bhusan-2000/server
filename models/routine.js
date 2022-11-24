import { Sequelize } from 'sequelize';

import sequelize from '../utils/database.js';

const Routine = sequelize.define('routine', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
   },
   exercise: {
    type: Sequelize.INTEGER,
    allowNull: false
   }
});

export default Routine;