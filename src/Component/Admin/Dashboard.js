import React from "react";
import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div>
            <Link to="/restro">
                <button className="btn btn-primary">Add Rerstaurant</button>
            </Link>
            <Link to="/menu">
                <button className="btn btn-primary">
                    Add To Menu of a restaurant
                </button>
            </Link>
        </div>
    );
}
