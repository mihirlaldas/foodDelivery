import React, { Component } from "react";
import { addRestaurant } from "../../redux/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class AddRestaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const newRestro = { restro: this.state.name, menu: [] };
        this.props.addRestaurant(newRestro);
    };
    render() {
        return (
            <div>
                <h1>add restaurant</h1>
                <form
                    onSubmit={this.handleSubmit}
                    className="form-group border bg-light m-2 w-50 m-auto p-2 text-left"
                >
                    <label htmlFor="name">Restaurant name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        maxLength="28"
                        onChange={this.handleChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary p-2 m-2 btn-block"
                    >
                        Add Restaurant
                    </button>
                </form>
                <hr />
                <Link to="/dashboard">
                    <button className="btn btn-primary">Dashboard</button>
                </Link>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addRestaurant: name => dispatch(addRestaurant(name))
    };
};

export default connect(null, mapDispatchToProps)(AddRestaurant);
