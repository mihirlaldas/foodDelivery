import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Component/Home";
import { connect } from "react-redux";
import AddRestaurant from "../Component/Admin/AddRestaurant";
import AddToMenu from "../Component/Admin/AddToMenu";
import Admin from "../Component/Admin/Dashboard";
import Login from "../Component/Admin/Login";
function Routes(props) {
    console.log(props);
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />

            <Route
                path="/dashboard"
                render={routeData =>
                    props.isLoggedIn ? (
                        <Admin {...routeData} />
                    ) : (
                        <Redirect to="/login" />
                    )
                }
            />
            <Route
                path="/restro"
                render={routeData =>
                    props.isLoggedIn ? (
                        <AddRestaurant {...routeData} />
                    ) : (
                        <Redirect to="/login" />
                    )
                }
            />
            <Route
                path="/menu"
                render={routeData =>
                    props.isLoggedIn ? (
                        <AddToMenu {...routeData} />
                    ) : (
                        <Redirect to="/login" />
                    )
                }
            />
            <Route component={Home} />
        </Switch>
    );
}
const mapState = state => {
    return {
        isLoggedIn: state.isLoggedIn
    };
};
export default connect(mapState)(Routes);
