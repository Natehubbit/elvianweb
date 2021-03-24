import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../containers/Home';
import './style.scss'

const App:React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
