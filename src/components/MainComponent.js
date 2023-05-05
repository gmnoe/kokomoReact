import React, { Component } from 'react';
import { DRINKS } from '../shared/drinks';
import { DINNER } from '../shared/dinner';
import { DESSERT } from '../shared/dessert';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import Order from './OrderComponent';
import { Redirect, Switch, Route } from 'react-router-dom';


class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        drinks: DRINKS,
        dinner: DINNER,
        dessert: DESSERT      
      };
    }

    render() {
        return (
            <div>
                <Header />
                  <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/about' component={About} />
                    <Route exact path='/menu' render={() => <Menu drinks={this.state.drinks} 
                                                                  dinner={this.state.dinner} 
                                                                  dessert={this.state.dessert} />} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/order' component={Order} />
                    <Redirect to='/home' />
                  </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;