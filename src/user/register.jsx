import { useEffect, useState } from "react"
import { createUser } from "../services/userService";

export function Register(){

    let [user, setUser] = useState({
        email:"",
        login:"",
        name:"",
        rol:"user",
        password:"",
        active:true
    });

    function handleAdd(e){

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    function add(){
        //e.preventDefault();
        createUser(user).then()
        setUser(t.data)
    }

return(
    <>
    <div></div>
    <h3 align="center"> Registro</h3>
    <div align="center">
        <form>
            <label>Name:</label>
            <input name="name" onChange={handleAdd} value={user.name}></input><br></br><br></br>
            <label>Email:</label>
            <input type="email" name="email" onChange={handleAdd} value={user.email}></input><br></br><br></br>
            <label>Login:</label>
            <input name="login" onChange={handleAdd} value={user.login}></input><br></br><br></br>
            <label>Password:</label>
            <input type="password" name="password" onChange={handleAdd} value={user.password}></input><br></br><br></br>

            <button type="submit" onClick={add}>Añadir</button>

        </form>
        <br></br><br></br>
    </div>
    </>
)
}