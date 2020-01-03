import React, { Component } from "react";
import { connect } from "react-redux";
export class RestroSales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restro: ""
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        let total = 0;
        if (this.props.orders.length > 0) {
            this.props.orders.forEach(ele => {
                if (ele.restro === this.state.restro)
                    total += Number(ele.price);
                console.log(ele.price);
            });
        }
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                    className="form-group w-50 m-auto"
                >
                    <label htmlFor="restro">Restaurant name</label>
                    <select
                        name="restro"
                        className="custom-select"
                        value={this.state.restro}
                        onChange={this.handleChange}
                    >
                        {this.props.restaurants.map(ele => (
                            <option value={ele}>{ele}</option>
                        ))}
                    </select>
                </form>
                <table className="table table-bordered w-50 m-auto">
                    <thead>
                        <tr>
                            <td>Total Sales</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        restaurants: state.data.map(ele => ele.restro),
        orders: state.orders
    };
};
export default connect(mapStateToProps)(RestroSales);
