import Header from "./Header";
import Body from "./Body"
import { Outlet } from "react-router-dom";
function MainBoard() {
    return ( 
    <div className="w-full h-screen flex relative">
        <Header/>
        <Body/>
        <Outlet/>
    </div>
    );
}

export default MainBoard;