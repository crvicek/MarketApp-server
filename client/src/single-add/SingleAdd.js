import React from 'react'

export default function SingleAdd(props) {
  console.log('that my props',props)
  return (
    <div className='Add'>
      <h1>{props.add.title}</h1>
      <h2>price</h2>
      <h2>email</h2>
      <h2>phone</h2>
      <p>{props.add.description}</p>
    </div>
  )
}


