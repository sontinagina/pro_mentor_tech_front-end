import React from "react";
// import {  } from "semantic-ui-react";

import { Modal, ProgressBar, Button } from "react-bootstrap";
import {
   CustomInput,
   FormGroup,
   FormText,
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
         userName: "",
         userEmail: "",
         genderError: " ",
         imgPrevSrc: "#",
         progressPercent: "0%",
      };
   }
   componentDidMount() {
      // if (this.state.editProfileFields == "page1") {
      //    this.setState({
      //       progressPercent: "0%",
      //    });
      // }
      // if (this.state.editProfileFields == "page2") {
      //    this.setState({
      //       progressPercent: "25%",
      //    });
      // }
      // if (this.state.editProfileFields == "page3") {
      //    this.setState({
      //       progressPercent: "50%",
      //    });
      // }
      // if (this.state.editProfileFields == "page4") {
      //    this.setState({
      //       progressPercent: "75%",
      //    });
      // }
   }
   Validation = (e) => {
      e.preventDefault();
      let tempError = {};
      let newErrorColor = {};
      if (this.state.editProfileFields === "page1") {
         var nameRegex = /^[a-zA-Z ]{2,30}$/;
         if (nameRegex.test(this.userName) === false) {
            tempError["nameError"] = "invalid Name ";
            newErrorColor["nameColor"] = "red";
         }

         if (
            this.userName === "" ||
            this.userName === null ||
            this.userName.length === 0
         ) {
            var nameErr = tempError["nameError"];
            tempError["nameError"] =
               nameErr.length > 0
                  ? tempError["nameError"] + ", Name can't be null"
                  : "Name can't be null";
            newErrorColor["nameColor"] = "red";
         }
         //changes......

         let name = e.target.name;
         let errors = this.state.errors;
         if (!e.target.checked) {
            errors[name] = true;
            this.setState({ errors: errors });
         }
      }

      // if (this.userEmail === "" ||this. userEmail === null ||this. userEmail.length === 0) {
      //    tempError["emailError"] = "invalid email";
      //    newErrorColor["emailColor"] = "red";
      // }
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
      let genderError;

      return (
         <div className="profileModal">
            <div>
               <div>
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
                                    <div className="imgProfile">
                                       {/* <Card>
                                          <CardImg
                                             top
                                             width="50%"
                                             src="https://unsplash.com/photos/LR5eS1C9IUU"
                                             alt="upload image"
                                          />
                                          <CardBody></CardBody>
                                       </Card> */}

                                       <input
                                          id="imgFile"
                                          type="file"
                                          accept=".png, .jpg, .jpeg"
                                          onChange={(e) => {
                                             console.log(e);
                                             let file = e.target.files[0];
                                             this.setState({
                                                imgPrevSrc:
                                                   URL.createObjectURL(file),
                                             });
                                          }}
                                       />
                                       <img
                                          id="imgPrev"
                                          src={this.state.imgPrevSrc}
                                          alt="your image"
                                          width="150px"
                                          height="80px"
                                          class="img-fluid"
                                       />
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
                                    {/* onChange={ function() {
                                                this.setState({checked: !this.state.checked})
                                              }} */}
                                    <FormGroup>
                                       <Label for="exampleCheckbox">
                                          Gender
                                       </Label>
                                       <div>
                                          <CustomInput
                                             required
                                             type="radio"
                                             id="exampleCustomRadio"
                                             name="customRadio"
                                             label="Male"
                                             //changes................
                                             //                                        let genderError;
                                             //   if(this.props.errors.gender) {
                                             //       genderError = <span className="has-error">Gender is required</span>
                                             //   } else {
                                             //       genderError = null;
                                             //   }
                                             // onChange={ function() {
                                             //    this.setState({checked: !this.state.checked})
                                             //  }}
                                             ///chnaged.....
                                          />
                                          <CustomInput
                                             type="radio"
                                             id="exampleCustomRadio2"
                                             name="customRadio"
                                             label="Female"
                                             // onChange={ function() {
                                             //    this.setState({checked: !this.state.checked})
                                             //  }}
                                          />
                                          <CustomInput
                                             type="radio"
                                             id="exampleCustomRadio"
                                             name="customRadio"
                                             label="Other"
                                          />
                                       </div>

                                       <FormText>
                                          <span className="has-error">
                                             Gender is required
                                          </span>
                                       </FormText>
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
                                                   onClick={() => {
                                                      this.setState({
                                                         progressPercent: 40,
                                                      });

                                                      this.setState({
                                                         editProfileFields:
                                                            "page2",
                                                      });
                                                   }}
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
                                       size="sm"
                                       now={this.state.progressPercent}
                                       label={`${this.state.progressPercent}%`}
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
                                             onClick={() => {
                                                this.setState({
                                                   progressPercent: 40,
                                                });
                                                this.setState({
                                                   editProfileFields: "page1",
                                                });
                                             }}
                                             color="black"
                                          >
                                             Back
                                          </Button>
                                          <div className="nextbtn">
                                             <Button
                                                color="blue"
                                                onClick={() => {
                                                   this.setState({
                                                      progressPercent: 80,
                                                   });
                                                   this.setState({
                                                      editProfileFields:
                                                         "page3",
                                                   });
                                                }}
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
                                       now={this.state.progressPercent}
                                       size="sm"
                                       label={`${this.state.progressPercent}%`}
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
                                       <Label for="exampleCity">City</Label>
                                       <Input
                                          type="text"
                                          name="city"
                                          id="exampleCity"
                                       />
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
                                             onClick={() => {
                                                this.setState({
                                                   progressPercent: 40,
                                                });
                                                this.setState({
                                                   editProfileFields: "page2",
                                                });
                                             }}
                                             color="black"
                                          >
                                             Back
                                          </Button>
                                          <div className="nextbtn">
                                             <Button
                                                color="blue"
                                                onClick={() => {
                                                   this.setState({
                                                      progressPercent: 100,
                                                   });
                                                   this.setState({
                                                      editProfileFields:
                                                         "page4",
                                                   });
                                                }}
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
                                       now={this.state.progressPercent}
                                       size="sm"
                                       label={`${this.state.progressPercent}%`}
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
                                             onClick={() => {
                                                this.setState({
                                                   progressPercent: 80,
                                                });
                                                this.setState({
                                                   editProfileFields: "page3",
                                                });
                                             }}
                                             color="black"
                                          >
                                             Back
                                          </Button>
                                          <div className="nextbtn">
                                             <Button
                                                type="submit"
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
                     </Modal>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Profile;
