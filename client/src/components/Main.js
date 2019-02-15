import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Will always show
import Sidebar from './Sidebar';
import Categories from '../components/Categories';

// Will show based on user nav
import Home from './Home';
// import Query from './Query';
import Snacks from './Snacks';
import Drinks from './Drinks';
import Healthy from './Healthy';
import Grocery from './Grocery';
import HomeGoods from './HomeGoods';

class Main extends Component {

    render() {
        return (
            <div className="main">
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='right'>
                    <Categories />
                    <Switch>
                        <Route
                            exact path='/'
                            component={() => <Home products={this.props.products} />}
                        />
                        <Route
                            path='/snacks'
                            component={() => <Snacks products={this.props.products} />}
                        />
                        <Route
                            path='/drinks'
                            component={() => <Drinks products={this.props.products} />}
                        />
                        <Route
                            path='/grocery'
                            component={() => <Grocery products={this.props.products} />}
                        />
                        <Route
                            path='/healthy'
                            component={() => <Healthy products={this.props.products} />}
                        />
                        <Route
                            path='/homegoods'
                            component={() => <HomeGoods products={this.props.products} />}
                        />
                    </Switch>
                </div>
            </div>
        )
    };
}

export default Main;