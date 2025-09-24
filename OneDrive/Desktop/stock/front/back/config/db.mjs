import {Sequelize} from 'sequelize'

export const sequelize = new Sequelize(
    "stock",
    "root",
    "",
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    })
