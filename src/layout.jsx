import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/lista">Lista Tiendas</Link>
        <Link to="/addEdit">Añadir/Editar Tiendas</Link>
        <Link to="/users">Registro</Link>
      </nav>
      <Outlet></Outlet>
    </>
  );
};
export default Layout;