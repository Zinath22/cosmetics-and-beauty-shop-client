// import Logo from "../Logo/Logo";

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Logo from "../Logo/Logo";


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
    <li className="text-purple-500">
        <NavLink to = "/">Home</NavLink>
    </li>
    <li className="text-purple-500">
        <NavLink to = "/addProducts">Add Product</NavLink>
    </li>
    <li className="text-purple-500">
        <NavLink to = "/myCart">My Cart</NavLink>
    </li>
    <li className="text-purple-500">
        <NavLink to = "/register">Register</NavLink>
    </li>

    {
      user? (
      <>
        <li className="text-purple-500">
          <span className="btn m-2">{user.email}</span>
        </li>
        <li className="text-purple-500"
         onClick={handleSignOut}>
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
    <div className="">
        <div className="rounded-lg flex justify-between items-center py-5 mx-10 px-10 shadow-lg">
   <Logo></Logo>
  {/* <img className="w-[60px] rounded-full" src="https://i.ibb.co/ckTTpcX/laura-chouette-bz-PJm3v8-RWk-unsplash-1.jpg" alt="" /> */}
 <h2 className="text-purple-500 text-2xl">Glamour & Grace</h2>

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

    
