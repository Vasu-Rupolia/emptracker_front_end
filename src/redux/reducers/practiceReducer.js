const initialState = {
    dummy: [],
}

const practiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_THIS_DATA':
            return {...state, dummy:action.payload}
        default:
            return state;
    }
}

export default practiceReducer;