const { type } = require('os');
const { DataTypes } = require('sequelize');

module.exports = Model;
function model(sequelize){
    const attribute = {
        email: {type: DataTypes.STRING, allowNull: false},
        password:{type: DataTypes.STRING, allowNull: false},
        title:{type: DataTypes.STRING,allowNull: false},
        firstname:{type: DataTypes.STRING,allowNull: false},
        lastname:{type: DataTypes.STRING,allowNull: false},
        role:{type: DataTypes.STRING,allowNull: false}
    };
    const options = {
        defaultScope: {
            attributes: {exclude: ['passwordHash']}
        },
        scopes:{
            withHash: {attribute: {},}
        }
    };
    return sequelize.define('User', attributes, options)
}