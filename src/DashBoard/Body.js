import { NavLink } from "react-router-dom";
import App from "../App";

function Body() {
    return ( 
    <>
        <div className="w-min h-11/12 flex flex-col justify-start pt-14"
            style={{backgroundColor :'#0e1f33'}}>
            <ul className="nav nav-pills">
                <NavLink to ='/main/home'className='nav-link'><i className="bi bi-house text-white"></i></NavLink>
                <NavLink to ='/main/email'className='nav-link'><i className="bi bi-envelope  text-white"></i></NavLink>
                <NavLink to ='/main/contact'className='nav-link'><i className="bi bi-person-lines-fill  text-white"></i></NavLink>
            </ul>
        </div>
       
        
    </> 
    );
}

export default Body;