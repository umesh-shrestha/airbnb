import React from "react";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SearchPage from "./Components/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
const App = () => {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/search">
                        <SearchPage />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
