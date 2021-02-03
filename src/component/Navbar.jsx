import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="menu">
        <NavLink to="/home"> HOME </NavLink>
        <NavLink to="/radio"> RADIO </NavLink>
        <NavLink to="/cekbox"> CHECKBOX </NavLink>
        <NavLink to="/essay"> ESSAY </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
