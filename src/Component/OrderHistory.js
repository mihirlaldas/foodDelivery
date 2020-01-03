import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function OrderHistory(props) {
    console.log(props.orders);
    let total = 0;
    if (props.orders.length > 0) {
        props.orders.forEach(ele => {
            total += Number(ele.price);
            console.log(ele.price);
        });
    }
    console.log(total);
    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Restaurant</th>
                        <th>Item name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.orders.map(ele => (
                        <tr key={ele.item}>
                            <td>{ele.restro}</td>
                            <td>{ele.item}</td>
                            <td>{ele.price}</td>
                        </tr>
                    ))}
                    <tr className="bg-light">
                        <td></td>
                        <td>Total order amount</td>
                        <td>{total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        orders: state.orders
    };
};

export default connect(mapStateToProps)(OrderHistory);
