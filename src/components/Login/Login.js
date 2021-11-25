import { Link } from "react-router-dom";
import { Form, Button, Modal, Alert } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import FGPModal from "../ModalPage";
import { useHistory } from "react-router-dom";
import image1 from "../../images/dribbble-2.jpg";
import weblogo from "../../images/newone.jpg";

function Signin(props) {
   const [click1, setClick1] = useState("btn btn-light");
   const [click2, setClick2] = useState("btn btn-outline-light");
   let temp = "";
   const [userName, setUserName] = useState("");
   const [userAccountType, setUserAccountType] = useState("mentor");
   const [userEmail, setUserEmail] = useState("");
   const [userPassword, setUserPassword] = useState("");
   const [error, setError] = useState({});
   const [info, setInfo] = useState({});
   const [smShow, setSmShow] = useState(false);
   const [fgShow, setfgShow] = useState(false);
   const [filedColor, setFieldColor] = useState({});
   const [modalEmail, setModalEmail] = useState("");
   const [modalError, setModalError] = useState({});
   const [modalPage, setModalPage] = useState("email");
   const [otp, setOtp] = useState("");
   const [newPassword1, setNewPassword1] = useState("");
   const [newPassword2, setNewPassword2] = useState("");
   const [match, setMatch] = useState("");
   const [showPopover, setShowPopover] = useState(false);
   const [colorPopover, setColorPopover] = useState("forestgreen");
   const [valuePopover, setValuePopover] = useState("success");
   let history = useHistory();
   useEffect(() => {
      console.log("use effect executed");
      let newInfo = {};
      let newFieldColor = {};
      newInfo["emailInfo"] = "We'll never share your email with anyone else ";
      newInfo["passwordInfo"] = "Password should be according to the policy";
      newFieldColor["nameColor"] = "white";
      newFieldColor["emailColor"] = "white";
      newFieldColor["passwordColor"] = "white";
      setInfo(newInfo);
      setFieldColor(newFieldColor);
      history.push("/signin");
   }, []);

   function submitHandler(e) {
      console.log(info);
      console.log(error);
      e.preventDefault();
      let tempError = {};
      let newErrorColor = {};

      if (props.flag === "signup") {
         var nameRegex = /^[a-zA-Z ]{2,30}$/;
         if (nameRegex.test(userName) === false) {
            tempError["nameError"] = "invalid Name ";
            newErrorColor["nameColor"] = "red";
         }

         if (userName === "" || userName === null || userName.length === 0) {
            var nameErr = tempError["nameError"];
            tempError["nameError"] =
               nameErr.length > 0
                  ? tempError["nameError"] + ", Name can't be null"
                  : "Name can't be null";
            newErrorColor["nameColor"] = "red";
         }
      }
      if (userEmail === "" || userEmail === null || userEmail.length === 0) {
         tempError["emailError"] = "invalid email";
         newErrorColor["emailColor"] = "red";
      }
      var passRegix = new RegExp(
         "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
      );

      if (passRegix.test(userPassword) === false) {
         tempError["passwordError"] = "Invalid password";
         newErrorColor["passwordColor"] = "red";
      }
      setError(tempError);
      setFieldColor(newErrorColor);
      if (
         tempError.nameError ||
         tempError.emailError ||
         tempError.passwordError
      ) {
         console.log("error");
      } else {
         if (props.flag === "signup") {
            fetch("https://pro-mentor-techs-backend.herokuapp.com/signup", {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  accounttype: userAccountType,
                  username: userName,
                  email: userEmail,
                  password: userPassword,
               }),
            })
               .then((r) => {
                  return r.json();
               })
               .then((r) => {
                  if (r.err) {
                     setShowPopover(true);
                     setColorPopover("red");
                     setValuePopover("Invalid username/password");
                     setTimeout(() => {
                        setShowPopover(false);
                     }, 4000);
                  }
                  if (r.msg) {
                     props.loginHandler("signin");
                     history.push("/signin");

                     setShowPopover(true);
                     setColorPopover("forestgreen");
                     setValuePopover("Signup Successfully");
                     setTimeout(() => {
                        setShowPopover(false);
                     }, 4000);
                  }
               });
         }
         if (props.flag === "signin") {
            fetch("https://pro-mentor-techs-backend.herokuapp.com/signin", {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  accounttype: userAccountType,
                  email: userEmail,
                  password: userPassword,
               }),
            })
               .then((r) => {
                  return r.json();
               })
               .then((r) => {
                  console.log(r);
                  if (r.err) {
                     setShowPopover(true);
                     setColorPopover("red");
                     setValuePopover("Invalid username/password");
                     setTimeout(() => {
                        setShowPopover(false);
                     }, 4000);
                  }
                  if (r.msg) {
                     history.push("/Dashboard");
                  }
               });
         }
      }
   }
   return (
      <div className="signinpage">
         <div className="logopagesignin">
          <div className="signlogo">
                  <img src={weblogo} alt="/" className="img-responsive1" />
               </div><img
                     className="signimg33"
                     src={image1}
                     alt="not found"
                  /></div>

         <div className="inputboth">
            <div className="subheader">
               {props.flag === "signin" ? <h3>Sign In</h3> : <h3>Sign Up</h3>}

               <Link
                  to={props.flag === "signup" ? "/signin" : "/signup"}
                  onClick={() => {
                     let colorChange = {};
                     colorChange["nameColor"] = "white";
                     colorChange["emailColor"] = "white";
                     colorChange["passwordColor"] = "white";
                     setFieldColor(colorChange);
                     setUserName("");
                     setUserEmail("");
                     setUserPassword("");
                     setError({});
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
               <h4>Account type</h4>
               <Button
                  value={userAccountType}
                  variant={click1}
                  onClick={() => {
                     setUserAccountType("mentor");
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
                     setUserAccountType("mentee");

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
                     <Form.Text className="text-muted">
                        <div
                           className="forgotindex"
                           style={{ color: filedColor.nameColor }}
                        >
                           {error["nameError"] !== undefined
                              ? error["nameError"]
                              : null}
                        </div>
                     </Form.Text>
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
                     <div
                        className="forgotindex"
                        value="nothing"
                        style={{ color: filedColor.emailColor }}
                     >
                        {error.emailError !== undefined
                           ? error.emailError
                           : info.emailInfo}
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
                     value={userPassword}
                     onChange={(e) => {
                        setUserPassword(e.target.value);
                     }}
                  />
                  <Form.Text className="text-muted">
                     <div
                        className="forgotindex"
                        style={{ color: filedColor.passwordColor }}
                     >
                        {error.passwordError !== undefined
                           ? error.passwordError
                           : info.passwordInfo}
                        {"    "}
                        {error.passwordError !== undefined ? (
                           <Button
                              onClick={() => setSmShow(!smShow)}
                              variant="warning"
                              size="sm"
                           >
                              policy
                           </Button>
                        ) : null}
                     </div>
                  </Form.Text>
               </Form.Group>
               <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
               </Form.Group>
               <div className="mystyle">
                  <div>
                     {props.flag === "signin" ? (
                        <Button variant="primary" type="submit">
                           Sign In
                        </Button>
                     ) : (
                        <Button variant="primary" type="submit">
                           Sign Up
                        </Button>
                     )}
                  </div>
               </div>
               {props.flag === "signin" ? (
                  <Form.Text className="text-muted">
                     <div className="forgotindex">
                        If you forgot your username/password click here{" "}
                     </div>
                  </Form.Text>
               ) : null}
               {props.flag === "signin" ? (
                  <Button
                     onClick={() => {
                        setModalPage("email");
                        setModalEmail("");
                        setModalError({});
                        setfgShow(true);
                        setOtp("");
                        setNewPassword1("");
                        setNewPassword2("");
                        setMatch("");
                     }}
                     className="forgetlink"
                     variant="link"
                  >
                     Forgot Password
                  </Button>
               ) : null}
            </Form>
         </div>
         <div className="mystyle">
            {" "}
            {showPopover ? (
               <Alert
                  key="idx"
                  variant={colorPopover}
                  style={{ backgroundColor: colorPopover }}
                  className="alerIn"
               >
                  {valuePopover}
               </Alert>
            ) : null}
         </div>
         <FGPModal
            show={fgShow}
            setShow={setfgShow}
            email={modalEmail}
            setEmail={setModalEmail}
            page={modalPage}
            setPage={setModalPage}
            otp={otp}
            setOtp={setOtp}
            pass1={newPassword1}
            setPass1={setNewPassword1}
            pass2={newPassword2}
            setPass2={setNewPassword2}
            error={modalError}
            setError={setModalError}
            info={info}
            setInfo={setInfo}
            match={match}
            setMatch={setMatch}
         />
         <Modal
            size="sm"
            show={smShow}
            onHide={() => {
               setSmShow(!smShow);
            }}
            className="modalshow"
            aria-labelledby="example-modal-sizes-title-sm"
         >
            <Modal.Header closeButton>
               <Modal.Title id="example-modal-sizes-title-sm">
                  password policy
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               Passwords must have upper and lower case, at least 1 number and
               special character, not match or contain email, and be at least 8
               characters long.
            </Modal.Body>
         </Modal>
      </div>
   );
}
export default Signin;
