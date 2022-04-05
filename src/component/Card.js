import React from 'react'

const Card = ({ item }) => {
  const date = new Date(Date.parse(item.created))

  return (
    <div className='card w-96 bg-primary text-primary-content mx-auto my-4 '>
      <div className='card-body'>
        <h2 className='card-title text-2xl justify-center uppercase'>
          {item.summary}
        </h2>
        <p className='text-center'>CreatedAt: {date.toDateString()}</p>
      </div>
    </div>
  )
}

export default Card
