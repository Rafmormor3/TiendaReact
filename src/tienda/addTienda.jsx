import { useEffect, useState } from "react"
import { createTienda, getTienda, getTiendas, updateTienda } from "../services/tiendaService";
import { useParams } from "react-router-dom";

export function AddTienda(){

    const {_id} = useParams();

    let [tienda, setTienda] = useState({
        marca:"",
        ciudad:"",
        calle:"",
        numero:0
    });

    useEffect(()=>{
    
        async function getTiendaId(){

          getTienda(_id).then((response)=>{
              setTienda(response.data)
              console.log(tienda);
          });

        };

    if(_id!=null){    
        getTiendaId();
    }
        
      },[])

    function handleAdd(e){

        setTienda({
            ...tienda,
            [e.target.name]: e.target.value
        })
    }

    function add(){
        //e.preventDefault();
        createTienda(tienda).then()
        setTienda(tienda.data)
    }

    function edit(e){

        e.preventDefault();
        updateTienda(_id, tienda).then();

    }

return(
    <>
    {_id!=null?<h3 align="center"> Editar Tienda</h3>:<h3 align="center"> Añadir Tienda</h3>}
    <div align="center">
        <form>
            <label>Marca:</label>
            <input name="marca" onChange={handleAdd} value={tienda.marca}></input><br></br><br></br>
            <label>Ciudad:</label>
            <input name="ciudad" onChange={handleAdd} value={tienda.ciudad}></input><br></br><br></br>
            <label>Calle:</label>
            <input name="calle" onChange={handleAdd} value={tienda.calle}></input><br></br><br></br>
            <label>Numero:</label>
            <input type="number" name="numero" onChange={handleAdd} value={tienda.numero}></input><br></br><br></br>

            {_id==null? <button type="submit" onClick={add}>Añadir</button> : <button type="submit" onClick={edit}>Editar</button>}

        </form>
        <br></br><br></br>
    </div>
    </>
)
}