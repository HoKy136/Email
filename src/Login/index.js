import {useNavigate} from 'react-router-dom'
import React , { useState } from 'react';
import LogoBlack from '../images/connect-logo-black.svg'
import Users from '../data/users.json'
function Login() {
    
    const navigate = useNavigate();
    const [selectValue , setSelectValue] = useState('')
    const [pws , setPws] = useState('test1@test.com')
    
    const handlePwsChange = e => 
        setPws(e.target.value);
   
    return ( 
    <div className="w-full  min-h-screen"
            style={{backgroundColor :'#0e1f33'}}>
        <div className="container mx-auto relative min-h-screen">
            <div className="rounded-lg mx-auto overflow-hidden absolute bg-white py-16
             text-black px-8 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
             style={{width : '30rem',
                    height : 'auto'}}>
                <div className="grid lg:grid-cols-12">
                    <div className="lg:col-span-12">
                        <div className="w-full text-center flex flex-col items-center gap-3">
                            <div className="w-full px-24">
                                <img className='max-w-full ' src='/static/media/connect-logo-black.d5b0863d972ae326f856f6450dedd50b.svg' />
                            </div>
                            <div>
                                <p className='text-xl text-gray-700 font-light'>Login to check your email!!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-12">
                    <div className= "lg:col-span-12">
                        <form>
                            <div className='grid lg:grid-cols-12 gap-4'>
                                <div className='lg:col-span-12 '>
                                    <div>
                                        <label className='block text-xl mb-2 '
                                                 >Email
                                        </label>
                                        <select className='w-full bg-white rounded-md border border-gray-900 py-2.5 px-3 '
                                                name='email'
                                                value={selectValue} 
                                                onChange={e => setSelectValue(e.target.value)}>
                                                
                                                    <option > ------Choose an email</option>
                                                    <option value='test1@test.com'>test1@test.com</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='lg:col-span-12 '>
                                    <div>
                                        <label className='block text-xl mb-2'>
                                            Password
                                        </label>
                                        <input id='password' 
                                                className='w-full bg-white rounded-md border border-gray-900 py-2.5 px-3 '
                                                type='password'
                                                value={pws}
                                                onChange ={handlePwsChange}/>
                                               
                                        
                                    </div>
                                </div>
                                <div className='lg:col-span-12 mt-3'>
                                    <button className='flex items-center justify-center duration-100 
                                    shadow-md gap-2 px-4 py-2 text-md rounded-md   
                                  bg-gray-500 text-white hover:bg-gray-400 false w-full bg-darkblue-800'
                                  onClick={() => selectValue === 'test1@test.com' ? navigate('/main/home') : alert('Nhập Users')}
                                  type='submit'>
                                            Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>        
             </div>
        </div>
    </div> 
    );
}

export default Login;