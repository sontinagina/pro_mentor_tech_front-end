import { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
function FGPModal(props) {
   const stmin = 1;
   const stsec = 59;
   const [sec, setSeconds] = useState(stsec);
   const [min, setMinutes] = useState(stmin);
   const [stopper, setStopper] = useState(false);
   const [policy, setPolicy] = useState(false);
   const [activeBtn, setActiveBtn] = useState(true);

   useEffect(() => {
      props.setError({});
      props.setEmail({});
      // let passwordInfo = "Password should be according to the policy";
   }, []);
   useEffect(() => {
      if (stopper) {
         const intervalId = setInterval(() => {
            tick();
            console.log("use-effect of timer");
         }, 1000);
         return () => {
            console.log("clear interval");
            clearInterval(intervalId);
         };
      }
      console.log("new console");
   }, [sec, stopper]);

   function tick() {
      if (sec === 0 && min > 0) {
         console.log("1-->", min, sec);
         setMinutes((min) => parseInt(min) - 1);
         setSeconds((sec) => parseInt(sec) + 59);
      } else if (sec > 0) {
         setSeconds((sec) => parseInt(sec) - 1);
         console.log("2-->", min, sec);
      }

      if (min <= 0 && sec <= 0) {
         setStopper(false);
         props.setPage("email");
      }
   }
   const Validate = (e) => {
      e.preventDefault();
      let tempError = {};
      let newErrorColor = {};
      if (props.page === "email") {
         console.log("1");
         console.log(props.email);
         let emailErr = {};
         if (
            props.email === "" ||
            props.email === null ||
            props.email === undefined
         ) {
            emailErr["emailError"] = "Invalid email";
         } else {
            console.log("else email console");

            props.setPage("otp");
            setStopper(true);
            setMinutes(stmin);
            setSeconds(stsec);
         }
         console.log(emailErr);
         props.setError({ ...emailErr });
         console.log("2");
      }
      if (props.page === "pass") {
         var passRegix = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
         );
         if (
            props.pass1 != undefined ||
            props.pass1 != null ||
            props.pass1 != ""
         ) {
            if (passRegix.test(props.pass1) === false) {
               tempError["passwordError"] = "Invalid password";
               props.setPass2("");
               setActiveBtn(true);
            } else {
               tempError["passwordError"] = "";
               setActiveBtn(false);
            }
         }
         props.setError(tempError);
      }
      //otp validation
   };
   const OtpHandler = (e) => {
      props.setOtp(e.target.value);

      // console.log(e.target.value);
      if (props.otp !== null && props.otp !== undefined) {
         console.log("this line executed" + e.target.value.length);

         if (e.target.value.length === 4) {
            props.setPage("pass");
            setActiveBtn(true);
            setStopper(false);
            setMinutes(stmin);
            setSeconds(stsec);
         }
      }
   };
   function handleClose() {
      console.log("modal page");
      setStopper(false);
      setMinutes(stmin);
      setSeconds(stsec);
   }
   return (
      <div className="modalpage">
         <div>
            <Modal
               show={props.show}
               onHide={() => {
                  handleClose();
                  props.setShow(!props.show);
               }}
               dialogClassName="modal-90w"
               aria-labelledby="example-custom-modal-styling-title"
            >
               <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                     Reset your password
                  </Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <div>
                     <Form onSubmit={Validate}>
                        {props.page === "email" ? (
                           <div>
                              {" "}
                              <Form.Group
                                 className="mb-3"
                                 controlId="formBasicEmail"
                              >
                                 <Form.Label>Email address</Form.Label>
                                 <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={props.email}
                                    onChange={(e) => {
                                       return props.setEmail(e.target.value);
                                    }}
                                 />
                                 <Form.Text className="text-muted">
                                    <div style={{ color: "red" }}>
                                       {props.error["emailError"] !== null
                                          ? props.error["emailError"]
                                          : null}
                                    </div>
                                 </Form.Text>
                              </Form.Group>
                              <Button variant="warning" size="sm" type="submit">
                                 send otp
                              </Button>
                           </div>
                        ) : null}

                        {props.page === "otp" ? (
                           <Form.Group
                              className="mb-3"
                              controlId="formBasicOtp"
                           >
                              <div style={{ float: "right" }}>
                                 <div
                                    style={{
                                       color: "green",
                                       width: "10%",
                                    }}
                                 >
                                    {min}:{sec}
                                 </div>
                              </div>
                              <Form.Label>Enter otp </Form.Label>
                              <Form.Control
                                 min="0"
                                 type="number"
                                 placeholder="Enter OTP"
                                 value={props.otp}
                                 onChange={(e) => {
                                    OtpHandler(e);
                                 }}
                              />
                              <Form.Text className="text-muted">
                                 <div style={{ color: "red" }}>
                                    {props.error["otpError"]}
                                 </div>
                              </Form.Text>
                           </Form.Group>
                        ) : null}
                        {props.page === "pass" ? (
                           <>
                              <Form.Group
                                 className="mb-3"
                                 controlId="formBasicpasswors1"
                              >
                                 <Form.Label>New password</Form.Label>
                                 <Form.Control
                                    type="password"
                                    placeholder="Enter password"
                                    value={props.pass1}
                                    onChange={(e) => {
                                       props.setPass1(e.target.value);
                                    }}
                                 />
                                 <Form.Text className="text-muted">
                                    <div style={{ color: "blue" }}>
                                       {props.error["passwordError"] !==
                                       undefined
                                          ? props.error["passwordError"]
                                          : props.info["passwordInfo"]}
                                       {"   "}
                                       <Button
                                          onClick={() => setPolicy(!policy)}
                                          variant="warning"
                                          size="sm"
                                          // height="-3px"
                                       >
                                          policy
                                       </Button>
                                    </div>
                                 </Form.Text>
                              </Form.Group>

                              <Form.Group
                                 className="mb-3"
                                 controlId="formBasicpassword2"
                              >
                                 <Form.Label>Confirm new password</Form.Label>
                                 <Form.Control
                                    type="text"
                                    placeholder="Re-enter password "
                                    value={props.pass2}
                                    onChange={(e) => {
                                       props.setPass2(e.target.value);
                                       if (
                                          e.target.value !== null &&
                                          e.target.value !== undefined &&
                                          e.target.value !== ""
                                       ) {
                                          if (
                                             e.target.value.length >=
                                             props.pass1.length
                                          ) {
                                             if (
                                                e.target.value !== props.pass1
                                             ) {
                                                props.setMatch(
                                                   "password doesn't match"
                                                );
                                                setActiveBtn(true);
                                             } else {
                                                props.setMatch("");
                                                setActiveBtn(false);
                                             }
                                          } else {
                                             props.setMatch("");
                                             setActiveBtn(true);
                                          }
                                       }
                                    }}
                                 />
                                 <Form.Text className="text-muted">
                                    <div style={{ color: "red" }}>
                                       {props.match != undefined
                                          ? props.match
                                          : null}
                                    </div>
                                 </Form.Text>
                              </Form.Group>
                              <Button
                                 variant="warning"
                                 size="sm"
                                 type="submit"
                                 disabled={activeBtn}
                              >
                                 Confirm
                              </Button>
                           </>
                        ) : null}
                     </Form>
                  </div>
               </Modal.Body>
            </Modal>
         </div>

         <Modal
            size="sm"
            show={policy}
            onHide={() => {
               setPolicy(!policy);
            }}
            aria-labelledby="example-modal-sizes-title-sm"
         >
            <Modal.Header closeButton>
               <Modal.Title id="example-modal-sizes-title-sm">
                  password policy
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               Passwords must have upper and lower case letters, at least 1
               number and special character, not match or contain email, and be
               at least 8 characters long.
            </Modal.Body>
         </Modal>
      </div>
   );
}
export default FGPModal;
