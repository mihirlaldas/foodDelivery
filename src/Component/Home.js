import React, { Component } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
export class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="bg-primary text-white p-2">Choose your meal</h1>
                <span className="text-right">
                    <Link to="/dashboard">
                        <button className="btn btn-outline-success">
                            Dashboard
                        </button>
                    </Link>
                </span>
                {this.props.data.map(ele => {
                    return (
                        <div>
                            <h5 className="display-4 bg-primary text-white text-center p-5">
                                {ele.restro}
                            </h5>
                            <div className="row" key={ele.restro}>
                                {ele.menu.map(items => (
                                    <Card data={items} key={items.name} />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        data: state.data
    };
};
export default connect(mapStateToProps)(Home);
