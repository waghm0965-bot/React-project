import { Link } from "react-router-dom";

function Navbar(){
  const link = { color:"white", marginRight:15, textDecoration:"none" };

  return(
    <div style={{padding:20, background:"#0d1b2a"}}>
      <Link to="/" style={link}>Home</Link>
      <Link to="/about" style={link}>About Institute</Link>
      <Link to="/services" style={link}>Courses</Link>
      <Link to="/contact" style={link}>Contact</Link>
    </div>
  );
}

export default Navbar;