import express from "express"
import dotenv from "dotenv"
import { sequelize } from './config/db.mjs'
import { ProductoList } from "./models/productoList.mjs"

const app = express()
dotenv.config()
app.use(express.json())
app.get("/", async function(req, res) {
 
  res.json(req.query)
})
app.post('/', async (req, res) => {
const body = req.body
const product = new ProductoList({
  name:body.name,
  price:Number(body.price),
  stock:Number(body.stock)
})
await product.save()
  
})
app.put("/", async (req, res) => {
  res.json("ruta put")
})
app.delete("/", async (req, res) => {
  res.json("Ruta DELTE")
})
app.listen(3000, () => {
  console.log("servidor iniciado en puerto http://localhost:3000")
  sequelize.sync()
})