import { BrowserRouter, Routes, Route } from "react-router"
import { Container } from "./componentes/Container"
import { ProductoList } from "./componentes/ProductoList"
import { ProductForm } from "./componentes/ProductForm"
import { ProductRow } from "./componentes/ProductRow"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductoList/>}/>
        <Route path = '/product' element={<ProductForm/>}/>
        <Route path="*" element={<h2>404 elemento no encontrado</h2>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
