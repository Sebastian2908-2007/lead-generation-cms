const {Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Lead extends Model{};

Lead.init(
    { 
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true 
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:[1]
        }
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:[10]
        }
    }
   },
   {
       sequelize,
       freezeTableName: true,
       underscored: true,
       modelName: 'lead'
   }
);

module.exports = Lead;