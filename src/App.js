import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About'
import Home from './routes/Home'
import Navigation from "./Components/Navigation";
import Detail from "./Components/Detail";

const App = () => {
    return (
        <HashRouter>
            <Navigation/>
            <Route path={'/'} exact={true} component={Home} />
            <Route path={'/about'} component={About} />
            <Route path={'/movie-detail'} component={Detail} />
        </HashRouter>
    )

}

export default App;
