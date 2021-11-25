import { useEffect, useState } from "react";
import { Button, Modal, Form, Spinner } from "react-bootstrap";
function FGPModal(props) {
   const stmin = 1;
   const stsec = 59;
   const [sec, setSeconds] = useState(stsec);
   const [min, setMinutes] = useState(stmin);
   const [stopper, setStopper] = useState(false);
   const [policy, setPolicy] = useState(false);
   const [activeBtn, setActiveBtn] = useState(true);
   const [nextbtn, setNextbtn] = useState(true);
   const [spinnerbtn, setSpinnerbtn] = useState(false);

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
         props.setOtp("");
         props.setError({});
         props.setEmail(props.email);
      }
   }
   const Validate = (e) => {
      e.preventDefault();
      let tempError = {};
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
            setSpinnerbtn(true);
            // --------------------
            const params = "type=email";
            fetch(
               "https://pro-mentor-techs-backend.herokuapp.com/forgotpass?" +
                  params,
               {
                  method: "POST",
                  headers: {
                     "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                     email: props.email,
                  }),
               }
            )
               .then((r) => {
                  setSpinnerbtn(false);
                  return r.json();
               })
               .then((r) => {
                  console.log("email1: " + r);
                  if (r.err) {
                     let tempErr = {
                        emailError: r.err,
                     };
                     props.setError({ ...tempErr });
                  }
                  if (r.msg) {
                     console.log(r.msg);
                     props.setError({});
                     props.setPage("otp");
                     setStopper(true);
                     setMinutes(stmin);
                     setSeconds(stsec);
                  }
               });
         }
         console.log(emailErr);
         props.setError({ ...emailErr });
         console.log("2");
      }
      if (props.page === "otp") {
         let params = "type=otp";
         console.log("======================", props.otp);

         fetch(
            "https://pro-mentor-techs-backend.herokuapp.com/forgotpass?" +
               params,
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  email: props.email,
                  otp: props.otp,
               }),
            }
         )
            .then((r) => {
               return r.json();
            })
            .then((r) => {
               console.log("opt1");
               console.log(r);
               if (r.err) {
                  let tempErr = {
                     otpError: r.err,
                  };
                  props.setError({ ...tempErr });
               }
               if (r.msg) {
                  console.log(r.msg);
                  props.setError({});
                  props.setPage("pass");
                  setActiveBtn(true);
                  setStopper(false);
                  setMinutes(stmin);
                  setSeconds(stsec);
               }
            });
      }

      if (props.page === "pass") {
         var passRegix = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
         );
         if (
            props.pass1 !== undefined ||
            props.pass1 !== null ||
            props.pass1 !== ""
         ) {
            if (passRegix.test(props.pass1) === false) {
               tempError["passwordError"] = "Invalid password";
               props.setPass2("");
               setActiveBtn(true);
            } else {
               // ---------------
               const params = "type=confirmpass";
               fetch(
                  "https://pro-mentor-techs-backend.herokuapp.com/forgotpass?" +
                     params,
                  {
                     method: "POST",
                     headers: {
                        "Content-Type": "application/json",
                     },
                     body: JSON.stringify({
                        email: props.email,
                        password: props.pass2,
                     }),
                  }
               )
                  .then((r) => {
                     console.log("pass1: " + r);
                     console.log(r);
                     if (r.ok) {
                        // return r.json();
                        tempError["passwordError"] = "";
                        setActiveBtn(false);
                        handleClose();
                        props.setShow(!props.show);
                        return r.json();
                     } else {
                        return r.json();
                     }
                  })
                  .then((r) => {
                     if (r.msg) {
                        console.log(r.msg);
                     }
                     if (r.err) {
                        alert(r.err);
                     }
                  });

               // ------------
            }
         }
         props.setError(tempError);
      }
      //otp validation
   };
   const onChangeHandler = (e) => {
      props.setOtp(e.target.value);
      if (props.otp !== null && props.otp !== undefined) {
         if (e.target.value.length === 4) {
            setNextbtn(false);
         } else {
            setNextbtn(true);
         }
      }
   };
   function handleClose() {
      console.log("modal page");
      setStopper(false);
      setMinutes(stmin);
      setSeconds(stsec);
      setSpinnerbtn(false);
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
                              {spinnerbtn === false ? (
                                 <Button
                                    variant="warning"
                                    size="sm"
                                    type="submit"
                                 >
                                    send otp
                                 </Button>
                              ) : (
                                 <Button variant="primary" disabled>
                                    <Spinner
                                       as="span"
                                       animation="grow"
                                       size="sm"
                                       role="status"
                                       aria-hidden="true"
                                    />
                                    Sending...
                                 </Button>
                              )}
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
                                    onChangeHandler(e);
                                 }}
                              />
                              <Form.Text className="text-muted">
                                 <div style={{ color: "red" }}>
                                    {props.error["otpError"]}
                                 </div>
                              </Form.Text>
                              <br />
                              <Button
                                 variant="warning"
                                 disabled={nextbtn}
                                 type="submit"
                              >
                                 next
                              </Button>
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
                                    <div style={{ color: "red" }}>
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
                                       {props.match !== undefined
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
