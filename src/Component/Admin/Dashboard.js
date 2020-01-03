import React from "react";
import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div>
            <Link to="/restro">
                <button className="btn btn-primary m-2">Add Rerstaurant</button>
            </Link>
            <Link to="/menu">
                <button className="btn btn-primary m-2">
                    Add To Menu of a restaurant
                </button>
            </Link>
            <Link to="/restro-sales">
                <button className="btn btn-outline-primary m-2">
                    Sales report of restaurant
                </button>
            </Link>
            <Link to="/">
                <button className="btn btn-outline-success m-2">Home</button>
            </Link>
        </div>
    );
}
