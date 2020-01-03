import { loadDefault, loadOrders } from "../redux/action";
import { connect } from "react-redux";
import data from "./data.json";

import React from "react";

function load(props) {
    const prevData = JSON.parse(localStorage.getItem("restroData"));
    if (prevData !== null) props.loadDefault(prevData);
    else props.loadDefault(data);

    const prevOrders = JSON.parse(localStorage.getItem("restroOrders"));
    if (prevOrders !== null) props.loadOrders(prevOrders);
    return <div></div>;
}

export default connect(null, { loadDefault, loadOrders })(load);
