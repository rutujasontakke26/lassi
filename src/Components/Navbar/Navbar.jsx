import {Link} from "react-router";

function Navbar(){
    return(
        <nav>
            <Link to = "/">Home</Link>
            <Link to = "/About">About</Link>
            <Link to = "/Contact">Contact</Link>
            <Link to = "/NotFound">NotFound</Link>
        </nav>
    )
}

export default Navbar