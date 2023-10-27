import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";



const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()

    }



    const Links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>

        <li><NavLink to="/faqs">FAQs </NavLink></li>
        <li><NavLink to="/login">Login </NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100 mt-4 gap-4 ">
            <div className="navbar-start ">
                <div className="flex" >
                    <img className="w-[60px]" src={logo} alt="" />
                    <p className="text-gray-400 font-poppins font-bold text-2xl mt-4" >Events</p>
                </div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>

            {
                user ?
                    <button onClick={handleSignOut} className="btn">SignOut</button>
                    : <Link to="/login">
                        <button className="btn">Login</button>
                    </Link>
            }



        </div>
    );
};

export default NavBar;