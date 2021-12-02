import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";

import { Route } from "react-router";
import Home from "./components/Home";
import Signin from "./components/Login/Login";

import Dashboard from "./components/Dashboard";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import "./App.css";
class App extends React.Component {
   constructor() {
      super();
      this.state = {
         loginFlag: "signin",
         URL: "/",
         //http://localhost:3001/
         // URL: "https://pro-mentor-techs-backend.herokuapp.com/",
      };
      this.getUserInfo = this.getUserInfo.bind(this);
      this.logout = this.logout.bind(this);
   }
   componentDidMount() {
      console.log("first time did component called");
      this.getUserInfo();
   }
   logout() {
      fetch(this.state.URL+"logout", {
         // credentials:'include',
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
      }).then((r) => {
         if (r.ok) {
            this.props.history.push("/");
         }
      });
   }
   getUserInfo() {
      fetch(this.state.URL+"userinfo", {
         // credentials:'include',
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
      })
         .then((r) => {
            if (r.ok) {
               this.props.history.push("/Dashboard");
            } else {
               this.props.history.push("/");
            }
         })
         .catch((err) => {
            console.log("error:", err);
         });
   }
   changeLoginFlag = (val) => {
      this.setState({
         loginFlag: val,
      });
   };
   static propTypes = {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired,
   };
   render() {
      return (
         <div>
            <div>
               <Route exact path="/Dashboard">
                  <Dashboard logout={this.logout} URL={this.state.URL}></Dashboard>
               </Route>
               <Route exact path="/">
                  <Home loginHandler={this.changeLoginFlag} URL={this.state.URL}></Home>
               </Route>
               <Route exact path="/Signin">
                  <Signin
                     loginHandler={this.changeLoginFlag}
                     flag={this.state.loginFlag} URL={this.state.URL}
                  ></Signin>
               </Route>
               <Route exact path="/Signup">
                  <Signin
                     loginHandler={this.changeLoginFlag}
                     flag={this.state.loginFlag} URL={this.state.URL}
                  ></Signin>
               </Route>
               {/* <Route exact path="/Profile">
                  <Profile
                     loginHandler={this.changeLoginFlag}
                     flag={this.state.loginFlag}
                  ></Profile>
               </Route> */}
            </div>
         </div>
      );
   }
}
export default withRouter(App);
