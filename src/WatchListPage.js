import React from 'react';
import WatchList from './Watchlist';

const WatchlistPage = ({ watchList }) => {
  return (
    <div>
      <h1>My Watchlist</h1>
      <WatchList watchList={watchList} />
    </div>
  );
};

export default WatchlistPage;
