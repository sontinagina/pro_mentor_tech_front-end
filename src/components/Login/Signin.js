// import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

function Signin() {
   return (
      <div className="signinpage">
         <div className="logopage"></div>
         <div className="inputboth">
            <h1>Sign In</h1>
            <Form>
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
               <Button variant="primary" type="submit">
                  Sign In
               </Button>
               <Form.Text className="text-muted">
                  <div className="forgotindex">
                     If you forgot your username/password click here{" "}
                  </div>
               </Form.Text>

               <Link to="/sign_in" className="forgetlink">
                  Forgot Password
               </Link>

               <Link />
            </Form>
         </div>
      </div>
   );
}
export default Signin;
