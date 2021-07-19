import { useEffect } from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
function FGPModal(props) {
   useEffect(() => {
      props.setError({});
      props.setEmail({});
   }, []);
   function Validate(e) {
      e.preventDefault();
      if (props.page === "email") {
         let emailErr = {};
         if (
            props.email === "" ||
            props.email === null ||
            props.email === undefined
         ) {
            emailErr["emailError"] = "Invalid email";
         }
         props.setError(emailErr);
      }
      //otp validation
   }
   return (
      <div className="modalpage">
         <div>
            <Modal
               show={props.show}
               onHide={() => {
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
                              <Form.Group
                                 className="mb-3"
                                 controlId="formBasicOtp"
                              >
                                 <Form.Label>OTP field</Form.Label>
                                 <Form.Control
                                    min="0"
                                    type="number"
                                    placeholder="Enter OTP"
                                    value={props.otp}
                                    onChange={(e) =>
                                       props.setOtp(e.target.value)
                                    }
                                 />
                                 <Form.Text className="text-muted">
                                    <div style={{ color: "red" }}>
                                       {props.error["otpError"]}
                                    </div>
                                 </Form.Text>
                              </Form.Group>
                              <Form.Group
                                 className="mb-3"
                                 controlId="formBasicpasswors1"
                              >
                                 <Form.Label>reset password</Form.Label>
                                 <Form.Control
                                    type="text"
                                    placeholder="Enter password"
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
                           </div>
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