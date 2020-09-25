import React from 'react';
import { HashRouter, Route} from 'react-router-dom';

import Header from './components/header';
import Home from './components/Home';
import Artist from './components/Artist';

const Routes = () => (
    <HashRouter>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route exact path='/artist/:id' component={Artist}/>
    </HashRouter>
);

export default Routes;