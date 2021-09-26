const initialState = {
    "cars": []
};

const removeCar = (state, carId) => {
    const newList = state.cars.filter(id => id !== carId);

    return {...state, "cars": newList};
}

const comparisonReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'COMPARISON_ADD_CAR':
            return {...state, "cars": [...state.cars, action.payload] }
        case 'COMPARISON_REMOVE_CAR':
            return removeCar(state, action.payload);
        case 'COMPARISON_SET_CARS':
            return {...state, "cars": action.payload};
        default:
            return state;
    }
}

export default comparisonReducer;