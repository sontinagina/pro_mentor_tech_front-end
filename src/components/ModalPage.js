import { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
function FGPModal(props) {
   const [sec, setSeconds] = useState(59);
   const [min, setMinutes] = useState(0);
   const [stopper, setStopper] = useState(false);

   useEffect(() => {
      props.setError({});
      props.setEmail({});
   }, []);
   useEffect(() => {
      if (stopper) {
         const intervalId = setInterval(() => {
            tick();
            console.log("useeffect of timer");
         }, 1000);
         return () => {
            clearInterval(intervalId);
         };
      }
      console.log("new console");
   }, [sec]);

   function tick() {
      if (sec == 0 && min > 0) {
         console.log("1-->", min, sec);
         setMinutes((min) => parseInt(min) - 1);
         setSeconds((sec) => parseInt(sec) + 59);
      } else if (sec > 0) {
         //setMinutes((min) => parseInt(min) - 1);
         setSeconds((sec) => parseInt(sec) - 1);
         console.log("2-->", min, sec);
      }

      if (min <= 0 && sec <= 0) {
         setStopper(false);
      }
   }
   const Validate = (e) => {
      e.preventDefault();
      if (props.page === "email") {
         let emailErr = {};
         if (
            props.email === " " ||
            props.email === null ||
            props.email === undefined
         ) {
            emailErr["emailError"] = "Invalid email";
         } else {
            props.setPage("otp");
            setStopper(true);
         }
         props.setError(emailErr);
      }
      //otp validation
   };
   const OtpHandler = (e) => {
      props.setOtp(e.target.value);

      // console.log(e.target.value);
      if (props.otp !== null && props.otp !== undefined) {
         console.log("this line executed" + e.target.value.length);

         if (e.target.value.length == 4) {
            props.setPage("pass");
         }
      }
   };
   const handleClose = () => {
      console.log("modal page");
   };
   // props.setShow(false);
   // const handleShow = () => props.setShow(true);
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
                                    onChange={(e) =>
                                       props.setEmail(e.target.value)
                                    }
                                 />
                                 <Form.Text className="text-muted">
                                    <div style={{ color: "red" }}>
                                       {props.error["emailError"] !== undefined
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
                                 <Form.Label>reset password</Form.Label>
                                 <Form.Control
                                    type="text"
                                    placeholder="Enter password"
                                    value={props.pass1}
                                    onChange={(e) =>
                                       props.setPass1(e.target.value)
                                    }
                                 />
                                 <Form.Text className="text-muted">
                                    <div style={{ color: "red" }}>
                                       {props.passwordError}
                                    </div>
                                 </Form.Text>
                              </Form.Group>
                              <Form.Group
                                 className="mb-3"
                                 controlId="formBasicpassword2"
                              >
                                 <Form.Label>Confirm password</Form.Label>
                                 <Form.Control
                                    type="email"
                                    placeholder="Re-enter passwor "
                                    value={props.email}
                                    onChange={(e) =>
                                       props.setEmail(e.target.value)
                                    }
                                 />
                                 <Form.Text className="text-muted">
                                    <div style={{ color: "red" }}>
                                       {props.emailError}
                                    </div>
                                 </Form.Text>
                              </Form.Group>
                              <Button variant="warning" size="sm" type="submit">
                                 confirm
                              </Button>
                           </>
                        ) : null}
                     </Form>
                  </div>
               </Modal.Body>
            </Modal>
         </div>
      </div>
   );
}
export default FGPModal;
