export const ADD_RESTAURANT = "ADD_RESTAURANT";
export const ADD_MENU_ITEM = "ADD_MENU_ITEM";
export const LOAD_DEFAULT = "LOAD_DEFAULT";
export const AUTH = "AUTH";
export const PLACE_ORDER = "PLACE_ORDER";
export const LOAD_ORDERS = "LOAD_ORDERS";

export const auth = (username, password) => {
    return {
        type: AUTH,
        payload: { username: username, password: password }
    };
};
export const loadDefault = content => {
    return {
        type: LOAD_DEFAULT,
        payload: content
    };
};
export const loadOrders = content => {
    return {
        type: LOAD_ORDERS,
        payload: content
    };
};

export const placeOrder = orders => {
    return {
        type: PLACE_ORDER,
        payload: orders
    };
};
export const addRestaurant = content => {
    return {
        type: ADD_RESTAURANT,
        payload: content
    };
};

export const addMenuItem = content => {
    return {
        type: ADD_MENU_ITEM,
        payload: content
    };
};
