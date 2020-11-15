import React from 'react'
import './Card.css'

const Card = ({source, link, title, desc}) => {
    return (
    <div className="card">
        <a href={link}><img className="card-img" src={source} alt=""/></a>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
        </div>
    </div>
    )
}

export default Card