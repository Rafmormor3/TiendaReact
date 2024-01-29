import { BrowserRouter, Routes, Route } from "react-router-dom"
import Tiendas from "./tienda/getTiendas";
import Layout from "./layout";
import { AddTienda } from "./tienda/addTienda";
import TiendaDetail from "./tienda/detalles";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/lista" element={<Tiendas />}></Route>
            <Route path="/detalles/:_id" element={<TiendaDetail />}></Route>
            <Route path="/addEdit" element={<AddTienda />}></Route>
            <Route path="/addEdit/:_id" element={<AddTienda />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router;