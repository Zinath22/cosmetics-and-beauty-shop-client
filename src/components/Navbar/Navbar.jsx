// import Logo from "../Logo/Logo";

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {
 
  const { user, logOut } = useContext(AuthContext)

  const handleSignOut = () => {
   logOut()
   .then(() => {

   })
   .catch((error) => {
    console.error("Logout Error", error);
   })
  }

  const navLinks = (
    <>
    <li>
        <NavLink to = "/">Home</NavLink>
    </li>
    <li>
        <NavLink to = "/addProducts">Add Product</NavLink>
    </li>
    <li>
        <NavLink to = "/myCart">My Cart</NavLink>
    </li>
    <li>
        {/* <NavLink to = "/login">Login</NavLink> */}
    </li>
    <li>
        <NavLink to = "/register">Register</NavLink>
    </li>

    {
      user? (
      <>
        <li>
          <span className="btn m-2">{user.email}</span>
        </li>
        <li onClick={handleSignOut}>
          <span>sign Out</span>
          </li>
          </>
       
      ) : (
        <li>
          <Link to = "/login">Login</Link>
        </li>
      )
    }
    </>

);

return (
    <div>
        <div className="flex justify-between items-center py-5 mx-10 px-10 shadow-lg">
  Name
  <div className="">
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box "
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
    </div>
  </div>
</div>
    </div>
);
};

export default Navbar;

    
