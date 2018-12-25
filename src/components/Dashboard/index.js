import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Header from "./Header/Header";
import Dashboard from "./Main/Dashboard"
import SeaBattle from "./SeaBattle/index"
import Movies from "./movies/index";
import IconLabelButtons from "../Dashboard/SideBar/LeftSideBar"

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetched:false
        };
    }

    render() {
        return (
            <>
                <Header/>
                <IconLabelButtons/>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/movie/:id"  component={Movies}/>
                    <Route exact path="/seabattle" component={SeaBattle}/>
                    <Route render={() => <Redirect to={"/pageNotFound"}/>}/>
                </Switch>
            </>
        );
    }

}

export default Index