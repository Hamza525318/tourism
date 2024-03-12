import React from 'react'


function Navbar({color}) {
  return (
    <div className={`w-screen relative h-20 flex items-center z-50 p-5`}>
        <div className='w-[40%]'>
          <img src='../logo.png' className='w-[70px] m-3'></img>
        </div>

        <div className='flex w-[60%] justify-around text-white font-roboto font-medium'>
           <p>Destinations</p>
           <p>Wildlife</p>
           <p>Cuisine</p>
           <p>Travel</p>
           <p>Tour packages</p>
        </div>

    </div>
  )
}

export default Navbar