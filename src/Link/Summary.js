import Data from '../data/messages.json'
import moment from "moment";
import { NavLink, Outlet } from "react-router-dom";
function Summary({type}) { 

    
           const newUsers = [...Data].filter((item,index)=>{
            return item.folder === type;
           })
    
    return ( 
    <div className='flex   h-full w-4/5 overflow-hidden'>
        <div className='flex flex-col  h-full w-1/4 overflow-scroll'>
                {newUsers.map(value =>{
                     return(
            <NavLink to ={`/main/email/inbox/${value.id}`}>         
                     <div className=" h-full border-r border-gray-300 relative  ">
                        <div className=" relative flex flex-col overflow-hidden"
                            style={{height: '150px'}}>
                                <div>
                                <div className='flex justify-start items-start w-full px-4 py-4 gap-4 border-b border-gray-300 cursor-pointer false'>
                                    <div className="w-1/6">
                                        <div className="relative w-full pt-full rounded-full">
                                            <img src={value.from.avatarUrl}/>
                                        </div>
                                    </div>
                                    <div className='w-5/6 flex flex-col items-start justify-between'>
                                        <div className='flex items-center justify-between w-full text-sm text-gray-500 font-medium'>
                                            <p>{value.from.name}</p>
                                            <p>{(moment(value.timestamp).utc().format('DD/MM/YYYY'))}</p>
                                        </div>
                                        <div>
                                            <h6 className='text-md font-bold w-full line-clamp-1'>{value.main.title}</h6>
                                        </div>
                                        <div className='w-full'>
                                            <p className='w-full text-sm line-clamp-3 text-gray-500'>{value.main.content}</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                    </NavLink>   
                    )
                })}
                
                {/* có 2 trạng thái 1 là please choose an email và 1 cái là email detail */}
        </div>
                <Outlet/>
    </div>
     );
    }
    
export default Summary;


