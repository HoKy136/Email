import moment from "moment";
import { useParams } from "react-router-dom";
import Data from '../data/messages.json'
function MailDetail() {
    let { mailId } = useParams()
    const newUsers = [...Data].filter((item,index)=>{
        return item.id == mailId;
       })
    return ( 
    <>
        {newUsers.map(value =>{
            return(
                
                    <div className='w-3/4 h-full p-6 relative'>
                        <div className='col-span-12'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center sm:w-1/3 xl:w-1/5 gap-3 '>
                                    <div className='sm:w-1/3 xl:w-1/4'>
                                        <div className='relative w-full pt-full rounded-full'>
                                        <img src={value.from.avatarUrl}
                                            style={{alignItems :'center'}}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className=' text-md font-semibold'>{value.from.name}</h6>
                                        <p className=' text-sm text-gray-500 font-light'>{value.from.email}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <p className="text-sm text-gray-500 font-light">{(moment(value.timestamp).utc().format('DD/MM/YYYY'))}</p>
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="flex items-center justify-center duration-100 
                                        shadow-md gap-2 px-4 py-2 text-md rounded-md   
                                        bg-gray-500 text-white hover:bg-gray-400 false ">
                                            Reply
                                        </button>
                                        <button className="flex items-center justify-center duration-100 
                                        shadow-md gap-2 px-4 py-2 text-md rounded-md   
                                        border border-green-500 text-green-500 hover:bg-green-200 false ">
                                            Forward
                                        </button>
                                        <button className="flex items-center justify-center duration-100 
                                        shadow-md gap-2 px-4 py-2 text-md rounded-md   
                                        border border-red-500 text-red-500 hover:bg-red-200 false " >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12'>
                            <div className="py-12">
                                <h2 className="text-4xl font-semibold mb-8">
                                    {value.main.title}
                                </h2>
                                <div className="border-b pb-8">
                                    <p>{value.main.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
            )
        })}
    </>
     );
}

export default MailDetail;