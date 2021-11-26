export const PEOPLE_LOADED = 'PEOPLE_ADDED';
export const PEOPLE_CLEARED = 'PEOPLE_CLEARED';
export const CONGRATS_SENT = 'CONGRATS_SENT';
export const CLOSE_MODAL = 'CLOSE_MODAL';


export const initialState = {
    people: [],
    congrat: '',
    openModal: false
}
export const peopleReducer = (state, action) => {
    switch (action.type) {
        case PEOPLE_LOADED:
            return { ...state, people: action.payload };
        case CONGRATS_SENT:
            const filtered = state.people.filter(p => p.email !== action.payload.email);
            return { ...state, people: filtered, congrat: action.payload.email, openModal: true }
        case PEOPLE_CLEARED:
            return { ...state, people: [] };
        case CLOSE_MODAL:
            return { ...state, congrat: '', openModal: false }
        default:
            return state;
    }
}

export default peopleReducer;