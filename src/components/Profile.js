import React from "react";
// import {  } from "semantic-ui-react";

import { Modal, ProgressBar ,Button} from "react-bootstrap";
import {
   CustomInput,
   FormGroup,
   Row,
   Col,
   Input,
   Label,
   Form,
   Card,
   CardImg,
   CardText,
   CardBody,
   CardTitle,
   CardSubtitle,
} from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import {
   changeBackdrop,
   keyboard,
   changeKeyboard,
   toggle,
   buttonLabel,
   modal,
   ModalBody,
   ModalFooter,
} from "reactstrap";
class Profile extends React.Component {
   constructor(props) {
      super(props);
      console.log("my constructor is callling................");
      this.state = {
         fullscreen: true,
         // show: false,
         editProfileFields: "page1",
         profileName: "",
         profileModalEmail: "",
      };
   }
   Validation = (e) => {
      e.preventDefault();
      let tmpError = {};
      if (this.state.editProfileFields === "page1") {
         let nameError = {};
         if (
            this.state.profileName === "" ||
            this.state.profileName === null ||
            this.state.profileName === undefined
         ) {
            nameError["emailError"] = "Invalid Name";
         } else {
            nameError["emailError"] = "";
         }
      }
   };
   handleShow = () => {
      // this.props.showProfile();
   };
   handleClose = () => {
      // this.props.showProfile();
   };
   EditProfile = () => {
      this.setState({
         editProfileFields: "page2",
      });
   };
   render() {
      return (
         <div className="profileModal">
            <div>
               <div>
                  {/* <Button
                     size="small"
                     circular
                     color="blue"
                     icon="user"
                     onClick={this.props.showProfile}
                  ></Button>
                  Profile */}
                  <div className="modal">
                     <Modal
                        // show={this.props.showModalProfile}
                        show={this.props.show}
                        onHide={() => {
                           this.props.setShow(false);
                        }}
                        animation={false}
                     >
                        <Modal.Header closeButton>
                           <Modal.Title>Complete Your Profile</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                           <Form onSubmit={this.Validation}>
                              {this.state.editProfileFields === "page1" ? (
                                 <>
                                    <div className="imgcar">
                                       <Card>
                                          <CardImg
                                             top
                                             width="50%"
                                             src="https://unsplash.com/photos/LR5eS1C9IUU"
                                             alt="upload image"
                                          />
                                          <CardBody></CardBody>
                                       </Card>
                                    </div>
                                    <FormGroup>
                                       <Label for="examplePassword">
                                          Your FullName
                                       </Label>
                                       <Input
                                          type="text"
                                          name="Fullname"
                                          id="examplePassword"
                                          placeholder="Ane sinha placeholder"
                                       />
                                      
                                    </FormGroup>
                                    <br />

                                    <FormGroup>
                                       <Label for="exampleCheckbox">
                                          Gender
                                       </Label>
                                       <div>
                                          <CustomInput
                                             type="radio"
                                             id="exampleCustomRadio"
                                             name="customRadio"
                                             label="Male"
                                          />
                                          <CustomInput
                                             type="radio"
                                             id="exampleCustomRadio2"
                                             name="customRadio"
                                             label="Female"
                                          />
                                          <CustomInput
                                             type="radio"
                                             id="exampleCustomRadio"
                                             name="customRadio"
                                             label="Other"
                                          />
                                       </div>
                                    </FormGroup>
                                    <br />
                                    <FormGroup>
                                       <Label for="exampleDate">Date</Label>
                                       <Input
                                          type="date"
                                          name="date"
                                          id="exampleDate"
                                          placeholder="date placeholder"
                                       />
                                    </FormGroup>
                                    <FormGroup>
                                       <div className="profileFooter">
                                          <Modal.Footer>
                                             {" "}
                                             <Button
                                                onClick={() => {
                                                   this.props.setShow(false);
                                                }}
                                                color="black"
                                             >
                                                Close
                                             </Button>
                                             <div className="nextbtn">
                                                <Button
                                                   color="blue"
                                                   onClick={() =>
                                                      this.setState({
                                                         editProfileFields:
                                                            "page2",
                                                      })
                                                   }
                                                >
                                                   Next
                                                </Button>{" "}
                                             </div>
                                          </Modal.Footer>
                                       </div>{" "}
                                    </FormGroup>
                                 </>
                              ) : null}

                              {this.state.editProfileFields === "page2" ? (
                                 <>
                                    <ProgressBar
                                       className="progresstrack"
                                       variant="success"
                                       now={this.state.progress}
                                       size="sm"
                                       label={`${40}%`}
                                    />
                                    <FormGroup>
                                       <Label for="exampleEmail">Email</Label>
                                       <Input
                                          type="email"
                                          name="email"
                                          id="exampleEmail"
                                          placeholder="with a placeholder"
                                       />
                                    </FormGroup>

                                    <FormGroup>
                                       <Label for="exampleUrl">Linkedin</Label>
                                       <Input
                                          type="url"
                                          name="url"
                                          id="exampleUrl"
                                          placeholder="http://linkedin.com"
                                       />
                                    </FormGroup>
                                    <FormGroup>
                                       <Label for="exampleUrl">Github</Label>
                                       <Input
                                          type="url"
                                          name="url"
                                          id="exampleUrl"
                                          placeholder="http://github.com"
                                       />
                                    </FormGroup>

                                    <FormGroup>
                                       <Label>Mobile Number</Label>
                                       <Input
                                          type="number"
                                          name="number"
                                          id="exampleNumber"
                                          placeholder="12345678910"
                                       />
                                    </FormGroup>
                                    <div className="profileFooter">
                                       <Modal.Footer>
                                          {" "}
                                          <Button
                                             onClick={() =>
                                                this.setState({
                                                   editProfileFields: "page1",
                                                })
                                             }
                                             color="black"
                                          >
                                             Back
                                          </Button>
                                          <div className="nextbtn">
                                             <Button
                                                color="blue"
                                                onClick={() =>
                                                   this.setState({
                                                      editProfileFields:
                                                         "page3",
                                                   })
                                                }
                                             >
                                                Next
                                             </Button>{" "}
                                          </div>
                                       </Modal.Footer>
                                    </div>
                                 </>
                              ) : null}
                              {this.state.editProfileFields === "page3" ? (
                                 <>
                                    <ProgressBar
                                       className="progresstrack"
                                       variant="success"
                                       now={this.state.progress}
                                       size="sm"
                                       label={`${80}%`}
                                    />
                                    <FormGroup>
                                       <Label for="exampleAddress">
                                          Address
                                       </Label>
                                       <Input
                                          type="text"
                                          name="address"
                                          id="exampleAddress"
                                          placeholder="1234 Main St"
                                       />
                                    </FormGroup>
                                    <FormGroup>
                                       <Label for="exampleCity">City</Label>
                                       <Input
                                          type="text"
                                          name="city"
                                          id="exampleCity"
                                       />
                                    </FormGroup>
                                    <FormGroup>
                                       <Label for="exampleSelect">State</Label>
                                       <Input
                                          type="select"
                                          name="select"
                                          id="exampleSelect"
                                       >
                                          <option>Select</option>
                                          <option>Delhi</option>
                                          <option>Goa</option>
                                          <option>Punjab</option>
                                          <option>Hariyana</option>
                                       </Input>
                                    </FormGroup>
                                    <FormGroup>
                                       <Label for="exampleNumber">
                                          Experience
                                       </Label>
                                       <Input
                                          type="number"
                                          name="number"
                                          id="exampleNumber"
                                          // value="number placeholder"
                                       />
                                    </FormGroup>
                                    <div className="profileFooter">
                                       <Modal.Footer>
                                          {" "}
                                          <Button
                                             onClick={() =>
                                                this.setState({
                                                   editProfileFields: "page2",
                                                })
                                             }
                                             color="black"
                                          >
                                             Back
                                          </Button>
                                          <div className="nextbtn">
                                             <Button
                                                color="blue"
                                                onClick={() =>
                                                   this.setState({
                                                      editProfileFields:
                                                         "page4",
                                                   })
                                                }
                                             >
                                                Next
                                             </Button>{" "}
                                          </div>
                                       </Modal.Footer>
                                    </div>
                                 </>
                              ) : null}
                              {this.state.editProfileFields === "page4" ? (
                                 <>
                                    <ProgressBar
                                       className="progresstrack"
                                       variant="success"
                                       now={this.state.progress}
                                       size="sm"
                                       label={`${100}%`}
                                    />
                                    {/* </FormGroup row> */}
                                    <FormGroup>
                                       <Label for="exampleEmail">
                                          About Your Designation
                                       </Label>
                                    </FormGroup>
                                    <FormGroup>
                                       <Label for="exampleSelect">
                                          Job Type
                                       </Label>
                                       <Input
                                          type="select"
                                          name="select"
                                          id="exampleSelect"
                                       >
                                          <option>Select</option>
                                          <option>Full time </option>
                                          <option>part time</option>
                                          <option>Self employee</option>
                                          <option>Job provider</option>
                                       </Input>
                                    </FormGroup>
                                    <FormGroup>
                                       <Label for="exampleText">
                                          Text Area
                                       </Label>
                                       <Input
                                          type="textarea"
                                          name="text"
                                          id="exampleText"
                                       />
                                    </FormGroup>
                                    <div className="profileFooter">
                                       <Modal.Footer>
                                          {" "}
                                          <Button
                                             onClick={() =>
                                                this.setState({
                                                   editProfileFields: "page3",
                                                })
                                             }
                                             color="black"
                                          >
                                             Back
                                          </Button>
                                          <div className="nextbtn">
                                             <Button
                                                color="green"
                                                onClick={() =>
                                                   this.setState({
                                                      editProfileFields:
                                                         "page4",
                                                   })
                                                }
                                             >
                                                Save
                                             </Button>{" "}
                                          </div>
                                       </Modal.Footer>
                                    </div>
                                 </>
                              ) : null}
                           </Form>
                        </Modal.Body>
                        {/* <div className="profileFooter">
                           <Modal.Footer>
                              {" "}
                              <Button onClick={this.handleClose} color="black">
                                 Close
                              </Button>
                              <div className="nextbtn">
                                 <Button
                                    color="blue"
                                    onClick={this.handleClose}
                                 >
                                    Next
                                 </Button>{" "}
                              </div>
                           </Modal.Footer>
                        </div> */}
                     </Modal>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Profile;
