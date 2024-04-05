import React from 'react'

function CrewDetails({name,imageURL,department}) {
  return (
    <div className='relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-[20rem] bg-cover bg-fit'>
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border bg-cover rounded-xl h-[20rem]"> 
            <img src={`https://image.tmdb.org/t/p/original/${imageURL}`} alt='photo'/>
        </div>
        <div className=' text-center p-6 block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
            <h2>{name}</h2>
            <p>{department}</p>
        </div>
        
    </div>
  )
}

export default CrewDetails