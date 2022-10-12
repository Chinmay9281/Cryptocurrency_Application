import React from 'react'


const Card = ({ name, percentage, currPrice, image, marketCap }) => {
    return (
        <div className="card" style={{ width: "18rem", fontWeight: "bold", boxShadow: '1px 2px 6px black'}}>
            <img src={image} alt="" className='card-img-top' style={{ height: "100px", width: "100px", margin: "auto", marginTop:"2%" }} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Rs.{currPrice}</li>
                <li className="list-group-item" style={{ color: "red" }}>{percentage.toFixed(2)}%</li>
                <li className="list-group-item">
                    <p>Mkt. Cap:</p>
                    <p>Rs.{marketCap}</p>
                </li>
            </ul>
        </div>
    )
}

export default Card