import React from 'react'

export default function Card(props){
  return (
    <div className='card'>
        <img 
            src={`src/images/${props.cardImg}`} className='card-images'
        />
        <div className="card-text">
            <div className="card-stats">
                <img src="src/images/location-logo.png" className='location-logo'/>
                <span className='card-location'>{props.location}</span>
                <a className='card-link' href="www.google.com">{props.link}</a>
            </div>
            <div className="card-title">{props.title}</div>
            <div className="card-dates">{props.dates}</div>
            <div className="card-para">{props.description}</div>
        </div>
    </div>
  )
}
