import { useState, useEffect } from "react"
import { Container } from "./Container"
import { json } from "sequelize"

export const ProductoList = () =>{
    const [list,setList] = useState([])
    useEffect(()=>{
        async function loadProducts() {
            try{
                const req = await fetch("http://localhost:3000")
            }catch{
                console.error('ERROR',error)
            }
        }
        loadProducts()



    })
    return(
        <div>Producto</div>
    )
}