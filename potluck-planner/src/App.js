import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PotluckDetails from './components/PotluckDetails'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/details">
          <PotluckDetails />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
