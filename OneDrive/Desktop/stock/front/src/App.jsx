import { BrowserRouter, Routes, Route } from "react-router"
import { ProductoList } from "./componentes/ProductoList"
import { ProductForm } from "./componentes/ProductForm"
import {ToastContainer} from 'react-toastify'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductoList/>}/>
        <Route path = '/product' element={<ProductForm/>}/>
        <Route path="*" element={<h2>404 elemento no encontrado</h2>}/>
      </Routes>


      <ToastContainer
      theme="colored"
      
      
      
      
      
      />
    </BrowserRouter>
  )
}
export default App
