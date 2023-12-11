function ChooseEmail() {
    return ( 
        <div className ='flex items-center h-full w-4/5'>
                    <div className='w-1/4 h-full border-r border-gray-300  relative overflow-hidden'>
                        <div className ='w-full h-full flex items-center justify-center'>
                            <p className='text-3xl text-center'>Please choose <br/> a folder</p>
                        </div>
                    </div>
                    <div className="w-3/4 h-full  relative">
                        <div className ='w-full h-full flex items-center justify-center'>
                            <p className='text-3xl'>Please choose a folder first</p>
                        </div>
                    </div>
        </div>
     );
}

export default ChooseEmail;