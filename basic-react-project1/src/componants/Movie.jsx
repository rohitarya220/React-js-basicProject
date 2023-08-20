import React from 'react'

const Movie = (props) => {
  return (
    <div className='movie'>

    <img src= {props.img} alt="" />
    <p className='title'>Title : {props.title}</p>

    <div className="flex">
    <p> Imdb : {props.imdb} ⭐</p>
    <span>{props.time} </span>
    </div>

    <p className='year'>Year : {props.year} </p>
  
    </div>
  )
}

export default Movie