import { Input } from './Input'
import { useState } from 'react'

export const ProductForm = () =>{

    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [stock,setStock] = useState('')

    const handleSubmit=async(e)=>{
        e.preventdefault()

        try{
            const config ={
                method:'POST',
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({
                    name:name,
                    price:price,
                    stock:stock
                })
            }
            const url = 'http://localhost:3000/'
            const req = await fetch(url,config)
            const res = await req.json()
            alert('producto cargado')

        }catch(er){
            console.log(er)
            alert('ocurrio un error')
        }
    }
    return(
        <div
        className='mt-5 p-5 gap-5 flex flex-col justify-center items-center'>
            <h2 className='text-4xl font-bold'>Producto</h2>
        <form 
        className='flex flex-col gap-2'>
        onSubmit={handleSubmit}
            <Input 
            type='text' 
            name='Nombre_Producto' 
            placeholder='Ingrese el producto'
            value={name}
            onChange={(e)=>{
                setName(e.target.value)
            }}
            />
            <Input
            type='number'
            name='Precio'
            placeholder='Ingrese el precio'
            value={price}
            onChange={(e)=>{
                setPrice(e.target.value)
            }}/>
            <Input
            type='Cantidad'
            name='number'
            placeholder='ingrese la cantidad'
            value={stock}
            onChange={(e)=>{
                setStock(e.target.value)
            }}/>
            <button 
            className="p-2 mt-5 bg-slate-950 text-white font-bold hover:bg-green-400 cursor-pointer"
            >Enviar</button>
        </form>
        </div>
    )
}