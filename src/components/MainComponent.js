import React, { Component } from 'react';
import { DRINKS } from '../shared/drinks';
import { DINNER } from '../shared/dinner';
import { DESSERT } from '../shared/dessert';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { Redirect, Switch, Route } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        drinks: DRINKS,
        dinner: DINNER,
        dessert: DESSERT,
      };
    }

    render() {
        return (
            <div>
                <Header />
                  <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                  </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;