import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-red-500 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Food Delivery</h1>
      <div>
        <Link to="/" className="px-3">Home</Link>
        <Link to="/menu" className="px-3">Menu</Link>
        <Link to="/cart" className="px-3">Cart</Link>
        <Link to="/login" className="px-3">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
