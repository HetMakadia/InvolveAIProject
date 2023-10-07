import { Link} from 'react-scroll'
import React from "react";

function Navbar() {
    return (
        <nav className="navbar bg-base-100 p-4">
            <div className="navbar-start">
            </div>
            <div className="navbar-center hidden lg:flex">
                <a className="btn btn-ghost normal-case text-2xl font-bold"><Link activeClass="text-white" to="main" spy={true} smooth={true} offset={-70} duration={500}>File Question Answering</Link></a>
            </div>
            <div className="navbar-end">
            </div>
        </nav>
    )
}

export default Navbar;