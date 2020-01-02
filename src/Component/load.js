import { loadDefault } from "../redux/action";
import { connect } from "react-redux";
import data from "./data.json";

import React from "react";

function load(props) {
    props.loadDefault(data);
    return <div></div>;
}

export default connect(null, { loadDefault })(load);
