import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router'

import RunWeb3Container from './RunWeb3Container'
import BlockPageContainer from './block/block_page_container';
import BlockPageRouteContainer from './block/block_page_route_container';
import Home from './home/home';
import "./home/style/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => (
  <div className='app'>
    <RunWeb3Container />
    <header>
    </header >
    <main>
      {/* <EthOverview /> */}
      {/* <Home /> */}
      <div className='container'>
        {/* <BrowserRouter> */}
        <Switch>
          <Route path='/home' component={Home} />
          <Route exact path='/block' component={BlockPageContainer} />
          <Route path='/block/:hash' component={BlockPageRouteContainer} />
          <Route path='/' render={() => <Redirect to="/home" />} />
        </Switch>
        {/* </BrowserRouter> */}
      </div>
    </main>
    <footer className='blue-footer'>
      
    </footer>

  </div>
);

export default App;
