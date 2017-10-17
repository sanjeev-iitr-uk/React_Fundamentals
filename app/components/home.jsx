import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './navbar';
import Start from './start';
import One from './one';
import Two from './two';
class Home extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Start} />
            <Route exact path='/one' component={One} />
            <Route path='/two' component={Two} />
            <Route render={function () {
              return (
                <p>Not Found</p>
              )
            }} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default Home;