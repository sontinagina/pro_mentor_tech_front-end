import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from "./components/Home";
// import LoginCommon from "./components/common/LoginCommon";
// import Signin from "./components/Login/Signin";
// import Signup from "./components/Login/Signup";
import Dashboard from "./components/Dashboard";

import "./App.css";
class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Home page</h1>
            <Router>
               <div>
                  <nav>
                     <ul>
                        <li>
                           <Link to="/">Home</Link>
                        </li>
                        <li>
                           <Link to="/about">About</Link>
                        </li>
                        <li>
                           <Link to="/users">Users</Link>
                        </li>
                     </ul>
                  </nav>
                  <Switch>
                     <Route exact path="/about">
                        <div>about</div>
                     </Route>
                     <Route path="/users">
                        <div>user</div>
                     </Route>
                     <Route path="/">
                        <div>Home</div>
                     </Route>
                  </Switch>
               </div>
               {/* <Home /> */}
               {/* <LoginCommon /> */}
               {/* <Signin /> */}
               {/* <Signup /> */}
               <Dashboard />
            </Router>
         </div>
      );
   }
}
export default App;
