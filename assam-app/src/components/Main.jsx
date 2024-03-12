import React from 'react'
import "./Main.css"
import Navbar from './Navbar'

function Main() {
  return (
    <section className='main flex flex-col'>
        <Navbar/>
        <div className='z-40 w-full text-center relative top-[10%]'>
            <h1 className='text-white text-[90px] font-style tracking-[8px] relative top-[20px]'>Assam</h1>
            <p className='text-white text-[40px] font-cursive'>A melting Pot of Culture, Wildlife, and Serenity</p>
            <div className='w-full mx-auto my-4'>
              <button className='text-white bg-green-500 rounded-xl py-2 px-14 font-poppins'>Explore places</button>
            </div>
        </div>
    </section>
  )
}

export default Main