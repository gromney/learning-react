import React from 'react'
import './birthday-item.scss';

const BirthdayItem = ({ Item, sendCongrats }) => {
    return (
        <div className="item">
            <figure className="image is-64x64">
                <img className="is-rounded" src={Item.picture.large} alt={Item.name.first} />
            </figure>
            <div className="details">
                <div className="subtitle">{Item.name.first} {Item.name.last}</div>
                {/* <span className="years">{Item.dob.age} years</span> */}
                {Item.dob.age} years
            </div>

            <button onClick={() => sendCongrats(Item.email)} className="button">Send Congrats</button>
        </div>
    )
}

export default BirthdayItem
