import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function LoginCommon() {
   return (
      <div className="common1">
         <div className="logopage"></div>

         <div className="logopage"></div>
         <div className="commonpagelinks">
            <div className="l1">
               <Link to="/home">Home</Link>

               <Link to="/sign_in">Sign In</Link>

               <Link to="/sign_up">Join For Free</Link>
               <Link />
            </div>
         </div>
      </div>
   );
}
export default LoginCommon;
