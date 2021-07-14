import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import LoginCommon from "./components/common/LoginCommon";
import Signin from "./components/Login/Login";

import Dashboard from "./components/Dashboard";

import "./App.css";
class App extends React.Component {
   constructor() {
      super();
      this.state = {
         loginFlag: "signin",
      };
   }
   changeLoginFlag = (val) => {
      this.setState({
         loginFlag: val,
      });
   };
   render() {
      return (
         <div>
            <h1></h1>
            <Router>
               <div>
                  <Switch>
                     <Route exact path="/">
                        <Home loginHandler={this.changeLoginFlag}></Home>
                     </Route>
                     <Route exact path="/LoginCommon ">
                        <LoginCommon> </LoginCommon>
                     </Route>
                     <Route exact path="/Signin">
                        <Signin
                           loginHandler={this.changeLoginFlag}
                           flag={this.state.loginFlag}
                        ></Signin>
                     </Route>
                     <Route exact path="/Signup">
                        <Signin
                           loginHandler={this.changeLoginFlag}
                           flag={this.state.loginFlag}
                        ></Signin>
                     </Route>
                     <Route exact path="/Dashboard">
                        <Dashboard></Dashboard>
                     </Route>
                     <Route exact path="/LoginCommon">
                        <LoginCommon></LoginCommon>
                     </Route>
                  </Switch>
               </div>
            </Router>
         </div>
      );
   }
}
export default App;
