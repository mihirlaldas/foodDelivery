import React from "react";
import "./App.css";
import Route from "./Route/Routes";
import Load from "./Component/load";
import Navbar from "./Component/Navbar";
function App() {
    return (
        <div className="App">
            <Navbar />
            <Load />
            <Route />
        </div>
    );
}

export default App;
