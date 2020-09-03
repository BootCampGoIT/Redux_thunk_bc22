import React from 'react';
import { NavLink, Route, Redirect, Switch } from "react-router-dom";
import BetForm from './betForm/BetForm';
import BetResult from './betResult/BetResult';

const App = () => (
  <>
    <ul style={{ display: "flex", listStyle: "none" }}>
      <li style={{ margin: "0 5px" }}>
        <NavLink to="/bet"
          style={{ textTransform: "upperCase", color: "black", fontWeight: "600", textDecoration: "none" }}
          activeStyle={{color: "red"}}>
          Bets</NavLink>
      </li>
      <li>
        <NavLink
          to="/betresult"
          style={{ textTransform: "upperCase", color: "black", fontWeight: "600", textDecoration: "none" }}
          activeStyle={{color: "red"}}>
          Result</NavLink>
      </li>
    </ul>

    <div>
      <Switch>
        <Route path="/bet" component={BetForm} />
        <Route path="/betresult" component={BetResult} />
        <Redirect to="/bet" />
      </Switch>

    </div>
  </>
);


export default App;