import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import HomeSearchBar from './home_search_bar';
import HomeSearchBarContainer from './home_search_bar_container';

import NetworkOverviewContainer from './network_overview_container';
import HomeFeeds from './home_feeds';

const Home = () => {
  return (
    <div>
        {/* <BrowserRouter> */}
            <HomeSearchBarContainer />
        {/* </BrowserRouter> */}
      {/* <HomeSearchBar /> */}
      {/* TODO feed update toggle component */}
      <NetworkOverviewContainer />
      <HomeFeeds />
    </div>
  )
}

export default Home;