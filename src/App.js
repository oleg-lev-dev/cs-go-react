import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Bets from './routes/Bets';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Route path="/bets" exact component={Bets}/>
    </Router>
  );
}

export default App;
