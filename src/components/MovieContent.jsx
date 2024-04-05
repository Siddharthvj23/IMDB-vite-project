import React from 'react'

function MovieContent({name}) {
  console.log(name)
  return (
    <div className='text-white flex items-center justify-center py-4 font-bold'>{movieObj.title}</div>
  )
}

export default MovieContent