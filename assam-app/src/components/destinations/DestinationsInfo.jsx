import React from 'react'
import SingleDestination from "./SingleDestination"
import places from './places'

function DestinationsInfo() {

  return (
    <section className='w-screen p-20 bg-gradient-to-b from-gray-800 to-black'>
        <div className='w-full flex flex-wrap justify-around'>
           {
             places.map((p,i)=>{
                return(
                    <SingleDestination name={p.placeName} image={p.placeImg} content={p.placeInfo}/>
                )
             })
           }
        </div>
    </section>
  )
}

export default DestinationsInfo