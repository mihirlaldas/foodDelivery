import React, { Component } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { placeOrder } from "../redux/action";
export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            count: 0
        };
    }
    componentWillUnmount() {
        console.log(this.props.data);
        localStorage.setItem("restroData", JSON.stringify(this.props.data));
        localStorage.setItem("restroOrders", JSON.stringify(this.props.orders));
    }
    handleCheckout = () => {
        if (this.state.count > 0) {
            let total = 0;
            this.state.orders.forEach(ele => {
                total += Number(ele.price);
            });

            this.props.placeOrder(this.state.orders);

            console.log("total:", total);
            alert("You total order amount is:" + total + " . !!Bon Apetit");
            // reset cart after checkout
            this.setState({
                orders: [],
                count: 0
            });
        }
    };
    addOrder = (restro, item, price) => {
        this.setState({
            orders: [
                ...this.state.orders,
                {
                    restro: restro,
                    item: item,
                    price: price
                }
            ],
            count: this.state.count + 1
        });
    };
    render() {
        return (
            <div>
                <div>
                    <p className="badge badge-success">
                        Orders:{this.state.count}
                    </p>
                    <button
                        className="btn btn-outline-primary text-right"
                        onClick={this.handleCheckout}
                    >
                        Checkout
                    </button>
                </div>
                <span className="text-right"></span>
                {this.props.data.map(ele => {
                    return (
                        <div>
                            <h5 className="display-4 bg-primary text-white text-center p-2">
                                {ele.restro}
                            </h5>
                            <div className="row" key={ele.restro}>
                                {ele.menu.map(items => (
                                    <Card
                                        data={items}
                                        restro={ele.restro}
                                        key={items.name}
                                        add={this.addOrder}
                                    />
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
        data: state.data,
        orders: state.orders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        placeOrder: order => dispatch(placeOrder(order))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
