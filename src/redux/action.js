export const ADD_RESTAURANT = "ADD_RESTAURANT";
export const ADD_MENU_ITEM = "ADD_MENU_ITEM";
export const LOAD_DEFAULT = "LOAD_DEFAULT";
export const AUTH = "AUTH";

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
