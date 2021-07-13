// import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

function Signup() {
   return (
      <div className="signinpage">
         <div className="logopage"></div>
         <div className="inputboth">
            <h1>Sign Up</h1>
            <Form>
               <Form.Group controlId="formBasicEmail">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                     className="input"
                     type="text"
                     // placeholder="Enter email"
                  />
               </Form.Group>
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
                  Sign Up
               </Button>
               <Form.Text className="text-muted">
                  <div className="forgotindex">
                     By clicking "Sign Up" you will enter within main wepage{" "}
                  </div>
               </Form.Text>

               {/* <Link to="/sign_in" className="forgetlink">
                  Forgot Password
               </Link> */}

               <Link />
            </Form>
         </div>
      </div>
   );
}
export default Signup;
