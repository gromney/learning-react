import React, { useEffect, useReducer } from 'react'
import { BirthdayList } from "./birthday-list";
import { Modal } from "./modal";
import { data } from '../data';
import { CLOSE_MODAL, CONGRATS_SENT, initialState, peopleReducer, PEOPLE_CLEARED, PEOPLE_LOADED } from "./reducer";

import './birthday-card.scss';

export const BirthdayCard = () => {
    // const [congratulated, setCongratulated] = useState('');
    const [state, dispatch] = useReducer(peopleReducer, initialState);

    useEffect(() => {
        if (state.congrats)
            alert(`congrats ${state.congrats}`);
    });
    useEffect(() => {
        dispatch({ type: PEOPLE_LOADED, payload: data })

    }, [])
    const clearAll = () => {
        dispatch({ type: PEOPLE_CLEARED });
    }
    const sendCongrats = (email) => {

        dispatch({ type: CONGRATS_SENT, payload: { email } });
        // setCongratulated(email);
    }
    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL })
    }
    return (
        <div className="box birthay-card">

            <Modal openModal={state.openModal} closeModal={closeModal} congrat={state.congrat}>

            </Modal>
            <section className="container">
                <h1 className="subtitle">{state.people.length} birthays today</h1>
                <BirthdayList peopeList={state.people} clearAll={clearAll} sendCongrats={sendCongrats} />
            </section>
        </div>
    )
}

export default BirthdayCard;