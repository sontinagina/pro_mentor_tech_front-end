import { useEffect } from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
function FGPModal(props) {
   useEffect(() => {
      props.setEmailError();
      props.setEmail();
   }, []);
   function Validate(e) {
      e.preventDefault();
      if (
         props.email === "" ||
         props.email === null ||
         props.email === undefined
      ) {
         props.setEmailError("invalid email");
      } else {
         props.setEmailError();
      }
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
                  <Form onSubmit={Validate}>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                           type="email"
                           placeholder="Enter email"
                           value={props.email}
                           onChange={(e) => props.setEmail(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                           <div style={{ color: "red" }}>
                              {props.emailError}
                           </div>
                        </Form.Text>
                     </Form.Group>
                     <Button variant="warning" size="sm" type="submit">
                        send otp
                     </Button>
                  </Form>

                  <div>
                     <br></br>
                     <Button
                        variant="info"
                        size="sm"
                        onClick={() => {
                           props.setShow(!props.show);
                        }}
                     >
                        back
                     </Button>
                  </div>
               </Modal.Body>
            </Modal>
         </div>
      </div>
   );
}
export default FGPModal;
