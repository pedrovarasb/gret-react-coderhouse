import { Outlet, Link } from "react-router-dom";
import '../App.css';

const Layout = () => {
  return (
    <>
        <div class="bg">
            <nav>
                <ul class="navbar">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cart">Carrito</Link>
                </li>
                <li>
                    <Link to="/products">Productos</Link>
                </li>
                </ul>
            </nav>
        </div>

      <Outlet />
    </>
  )
};

export default Layout;