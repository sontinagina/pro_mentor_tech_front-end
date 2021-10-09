import React from "react";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import {
   Form,
   Nav,
   Navbar,
   NavDropdown,
   FormControl,
   Carousel,
   ProgressBar
} from "react-bootstrap";
import Profile from "./Profile";
class Dashboard extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         show: false,
         show2: false,
         userInfo: undefined,
         userEmailId: undefined,
         showProfile: true,
         progress: 10,
         show3:false,
      };
      console.log("dashboard constructor");
   }

   showDropdown = () => {
      this.setState({
         show: !this.state.show,
      });
   };
   showDropdown2 = () => {
      this.setState({
         show2: !this.state.show2,
      });
   };
   showProfileModal = () => {
      this.setState({
         showProfile: !this.state.showProfile,
      });
   };

   // componentDidUpdate() {
   //    console.log(this.state.userInfo);
   //    <Profile show={this.state.show3} setShow={(val)=>{
   //       this.setState({
   //          show3:val
   //       })
   //    }}/>     
   // }
   // componentDidMount(){
   //    <Profile show={this.state.show3} setShow={(val)=>{
   //       this.setState({
   //          show3:val
   //       })
   //    }}/>    
   // }
   // showProfileModal1(){
   //    // <Profile show={this.state.show3} setShow={(val)=>{
   //    //    this.setState({
   //    //       show3:val
   //    //    })
   //    // }}/>  
   //    this.setState({
   //       show3:true
   //    }) 
   // }
   componentDidMount() {
      fetch("http://localhost:8081/getUsername", {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         credentials: "include",
      })
         .then((r) => {
            return r.json();
         })
         .then((r) => {
            console.log("get username value: ", r.user.length);
            // console.log(r.user);
            this.setState({
               userInfo: [...r.user],
               userEmailId: [...r.user],
            });
         });
   }
   render() {
      return (
         <div className="dashboard">

            {/* <img src={skillsup} className="dashboard"></img> */}
            <div className="navbar">
               <Navbar bg="light" expand="lg">
                  <Navbar.Brand href="#home">ProMentorTechs</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="mr-auto">
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                        <NavDropdown
                           title="Find_Mentor"
                           onMouseEnter={this.showDropdown}
                           onMouseLeave={this.showDropdown}
                           show={this.state.show}
                           id="basic-nav-dropdown"
                           // this.show:{!show}
                        >
                           <NavDropdown.Item >
                              Python Mentor
                           </NavDropdown.Item>
                           <NavDropdown.Item >
                              React js Mentor
                           </NavDropdown.Item>
                           <NavDropdown.Item >
                              Java Mentor
                           </NavDropdown.Item>
                           <NavDropdown.Item >
                              JavaScript Mentor
                           </NavDropdown.Item>
                           {/* <NavDropdown.Divider /> */}
                           <NavDropdown.Item>
                              Full Stack Mentor
                           </NavDropdown.Item>
                           <NavDropdown.Item >
                              NodeJS Mentor
                           </NavDropdown.Item>
                           <NavDropdown.Item >
                              Machine Learning Mentor
                           </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                           title="For_Business"
                           onMouseEnter={this.showDropdown2}
                           onMouseLeave={this.showDropdown2}
                           show={this.state.show2}
                           id="basic-nav-dropdown"
                        >
                           <NavDropdown.Item >
                              Mentorship For Teams
                           </NavDropdown.Item>
                           <NavDropdown.Item >
                              Mentors For Startups
                           </NavDropdown.Item>
                           <NavDropdown.Item >
                              For School and Bootcamps
                           </NavDropdown.Item>
                           {/* <NavDropdown.Divider /> */}
                           <NavDropdown.Item >
                              Expert Coaches
                           </NavDropdown.Item>
                        </NavDropdown>
                     </Nav>
                     <Form className="searchForm">
                        <FormControl
                           type="text"
                           placeholder="Search"
                           className="mr-sm-2"
                        />{" "}
                        <Button
                           variant="outline-success"
                           style={{ marginLeft: "5px" }}
                        >
                           Search
                        </Button>
                        {"  "}
                        <div className="profile" style={{ marginLeft: "90px" }}>
                           <div className="profiledropdown">
                              <NavDropdown
                                 className="ml-auto paddingLeft5"
                                 id="dropdown-menu-align-right"
                              >
                                 <NavDropdown.Item >
                                    <Button
                                       size="small"
                                       circular
                                       color="blue"
                                       icon="user"
                                    ></Button>
                                    {this.state.userInfo != undefined
                                       ? this.state.userInfo[0].USERNAME
                                       : ""}
                                    <br />
                                    {this.state.userEmailId != undefined
                                       ? this.state.userEmailId[0].EMAILID
                                       : "not found"}
                                 </NavDropdown.Item>
                                 <NavDropdown.Divider />
                                 <NavDropdown.Item >
                                    <Button
                                       size="small"
                                       circular
                                       color="blue"
                                       icon="cogs"
                                    ></Button>{" "}
                                    Setting
                                 </NavDropdown.Item>
                                 <NavDropdown.Item >
                                    <Button
                                       size="small"
                                       circular
                                       color="blue"
                                       icon="help"
                                    ></Button>{" "}
                                    Help
                                 </NavDropdown.Item>
                                 <NavDropdown.Item >
                                    <Button
                                       size="small"
                                       circular
                                       color="blue"
                                       icon="chat"
                                    ></Button>{" "}
                                    Chat
                                 </NavDropdown.Item>
                                 <NavDropdown.Item >
                                    <Button
                                       size="small"
                                       circular
                                       color="blue"
                                       icon="handshake"
                                    ></Button>{" "}
                                    Appointment With Mentors
                                 </NavDropdown.Item>
                                 <NavDropdown.Divider />
                                 <NavDropdown.Item>
                                    <ProgressBar
                                       variant="success"
                                       now={this.state.progress}
                                       size="sm"
                                       label={`${this.state.progress}%`}
                                 
                                 />
                                 </NavDropdown.Item>
                                    <br />
                                    {/* <div
                                       // size="small"
                                       // circular
                                       // color="instagram"
                                       // icon="user"
                                    >
                                        <Button
                     size="small"
                     circular
                     color="blue"
                     icon="user"
                   onClick={this.showProfileModal}

                  ></Button>
                  Profile
                                      
                                    </div>{" "} */}
                                    <NavDropdown.Item >
                                    
                                    <Button
                                       size="small"
                                       circular
                                       color="blue"
                                       icon="user"
                                          onClick={()=>{ 
                                           this.setState({
                                              show3:true,
                                           })    
                                        

                                    }}
                                    ></Button>{" "}
                                    Profile
                                 </NavDropdown.Item>
                                 <NavDropdown.Item >
                                    <Button
                                       size="small"
                                       circular
                                       color="blue"
                                       icon="info"
                                    ></Button>{" "}
                                    Plan
                                 </NavDropdown.Item>

                                    {/*  */}
                                  
                                
                                 <NavDropdown.Item>
                                    <Button
                                       color="brown"
                                       icon="sign-out"
                                       size="small"
                                       onClick={() => {
                                          this.props.logout();
                                       }}
                                    >
                                       {" "}
                                       Logout
                                    </Button>
                                 </NavDropdown.Item>
                              </NavDropdown>
                           </div>
                           <Button
                              circular
                              color="blue"
                              icon="user"
                              size="large"
                           >
                              {/* <img src="/static/media/profile_icon.5bc3688e.svg" /> */}
                           </Button>
                        </div>
                        {/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */}
                     </Form>
                  </Navbar.Collapse>
               </Navbar>
               <div className="dash2">
                  <div className="dash3">
                     <h2>
                        <b>Welcome to Pro-Mentor-Techs </b>
                     </h2>
                     <h4>
                        Providing Continual Guidance as Mentees Advance towards
                        their Goals
                        <br />
                        <i className="window minimize outline icon" size="big"></i>
                        <i className="thumbs up icon"></i>
                        <i className="window minimize outline icon"></i>
                     </h4>
                  </div>
               </div>
               <ul>
                  <li>home</li>
                  <li>reto</li>
                  <li>footer</li>
               </ul>
            </div>
            <div className="m1">
               <h1>Featured Mentors</h1>
               <div>
                  <Carousel className="dashcarousel">
                     <Carousel.Item>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libe</p>
                        <Carousel.Caption></Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                        <h3>Second slide label</h3>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit.
                        </p>

                        <Carousel.Caption></Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                        <h3>Third slide label</h3>
                        <p>
                           Praesent commodo cursus magna, vel scelerisque nisl
                           consectetur.
                        </p>

                        <Carousel.Caption></Carousel.Caption>
                     </Carousel.Item>
                  </Carousel>
               </div>
            </div>
            <div className="m2"></div>
            <div className="m3"></div>
            <div className="m4"></div>
            <div className="m5"></div>
            <div className="m6"></div>
            <div className="m7"></div>
            <div className="m8"></div>
            <div className="m9"></div>
            <div className="m10"></div>

            
            <Profile show={this.state.show3} setShow={(val)=>{
                                       this.setState({
                                          show3:val
                                       })
                                    }}/>                   
         </div>
      );
   }
};

export default Dashboard;
