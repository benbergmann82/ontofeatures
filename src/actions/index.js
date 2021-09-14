export const initiateCarList = (carList) => {
    return {
        type: 'CARLIST_INITIATE',
        payload: carList
    }
}

export const changeCarMake = (make) => {
    return {
        type: 'FILTER_CHANGE_MAKE',
        payload: make
    }
}

export const changeCarMinChargeSpeed = (speed) => {
    return {
        type: 'FILTER_CHANGE_MIN_CHARGE_SPEED',
        payload: speed
    }
}

export const changeCarMaxPrice = (price) => {
    return {
        type: 'FILTER_CHANGE_MAX_PRICE',
        payload: price
    }
}

export const changeCarMinRange = (miles) => {
    return {
        type: 'FILTER_CHANGE_MIN_RANGE',
        payload: miles
    }
}

export const changeCarMinBattery = (kW) => {
    return {
        type: 'FILTER_CHANGE_MIN_BATTERY',
        payload: kW
    }
}

export const addOption = (option) => {
    return {
        type: 'FILTER_ADD_OPTION',
        payload: option
    }
}

export const removeOption = (option) => {
    return {
        type: 'FILTER_REMOVE_OPTION',
        payload: option
    }
}

export const resetFilters = () => {
    return {
        type: 'FILTER_RESET',
    }
}

export const resetOptions = () => {
    return {
        type: 'FILTER_RESET_OPTIONS',
    }
}

export const resetAll = () => {
    return {
        type: 'FILTER_RESET_ALL',
    }
}

export const addConnector = (type) => {
    return {
        type: 'FILTER_ADD_CONNECTOR',
        payload: type
    }
}

export const removeConnector = (type) => {
    return {
        type: 'FILTER_REMOVE_CONNECTOR',
        payload: type
    }
}

export const addSeatMaterial = (type) => {
    return {
        type: 'FILTER_ADD_SEAT_MATERIAL',
        payload: type
    }
}

export const removeSeatMaterial = (type) => {
    return {
        type: 'FILTER_REMOVE_SEAT_MATERIAL',
        payload: type
    }
}

export const addSteeringWheelMaterial = (type) => {
    return {
        type: 'FILTER_ADD_SW_MATERIAL',
        payload: type
    }
}

export const removeSteeringWheelMaterial = (type) => {
    return {
        type: 'FILTER_REMOVE_SW_MATERIAL',
        payload: type
    }
}