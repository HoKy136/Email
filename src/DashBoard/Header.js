import { useLocation, useNavigate } from 'react-router-dom';
import dataUser from '../data/users.json'
import avtWhite from '../images/connect-logo-white.svg'
function Header() {
    const location = useLocation()
    let navigate = useNavigate();
    return ( 
        <div className="fixed top-0 right-0 w-full h-1/12 bg-white border-b z-20 flex">
                
            <div className="w-1/6"
                    style={{backgroundColor :'#0e1f33'}}>
                <div className='h-14 flex-shrink-0  w-full text-white flex items-center justify-start'>
                    <img src='/static/media/connect-logo-white.c4cdada4ca7e82ba38e73029de893873.svg'
                        className='max-w-full w-3/4 h-4/6'/>
                </div>

            </div>
            <div className="w-4/5 h-full flex items-center justify-between pl-4 pr-6 gap-3">
                <div>
                    Pathname:
                    <span className="font-semibold">{location.pathname}</span> 
                </div>
                <div className="flex items-center gap-3">
                    
                        {dataUser.map(user =>{
                            return(
                        <>
                        <div className="flex flex-col justify-end items-end"
                            >
                            <h6 className='font-bold text-sm'>
                                {user.name}
                            </h6>
                            <p className='text-sm text-gray-500 mb-0'>
                                {user.email}
                            </p>
                        </div>
                        <div>
                                <img src={user.avatarUrl} className='relative h-10 w-10 rounded-full'/>
                        </div>
                        <button className='flex items-center justify-center duration-100 shadow-md 
                        gap-2 px-4 py-2 text-md rounded-md bg-red-500 text-white hover:bg-red-400 false'
                            onClick={() =>navigate('/login')}> 
                                <i className=" bi bi-power"></i>
                        </button>
                        </>
                            )
                        })}
                    
                </div>
            </div>
            
        </div>
     );
}

export default Header;