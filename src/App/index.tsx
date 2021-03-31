import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom'
import Cakes from '../containers/Cakes';
import CustomOrder from '../containers/CustomOrder';
import Home from '../containers/Home';
import './style.scss'

const App:React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/all' component={Cakes} />
        <Route exact path='/customOrder' component={CustomOrder} />
      </Switch>
    </Router>
  );
}

export default App;
