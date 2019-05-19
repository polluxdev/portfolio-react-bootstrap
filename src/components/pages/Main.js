import React from 'react'
import {Switch,Route} from "react-router-dom";
import Profile from './Profile';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Home from './Home';

class Main extends React.Component {
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/portfolio" component={Portfolio}/>
            </Switch>
        )
    }
}

export default Main;