import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

const Routes = () => (

    <BrowserRouter>
        <Route exact path="/1" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
    </BrowserRouter>
);

export default Routes