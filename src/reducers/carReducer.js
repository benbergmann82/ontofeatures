const initialState = [];

const initiateCarList = (state, carList) => {
    return carList;
}

const carReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CARLIST_INITIATE':
            return initiateCarList(state, action.payload);
        default:
            return state;
    }
}

export default carReducer;