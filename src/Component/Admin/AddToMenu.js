import React, { Component } from "react";
import { connect } from "react-redux";
import { addMenuItem } from "../../redux/action";
import { Link } from "react-router-dom";
class AddToMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restro: "",
            name: "",
            description: "",
            image: "",
            price: "",
            cod: false,
            category: "",
            rating: ""
        };
        console.log(props);
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addMenuItem(this.state);
    };
    render() {
        return (
            <div>
                <h1>add restaurant</h1>
                <form
                    onSubmit={this.handleSubmit}
                    className="form-group border bg-light m-2 w-50 m-auto p-2 text-left"
                >
                    <label htmlFor="restro">Restaurant name</label>
                    <select
                        name="restro"
                        className="custom-select"
                        onChange={this.handleChange}
                    >
                        {this.props.restaurants.map(ele => (
                            <option value={ele}>{ele}</option>
                        ))}
                    </select>
                    <label htmlFor="name">Item Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        maxLength="20"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="description">Item Description</label>
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        maxLength="120"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="image">Item Image URL</label>
                    <input
                        type="text"
                        name="image"
                        className="form-control"
                        maxLength="120"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        name="price"
                        className="form-control"
                        maxLength="3"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="cod">COD available</label>
                    <input
                        type="checkbox"
                        name="cod"
                        className="form-control"
                        onChange={() => this.setState({ cod: !this.state.cod })}
                    />
                    <label htmlFor="category">category</label>
                    <input
                        type="text"
                        name="category"
                        className="form-control"
                        maxLength="10"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="rating">rating</label>
                    <input
                        type="number"
                        name="rating"
                        className="form-control"
                        maxLength="3"
                        onChange={this.handleChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary p-2 m-2 btn-block"
                    >
                        Add New Menu item
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

const mapStateToProps = state => {
    return {
        restaurants: state.data.map(ele => ele.restro)
    };
};
const mapDispatchToProps = dispatch => {
    return {
        addMenuItem: name => dispatch(addMenuItem(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToMenu);
