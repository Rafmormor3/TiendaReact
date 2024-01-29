import { useEffect, useState } from "react";
import { deleteTienda, getTienda, getTiendas } from "../services/tiendaService";
import { Link, useParams } from "react-router-dom";

export default function TiendaDetail(){

  const {_id} = useParams();

  let [tienda, setTienda] = useState({});

  useEffect(()=>{
    
    async function getTiendaId(){
      let t = await getTienda(_id);
      setTienda(t.data)
    };
    
    if(_id!=null){    
      getTiendaId();
  }

    
  },[])


const tiendaElement = 

  <div className="card" key={tienda._id}>
    <div className="card-body" >
      <h4 className="card-title">{tienda.marca}</h4>
      <p className="card-text"><b>Ciudad:</b>{tienda.ciudad}</p>
      <p className="card-text"><b>Calle:</b>{tienda.calle}</p>
      <p className="card-text"><b>Numero:</b>{tienda.numero}</p>
    </div>
  </div>


  return(
  <div align="center">
    {tiendaElement}
  </div>
  )

}