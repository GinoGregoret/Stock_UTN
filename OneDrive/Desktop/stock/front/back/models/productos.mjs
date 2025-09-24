import { DataTypes, Model, Sequelize } from 'sequelize'
import {sequelize} from '../config/db.mjs'

const sequelize = new Sequelize('sqlite::memory: ')
export class productos extends Model {}

productos.init({
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    stock:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},
{
    sequelize,
    modelName: 'Product',
    tableName: 'products'
},
)
console.log(User === sequelize.models.Us)