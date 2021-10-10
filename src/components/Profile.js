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
         pimg:"",
         pfullName:"",
         pgender:"",
         pemail:"",
         plinkedin:"",
         pgithub:"",
         paddress:"",
         pstate:"",
         pcity:"",
         pjobType:"",
         pexperience:"",
         pcurrentDeg:"",
         pbio:"",
         pdob:"",
         pmobileno:"",
         fieldError:{},

      };

   }
   isNullOrUndefined(val){
      return val==null||val==undefined ||val==""?false:true;
      
   }
   Validation = () => {
      if(this.state.editProfileFields=="page1"){
        let isERR=false;
         let myerror={};
         console.log(this.state.pimg);
         console.log(!this.isNullOrUndefined(this.state.pimg));
         if(!this.isNullOrUndefined(this.state.pimg)){
            myerror["pimg"]="Select profile image";
            isERR=true;
         }
         if(!this.isNullOrUndefined(this.state.pfullName)){
            
            myerror["pfullName"]="Enter your full name";
            isERR=true;

         }
         if(!this.isNullOrUndefined(this.state.pgender)){
            
            myerror["pgender"]="Select gender";
            isERR=true;

         }
         if(!this.isNullOrUndefined(this.state.pdob)){
           
            myerror["pdob"]="Enter your DOB";
            isERR=true;


         }
         console.log(myerror);
         this.setState({
            fieldError:myerror
         })
         if(isERR){
            console.log("aayayay");
            return false;
         }else
         return true;
      }
      if(this.state.editProfileFields=="page2"){
         let isValidData=false;
         isValidData=((this.isNullOrUndefined(this.state.pimg))&&(this.isNullOrUndefined(this.state.pfullName))&&(this.isNullOrUndefined(this.state.pgender))&&(this.isNullOrUndefined(this.state.pdob)))?true:false;
      }
      if(this.state.editProfileFields=="page3"){
         
      }
      if(this.state.editProfileFields=="page4"){
         
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

                                       <Input
                                          id="imgFile"
                                          type="file"
                                          accept=".png, .jpg, .jpeg"
                                          onChange={(e) => {
                                             console.log(e);
                                             let file = e.target.files[0];
                                             this.setState({
                                                pimg:file
                                             })
                                             if(file){
                                             this.setState({
                                                imgPrevSrc:
                                                   URL.createObjectURL(file),
                                             });
                                          }
                                          }}
                                       />
                                       <img
                                          id="imgPrev"
                                          src={this.state.imgPrevSrc}
                                          alt="Upload your profile"
                                          width="150px"
                                          height="80px"
                                          className="img-fluid"
                                       />
                                    </div>
                                    {
                                          (this.isNullOrUndefined(this.state.fieldError["pimg"]))?(<FormText>
                                             <span className="has-error">
                                               { this.state.fieldError["pimg"]}
                                             </span>
                                          </FormText>):null
                                       }
                                    <FormGroup>
                                       <Label for="examplePassword">
                                          Your FullName
                                       </Label>
                                       <Input
                                          type="text"
                                          name="Fullname"
                                          id="examplePassword"
                                          placeholder="Enter your name"
                                          onChange={(e)=>{
                                             this.setState({
                                                pfullName:e.target.value
                                             })
                                          }}
                                       />
                                        {
                                          (this.isNullOrUndefined(this.state.fieldError["pfullName"]))?(<FormText>
                                             <span className="has-error">
                                               { this.state.fieldError["pfullName"]}
                                             </span>
                                          </FormText>):null
                                       }
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
                                          
                                             type="radio"
                                             id="exampleCustomRadio"
                                             name="gender"
                                             label="Male"
                                             value="male"
                                             onChange={(e)=>{
                                                this.setState({
                                                   pgender:e.target.value
                                                })
                                             }}
                                          />
                                          <CustomInput
                                             type="radio"
                                             id="exampleCustomRadio2"
                                             name="gender"
                                             label="Female"
                                            value="female"
                                            onChange={(e)=>{
                                             this.setState({
                                             pgender:e.target.value
                                             })
                                          }}
                                          />
                                          <CustomInput
                                             type="radio"
                                             id="exampleCustomRadio3"
                                             name="gender"
                                             label="Other"
                                             value="other"
                                             onChange={(e)=>{
                                             this.setState({
                                                pgender:e.target.value
                                             })
                                             }}
                                          />
                                       {
                                          (this.isNullOrUndefined(this.state.fieldError["pgender"]))?(<FormText>
                                             <span className="has-error">
                                               { this.state.fieldError["pgender"]}
                                             </span>
                                          </FormText>):null
                                       }
                                       </div>
                                      
                                       
                                    </FormGroup>
                                    <br />
                                    <FormGroup>
                                       <Label for="exampleDate">Date Of Birth</Label>
                                       <Input
                                          type="date"
                                          name="date"
                                          id="exampleDate"
                                          placeholder="date placeholder"
                                          onChange={(e)=>{
                                             this.setState({
                                                pdob:e.target.value
                                             })
                                          }}
                                       />
                                        {
                                          (this.isNullOrUndefined(this.state.fieldError["pdob"]))?(<FormText>
                                             <span className="has-error">
                                               { this.state.fieldError["pdob"]}
                                             </span>
                                          </FormText>):null
                                       }
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
                                                      let isValid=false;
                                                      isValid=this.Validation(this);
                                                      console.log(isValid)
                                                      if(isValid){
                                                         console.log(isValid)
                                                      this.setState({
                                                         progressPercent: 40,
                                                      });

                                                      this.setState({
                                                         editProfileFields:
                                                            "page2",
                                                      });
                                                   }
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
                                          onChange={(e)=>{
                                             this.setState({
                                                pemail:e.target.value
                                             })
                                          }}
                                       />
                                    </FormGroup>

                                    <FormGroup>
                                       <Label for="exampleUrl">Linkedin</Label>
                                       <Input
                                          type="url"
                                          name="url"
                                          id="exampleUrl"
                                          placeholder="http://linkedin.com"
                                          onChange={(e)=>{
                                             this.setState({
                                                plinkedin:e.target.value
                                             })
                                          }}
                                       />
                                    </FormGroup>
                                    <FormGroup>
                                       <Label for="exampleUrl">Github</Label>
                                       <Input
                                          type="url"
                                          name="url"
                                          id="exampleUrl"
                                          placeholder="http://github.com"
                                          onChange={(e)=>{
                                             this.setState({
                                                pgithub:e.target.value
                                             })
                                          }}
                                       />
                                    </FormGroup>

                                    <FormGroup>
                                       <Label>Mobile Number</Label>
                                       <Input
                                          type="number"
                                          name="number"
                                          id="exampleNumber"
                                          placeholder="e.g. 9837378788"
                                          onChange={(e)=>{
                                             this.setState({
                                                pmobileno:e.target.value
                                             })
                                          }}
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
                                          onChange={(e)=>{
                                             this.setState({
                                                paddress:e.target.value
                                             })
                                          }}
                                       />
                                    </FormGroup>
                                    <FormGroup>
                                       <Label for="exampleSelect">State</Label>
                                       <Input
                                          type="select"
                                          name="select"
                                          id="exampleSelect"
                                          onChange={(e)=>{
                                             this.setState({
                                                pstate:e.target.value
                                             })
                                          }}
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
                                          onChange={(e)=>{
                                             this.setState({
                                                pcity:e.target.value
                                             })
                                          }}
                                       >
                                           <option>Select</option>
                                          <option>Sonkatch</option>
                                          <option>Dewas</option>
                                          <option>bawai</option>
                                          <option>Kheriya</option>
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
                                          onChange={(e)=>{
                                             this.setState({
                                                pexperience:e.target.value
                                             })
                                          }}
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
                                       <Input
                                          type="text"
                                          name="yourDeg"
                                          id="pyourDeg"
                                          onChange={(e)=>{
                                             this.setState({
                                                pcurrentDeg:e.target.value
                                             })
                                          }}
                                       />
                                    </FormGroup>
                                    <FormGroup>
                                       <Label for="exampleSelect">
                                          Job Type
                                       </Label>
                                       <Input
                                          type="select"
                                          name="select"
                                          id="exampleSelect"
                                          onChange={(e)=>{
                                             this.setState({
                                                pjobType:e.target.value
                                             })
                                          }}
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
                                          onChange={(e)=>{
                                             this.setState({
                                                pbio:e.target.value
                                             })
                                          }}
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
