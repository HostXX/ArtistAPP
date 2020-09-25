import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './components/header';
import Home from './components/Home';
import Artist from './components/Artist';

const Routes = () => (
    <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route exact path='/artist/:id' component={Artist}/>
    </BrowserRouter>
);

export default Routes;