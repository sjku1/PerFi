import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import NewAccount from './NewAccount.jsx';
import Login from './login';

//const LoginComponent = () => (<Login />);

// dumb component used for templating
var DumbComponent = () => {
    return(
        <div></div>
    );
};

function NavigationBar() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/Transaction/">Transaction</Link> </li>
            <li> <Link to="/Budget/">Budget</Link> </li>
            <li> <Link to="/auth/account/">Account</Link> </li>
          </ul>
        </nav>
        <Route path="/" exact component={DumbComponent} />
        <Route path="/Home" component={DumbComponent} />
        <Route path="/transaction" component={DumbComponent} />
        <Route path="/Budget" component={DumbComponent} />
        {/*<Route path="/account" component={LoginComponent}/>
        <Route path="/newaccount" component={NewAccount}/>*/}
      </div>
    </Router>
  );
}

export default NavigationBar;