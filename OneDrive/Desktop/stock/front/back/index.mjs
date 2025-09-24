import { json } from "sequelize"
import express from 'express'
import dotenv from 'dotenv'
const app = express()
dotenv.config()
app.use(express.json())

app.get("/",async function(req,res){
    res.json({
        saludo: "hola"
    })
})

app.listen(3000,()=>{
    console.log('servidor inicial puerto 3000')
})

app.post('/',async function(req, res){
    res.json({
        saludo: 'ruta post'
    })
})

app.put("/", async(req,res)=>{
    res.json('hola')
})

app.delete('/', async function(){
    res.json('ruta delete')
})