import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import components here
import App from './App'
import Home from './components/Home';
import Contact from './components/Contact';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/Contact' component={Contact}></Route>
            <Route path='/' component={App}></Route>
            <Route path='/' component={App}></Route>
        </Switch>
    );
}
export default Router