import { NavLink, Outlet } from "react-router-dom";

function Email() {
    return ( 
        <>
            <div className="w-screen h-11/12 pt-14 flex" >
                
                <div className="h-full w-52"
                style={{backgroundColor : '#152943'}}>
                    <ul className="nav nav-pills flex flex-col text-center">
                    <NavLink to ='/main/email/inbox'className='nav-link text-white'>Inbox</NavLink>
                    <NavLink to ='/main/email/sent'className='nav-link text-white'>Sent</NavLink>
                    <NavLink to ='/main/email/drafts'className='nav-link text-white'>Drafts</NavLink>
                    <NavLink to ='/main/email/junks'className='nav-link text-white'>Junks</NavLink>
                    <NavLink to ='/main/email/favorite'className='nav-link text-white'>Favorite</NavLink>
                    <NavLink to ='/main/email/spam'className='nav-link text-white'>Spam</NavLink>
                    <NavLink to ='/main/email/reminder'className='nav-link text-white'>Reminder</NavLink>
                    </ul>
                </div>
                {/* khi mà có /inbox nó sẽ thay cái này thành 2 cái 1 là emailsumary và please choose */}
                <Outlet/>
                
            </div>
        </>
     );
}

export default Email;