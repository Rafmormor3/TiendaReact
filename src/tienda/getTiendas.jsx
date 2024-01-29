import { useEffect, useState } from "react";
import { deleteTienda, getTiendas } from "../services/tiendaService";
import { Link } from "react-router-dom";

export default function Tiendas(){

    let [tiendas, setTiendas] = useState([]);

  useEffect(()=>{
    
    async function getTiendasComponent(){
      let t = await getTiendas();
      setTiendas(t.data)
    };
    
    getTiendasComponent();

    
  },[])
  
  async function handleDelete(e){
    await deleteTienda(e.target.id);
    setTiendas((t)=>t.filter((tienda)=>tienda._id !== e.target.id))
  }


const tiendaElement = tiendas && tiendas.map((element, index)=>(

  <div className="card" key={index}>
    <div className="card-body" >
      <h4 className="card-title">{element.marca}</h4>

      <button className="btn btn-dark">
        <Link to={`/detalles/${element._id}`}>Detalles</Link>
      </button><br></br><br></br>

      <button className="btn btn-warning">
        <Link to={`/addEdit/${element._id}`}>Editar</Link>
      </button><br></br><br></br>

      <button className="btn btn-danger" onClick={handleDelete} id={element._id}>Borrar</button>
    </div>
  </div>
 

))

  return(
  <div align="center">
    {tiendaElement}
  </div>
  )

}