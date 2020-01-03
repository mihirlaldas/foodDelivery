import {
    AUTH,
    ADD_RESTAURANT,
    ADD_MENU_ITEM,
    LOAD_DEFAULT,
    PLACE_ORDER,
    LOAD_ORDERS
} from "./action";
import React from "react";
const initialState = {
    orders: [],
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
        case LOAD_ORDERS: {
            return {
                ...state,
                orders: action.payload
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
                if (state.data[i].restro === action.payload.restro) {
                    state.data[i].menu.push({
                        name: action.payload.name,
                        description: action.payload.description,
                        image: action.payload.image,
                        price: action.payload.price,
                        category: action.payload.category,
                        cod: action.payload.cod,
                        rating: action.payload.rating
                    });
                    console.log(state.data[i].menu);
                    return {
                        ...state,
                        data: [...state.data]
                    };
                }
            }
        }
        case PLACE_ORDER: {
            return {
                ...state,
                orders: [...state.orders, ...action.payload]
            };
        }
        default:
            return state;
    }
};

export default adminReducer;
