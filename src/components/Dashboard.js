import React from "react";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import  Profile from "./Profile";
import {
   Form,
   Nav,
   Navbar,
   NavDropdown,
   FormControl,
   Carousel,
   ProgressBar
} from "react-bootstrap";

class Dashboard extends React.Component {
   constructor() {
      super();
      this.state = {
         show: false,
         show2: false,
         userInfo: undefined,
         userEmailId: undefined,
         showProfile: false,
         progress:10,
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
   
      componentDidUpdate  ()  {
         console.log(this.state.userInfo);
      };
      componentDidMount  ()  {
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
      };
      render(){
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
                              <NavDropdown.Item href="#">
                                 Python Mentor
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/react/3.2">
                                 React js Mentor
                              </NavDropdown.Item>
                              <NavDropdown.Item href="#java/3.3">
                                 Java Mentor
                              </NavDropdown.Item>
                              <NavDropdown.Item href="#javascript/3.3">
                                 JavaScript Mentor
                              </NavDropdown.Item>
                              {/* <NavDropdown.Divider /> */}
                              <NavDropdown.Item href="#fullstack/3.4">
                                 Full Stack Mentor
                              </NavDropdown.Item>
                              <NavDropdown.Item href="#nodejs/3.3">
                                 NodeJS Mentor
                              </NavDropdown.Item>
                              <NavDropdown.Item href="#java/3.3">
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
                              <NavDropdown.Item href="#teams/3.1">
                                 Mentorship For Teams
                              </NavDropdown.Item>
                              <NavDropdown.Item href="#startups/3.2">
                                 Mentors For Startups
                              </NavDropdown.Item>
                              <NavDropdown.Item href="#schols/3.3">
                                 For School and Bootcamps
                              </NavDropdown.Item>
                              {/* <NavDropdown.Divider /> */}
                              <NavDropdown.Item href="#choachs/3.4">
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
                           <div
                              className="profile"
                              style={{ marginLeft: "90px" }}
                           >
                              <div className="profiledropdown">
                                 <NavDropdown
                                    className="ml-auto paddingLeft5"
                                    id="dropdown-menu-align-right"
                                 >
                                    <NavDropdown.Item href="#teams/3.1">
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
                                    <NavDropdown.Item href="#startups/3.2">
                                       <Button
                                          size="small"
                                          circular
                                          color="blue"
                                          icon="cogs"
                                       ></Button>{" "}
                                       Setting
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#choachs/3.4">
                                       <Button
                                          size="small"
                                          circular
                                          color="blue"
                                          icon="help"
                                       ></Button>{" "}
                                       Help
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#schols/3.3">
                                       <Button
                                          size="small"
                                          circular
                                          color="blue"
                                          icon="chat"
                                       ></Button>{" "}
                                       Chat
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#schols/3.3">
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
                                      
                                    <ProgressBar variant="success" now={this.state.progress} size="sm"  label={`${this.state.progress}%`}  />
                                    <br/>
                                       <div 
                                          // size="small"
                                          // circular
                                          // color="instagram"
                                          // icon="user"
                                          onClick={this.showProfileModal}
                                       > 
                                          <Profile 
                                       Profile={this.showProfileModal}
                                       showProfile={this.showProfile}
                                        />
                                        </div>{" "}
                                        {/*  */}
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#choachs/3.4">
                                       <Button
                                          size="small"
                                          circular
                                          color="blue"
                                          icon="info"
                                       ></Button>{" "}
                                       Plans
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#choachs/3.4">
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
                           Providing Continual Guidance as Mentees Advance
                           towards their Goals
                           <br />
                           <i
                              class="window minimize outline icon"
                              size="big"
                           ></i>
                           <i class="thumbs up icon"></i>
                           <i class="window minimize outline icon"></i>
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
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur.
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

               {/* <Profile 
               Profile={this.showProfileModal}
               showProfile={this.showProfile}
                /> */}
            </div>
         );
      };
   };

export default Dashboard;
