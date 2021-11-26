import React from 'react'
import BirthdayItem from './birthday-item'
import './birthday-list.scss';

export const BirthdayList = ({ peopeList, clearAll, sendCongrats }) => {
    return (
        <>
            <div className="list">
                {peopeList.map(p => {
                    return <BirthdayItem key={p.email} sendCongrats={sendCongrats} Item={p} />
                })}
            </div>
            <div className="action">
                <button onClick={clearAll} className="button is-primary is-fullwidth">Clear All</button>
            </div>
        </>
    )
}

export default BirthdayList
