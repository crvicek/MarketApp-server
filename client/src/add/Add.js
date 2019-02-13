
import React, { Component } from 'react'

export default function Add(props) {

  const displayAdds = (add) => {
    return (

      // <Link to={`/adds/${add.id}`}>
      <div className='Small-add'>
        <h1 className='Title'>{add.title}</h1>
        <p className='Description'>{add.description}</p>
      </div>
      // </Link>


    )
  }

  return (
    <div className='AddContainer'>
      {props.adds.adds.map(add => displayAdds(add))}
    </div>

  )
}


