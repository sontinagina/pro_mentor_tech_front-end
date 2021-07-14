import React from "react";
import { Link } from "react-router-dom";
function LoginCommon() {
   return (
      <div className="common1">
         <div className="logopage"></div>
         <div className="commonpagelinks">
            <div className="l1">
               <Link to="/Home">Home</Link>

               <Link to="/Signin">Sign In</Link>

               <Link to="/signup">Join For Free</Link>
               <Link />
            </div>
         </div>
      </div>
   );
}
export default LoginCommon;
