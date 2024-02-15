import { Outlet } from "react-router-dom"; //for displaying list below navbar(both having same route path)
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>

    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link"><img
    src="https://cdn-icons-png.flaticon.com/128/10513/10513028.png"
    alt="logo"
  />My Contact List</Link>
      </div>
    <Link to="/Addcontact" >   <button>  AddContact </button></Link>
   </nav>
    <Outlet/>
    </>
  );
};

export default Navbar;



