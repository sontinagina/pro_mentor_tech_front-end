// import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

function Signin(props) {
   const [click1, setClick1] = useState("btn btn-light");
   const [click2, setClick2] = useState("btn btn-outline-light");
   let temp = "";
   return (
      <div className="signinpage">
         <div className="logopage"></div>
         <div className="inputboth">
            <div className="subheader">
               {props.flag === "signin" ? <h3>Sign In</h3> : <h3>Sign Up</h3>}

               <Link
                  to={(props.flag === "signup" ? "/signin" : "/signup") || "/"}
                  onClick={() => {
                     props.flag === "signin"
                        ? props.loginHandler("signup")
                        : props.loginHandler("signin");
                  }}
               >
                  <Button variant="btn btn-outline-light">
                     {props.flag === "signin" ? "sign up" : "sign in"}
                  </Button>
               </Link>
            </div>
            <div className="accountType">
               <h3>Account type</h3>
               <Button
                  variant={click1}
                  onClick={() => {
                     temp = click1;
                     setClick1(click2);
                     setClick2(temp);
                     console.log(click1, click2);
                  }}
                  size="sm"
               >
                  Mentor
               </Button>
               <Button
                  variant={click2}
                  onClick={() => {
                     temp = click2;
                     setClick2(click1);
                     setClick1(temp);
                     console.log(click1, click2);
                  }}
                  size="sm"
                  className="accB2"
               >
                  Mentee
               </Button>
            </div>
            <Form>
               {props.flag === "signup" ? (
                  <Form.Group controlId="formBasicEmail">
                     <Form.Label>User Name</Form.Label>
                     <Form.Control className="input" type="text" />
                  </Form.Group>
               ) : null}
               <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                     className="input"
                     type="email"
                     // placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                     <div className="forgotindex">
                        We'll never share your email with anyone else.
                     </div>
                  </Form.Text>
               </Form.Group>

               <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                     type="password"
                     placeholder="Password"
                     className="input"
                  />
               </Form.Group>
               <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
               </Form.Group>
               {props.flag === "signin" ? (
                  <Button variant="primary" type="submit">
                     Sign In
                  </Button>
               ) : (
                  <Button variant="primary" type="submit">
                     Sign Up
                  </Button>
               )}

               <Form.Text className="text-muted">
                  <div className="forgotindex">
                     If you forgot your username/password click here{" "}
                  </div>
               </Form.Text>

               <Link to="/signin" className="forgetlink">
                  Forgot Password
               </Link>

               <Link />
            </Form>
         </div>
      </div>
   );
}
export default Signin;
