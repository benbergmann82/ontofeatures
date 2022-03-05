const initialState = {
    "make": "All",
    "max_price": 1300,
    "min_range": 100,
    "min_charging_speed": 20,
    "min_battery": 30,
    "options" : [],
    "connector": ["Type 2", "CCS", "CHAdeMO"],
    "seat_material": ["Cloth", "Leather", "Synthetic Leather", "Microfleece"],
    "steering_wheel_material": ["Leather", "Synthetic Leather"],
    "manufacturers": ["Audi", "Citroen", "Citroen DS3", "Hyundai", "Jaguar", "Peugeot", "Renault", "Tesla", "Vauxhall", "Volkswagen"]
};

const removeOption = (state, optionName) => {
    const newOptions = state.options.filter(opt => opt !== optionName);

    return {...state, "options": newOptions};
}

const removeSeatMaterial = (state, material) => {
    const newMaterial = state.seat_material.filter(opt => opt !== material);

    return {...state, "seat_material": newMaterial};
}

const removeSteeringWheelMaterial= (state, material) => {
    const newMaterial = state.steering_wheel_material.filter(opt => opt !== material);

    return {...state, "steering_wheel_material": newMaterial};
}

const removeConnector = (state, type) => {
    const newConnectors = state.connector.filter(connector => connector !== type);

    return {...state, "connector": newConnectors};
}

const removeManufacturer = (state, manufacturer) => {
    const newManufacturers = state.manufacturers.filter(make => make !== manufacturer);

    return {...state, "manufacturers": newManufacturers};
}

const resetFilters = (state, action) => {
    return {...initialState, "options": state.options };
}

const resetOptions = (state, action) => {
    return {...state, "options": [] };
}


const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FILTER_CHANGE_MAKE':
            return {...state, "make": action.payload};
        case 'FILTER_CHANGE_MIN_CHARGE_SPEED':
            return {...state, "min_charging_speed": action.payload};
        case 'FILTER_CHANGE_MAX_PRICE':
            return {...state, "max_price": action.payload};
        case 'FILTER_CHANGE_MIN_RANGE':
            return {...state, "min_range": action.payload};
        case 'FILTER_CHANGE_MIN_BATTERY':
            return {...state, "min_battery": action.payload};
        case 'FILTER_ADD_OPTION':
            return {...state, "options": [...state.options, action.payload]};
        case 'FILTER_REMOVE_OPTION':
            return removeOption(state, action.payload);
        case 'FILTER_RESET':
            return resetFilters(state, action);
        case 'FILTER_RESET_OPTIONS':
            return resetOptions(state, action);
        case 'FILTER_RESET_ALL':
            return {...initialState};
        case 'FILTER_ADD_CONNECTOR':
            return {...state, "connector": [...state.connector, action.payload]};
        case 'FILTER_REMOVE_CONNECTOR':
            return removeConnector(state, action.payload);
        case 'FILTER_ADD_SEAT_MATERIAL':
            return {...state, "seat_material": [...state.seat_material, action.payload]};
        case 'FILTER_REMOVE_SEAT_MATERIAL':
            return removeSeatMaterial(state, action.payload);
        case 'FILTER_ADD_SW_MATERIAL':
            return {...state, "steering_wheel_material": [...state.steering_wheel_material, action.payload]};
        case 'FILTER_REMOVE_SW_MATERIAL':
            return removeSteeringWheelMaterial(state, action.payload);
        case 'FILTER_REMOVE_MANUFACTURER':
            return removeManufacturer(state, action.payload);
        case 'FILTER_ADD_MANUFACTURER':
            return {...state, "manufacturers": [...state.manufacturers, action.payload]};
        default:
            return state;
    }
}

export default filterReducer;