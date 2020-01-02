import { AUTH, ADD_RESTAURANT, ADD_MENU_ITEM, LOAD_DEFAULT } from "./action";
import React from "react";
const initialState = {
    data: [],
    adminAuth: { username: "admin", password: "admin" },
    isLoggedIn: false
};
const adminReducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case AUTH:
            if (
                action.payload.username === state.adminAuth.username &&
                action.payload.password === state.adminAuth.password
            )
                return {
                    ...state,
                    isLoggedIn: true
                };
        case LOAD_DEFAULT: {
            return {
                ...state,
                data: action.payload
            };
        }
        case ADD_RESTAURANT: {
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        }
        case ADD_MENU_ITEM: {
            for (let i = 0; i < state.data.length; i++) {
                console.log(state.data[i].restro);

                if (state.data[i] === action.payload.restro)
                    console.log(state.data[i]);
            }
        }
        default:
            return state;
    }
};

export default adminReducer;
