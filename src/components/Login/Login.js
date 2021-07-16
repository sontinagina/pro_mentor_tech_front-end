// import React, { Component } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

function Signin(props) {
   const [click1, setClick1] = useState("btn btn-light");
   const [click2, setClick2] = useState("btn btn-outline-light");
   let temp = "";
   const [userName, setUserName] = useState("");
   const [userEmail, setUserEmail] = useState("");
   const [userPassword, setUserPassword] = useState("");

   function submitHandler(e) {
      e.preventDefault();
      console.log("submit handler called");
      console.log(userEmail, userName, userPassword);
   }
   return (
      <div className="signinpage">
         <div className="logopage"></div>
         <div className="inputboth">
            <div className="subheader">
               {props.flag === "signin" ? <h3>Sign In</h3> : <h3>Sign Up</h3>}

               <Link
                  to={props.flag === "signup" ? "/signin" : "/signup"}
                  onClick={() => {
                     setUserName("");
                     setUserEmail("");
                     setUserPassword("");
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
                  }}
                  size="sm"
                  className="accB2"
               >
                  Mentee
               </Button>
            </div>
            <Form onSubmit={submitHandler}>
               {props.flag === "signup" ? (
                  <Form.Group controlId="formBasicEmail">
                     <Form.Label>User Name</Form.Label>
                     <Form.Control
                        className="input"
                        type="text"
                        onChange={(e) => {
                           setUserName(e.target.value);
                        }}
                     />
                  </Form.Group>
               ) : null}
               <Form.Group controlId="formBasicEmail">
                  <div className="psslbl">
                     <Form.Label>Email address</Form.Label>
                  </div>
                  <Form.Control
                     className="input"
                     type="email"
                     placeholder="Enter email"
                     value={userEmail}
                     onChange={(e) => {
                        setUserEmail(e.target.value);
                     }}
                  />
                  <Form.Text className="text-muted">
                     <div className="forgotindex">
                        We'll never share your email with anyone else.
                     </div>
                  </Form.Text>
               </Form.Group>

               <Form.Group controlId="formBasicPassword">
                  <div className="psslbl">
                     <Form.Label>Password</Form.Label>
                  </div>
                  <Form.Control
                     type="password"
                     placeholder="Password"
                     className="input"
                     onChange={(e) => {
                        setUserPassword(e.target.value);
                     }}
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
               {props.flag === "signin" ? (
                  <Form.Text className="text-muted">
                     <div className="forgotindex">
                        If you forgot your username/password click here{" "}
                     </div>
                  </Form.Text>
               ) : null}
               {props.flag === "signin" ? (
                  <Link to="/signin" className="forgetlink">
                     Forgot Password
                  </Link>
               ) : null}
            </Form>
         </div>
      </div>
   );
}
export default Signin;
