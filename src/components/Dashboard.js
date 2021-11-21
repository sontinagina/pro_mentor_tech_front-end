import React from "react";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";
import weblogo from "../images/newone.jpg";
import footer1 from "../images/1final.jpg";

import {
   Form,
   Nav,
   Navbar,
   NavDropdown,
   FormControl,
   Carousel,
   ProgressBar,
   Card,
   Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiTwotoneFileText } from "react-icons/ai";
import StarRatings from "react-star-ratings";

import Profile from "./Profile";
import viewProfile from "./viewProfile";
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
         show3: false,

         rating: 0,
         name: "Addi ",
         experience: "2 year",
         fee: "$120/month",
         field: "Software Engineer",
         companay: "Amazon",
         s1: "Web developer",
         s2: "Front-end",
         s3: "Javascript",
         s4: "Html",
         s5: "React.js",
         s6: "Css",
         s7: "Front end",
         s8: "Back-end",
         viewProfile_Var: "notview",
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
            this.setState({
               userInfo: [...r.user],
               userEmailId: [...r.user],
            });
         });
   }
   render() {
      return (
         <div className="dashboard">
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
                           <NavDropdown.Item>Python Mentor</NavDropdown.Item>
                           <NavDropdown.Item>React js Mentor</NavDropdown.Item>
                           <NavDropdown.Item>Java Mentor</NavDropdown.Item>
                           <NavDropdown.Item>
                              JavaScript Mentor
                           </NavDropdown.Item>
                           {/* <NavDropdown.Divider /> */}
                           <NavDropdown.Item>
                              Full Stack Mentor
                           </NavDropdown.Item>
                           <NavDropdown.Item>NodeJS Mentor</NavDropdown.Item>
                           <NavDropdown.Item>
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
                           <NavDropdown.Item>
                              Mentorship For Teams
                           </NavDropdown.Item>
                           <NavDropdown.Item>
                              Mentors For Startups
                           </NavDropdown.Item>
                           <NavDropdown.Item>
                              For School and Bootcamps
                           </NavDropdown.Item>

                           <NavDropdown.Item>Expert Coaches</NavDropdown.Item>
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
                                 onClick={() => {
                                    this.setState({
                                       viewProfile_Var: "view",
                                    });
                                 }}
                              >
                                 <NavDropdown.Item>
                                    <Button
                                       size="small"
                                       circular
                                       color="blue"
                                       icon="user"
                                       onClick={() => {
                                          this.setState({
                                             viewProfile_Var: "view",
                                          });
                                       }}
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
                                 <NavDropdown.Item>
                                    <Button
                                       size="small"
                                       circular
                                       color="blue"
                                       icon="cogs"
                                    ></Button>{" "}
                                    Setting
                                 </NavDropdown.Item>
                                 <NavDropdown.Item>
                                    <Button
                                       size="small"
                                       circular
                                       color="blue"
                                       icon="help"
                                    ></Button>{" "}
                                    Help
                                 </NavDropdown.Item>
                                 <NavDropdown.Item>
                                    <Button
                                       size="small"
                                       circular
                                       color="blue"
                                       icon="chat"
                                    ></Button>{" "}
                                    Chat
                                 </NavDropdown.Item>
                                 <NavDropdown.Item>
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

                                 <NavDropdown.Item
                                    onClick={() => {
                                       this.setState({
                                          show3: true,
                                       });
                                    }}
                                 >
                                    <Button
                                       size="small"
                                       circular
                                       color="blue"
                                       icon="user"
                                       // onClick={() => {
                                       //    this.setState({
                                       //       show3: true,
                                       //    });
                                       // }}
                                    ></Button>{" "}
                                    Profile
                                 </NavDropdown.Item>
                                 <NavDropdown.Item>
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
                           ></Button>
                        </div>
                        {/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */}
                     </Form>
                  </Navbar.Collapse>
               </Navbar>

               {/* dashboard  */}
               <div className="dash2">
                  <div className="dash3">
                     <h2>
                        <b>Welcome to Pro-Mentor-Techs </b>
                     </h2>
                     <h4>
                        Providing Continual Guidance as Mentees Advance towards
                        their Goals
                        <br />
                        <i
                           className="window minimize outline icon"
                           size="big"
                        ></i>
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
            <div className="m2">
               <div className="Card">
                  <Card style={{ width: "20rem" }}>
                     <Card.Img
                        className="cardImg"
                        variant="top"
                        src="https://codingblocks.com/assets/images/cb/logosc/color_java.svg"
                     />
                     <Card.Body>
                        <Card.Title>
                           <h2 class="sub-heading">Crux</h2>
                        </Card.Title>
                        <Card.Text>
                           <p class="price">
                              <h2>₹17,000</h2>
                           </p>
                           <p class="lectures">(24-26 lectures)</p>
                           <a href="RegistrationForm.html">
                              <div class="button">
                                 <Button variant="warning">RAGISTER NOW</Button>
                              </div>
                           </a>
                        </Card.Text>
                        <p class="course-details">
                           Programming Fundamentals, OOPS <br />
                           Data Structures &amp; Algorithms in Java <br />
                           Online Code Submission <br />
                           300+ Problems, Hackathons
                        </p>
                     </Card.Body>
                  </Card>
               </div>
               <div className="Card">
                  <Card style={{ width: "20rem" }}>
                     <Card.Img
                        className="cardImg"
                        variant="top"
                        src="https://codingblocks.com/assets/images/cb/logosc/color_cpp.svg"
                     />
                     <Card.Body>
                        <Card.Title>
                           <h2>Launchpad</h2>
                        </Card.Title>
                        <Card.Text>
                           <p class="price">
                              <h2>₹17,000</h2>
                           </p>
                           <p class="lectures">(24-26 lectures)</p>
                           <a href="RegistrationForm.html">
                              <div class="button">
                                 <Button variant="warning">RAGISTER NOW</Button>
                              </div>
                           </a>
                        </Card.Text>
                        <p class="course-details">
                           Programming Fundamentals, OOPS <br />
                           Data Structures &amp; Algorithms in C++ <br />
                           300+ Problems, Hackathons <br />
                           Online Code Submission
                        </p>
                     </Card.Body>
                  </Card>
               </div>
               <div className="Card">
                  <Card style={{ width: "20rem" }}>
                     <Card.Img
                        className="cardImg"
                        variant="top"
                        src="https://pngimg.com/uploads/android_logo/android_logo_PNG26.png"
                     />
                     <Card.Body>
                        <Card.Title>
                           <h2>Pandora</h2>
                        </Card.Title>
                        <Card.Text>
                           <p class="price">
                              <h2>₹20,000</h2>
                           </p>
                           <p class="lectures">(24-26 lectures)</p>

                           <Button variant="primary">RAGISTER NOW</Button>
                        </Card.Text>
                        <p class="course-details">
                           Building Android Apps <br />
                           UI and Animations <br />
                           Database &amp; Internet Connected Apps <br />
                           LIVE Project &amp; Pitching Session
                        </p>
                     </Card.Body>
                  </Card>
               </div>
            </div>
            <div className="m3">
               <div className="Card">
                  <Card style={{ width: "20rem" }}>
                     <Card.Img
                        className="cardImg"
                        variant="top"
                        src="	https://codingblocks.com/assets/images/cb/logosc/color_nodejs.svg"
                     />
                     <Card.Body>
                        <Card.Title>
                           <h2 class="sub-heading">Elixir</h2>
                        </Card.Title>
                        <Card.Text>
                           <p class="price">
                              <h2>₹20,000</h2>
                           </p>
                           <p class="lectures">(22 lectures)</p>
                           <a href="RegistrationForm.html">
                              <div class="button">
                                 <Button variant="warning">RAGISTER NOW</Button>
                              </div>
                           </a>
                        </Card.Text>
                        <p class="course-details">
                           Web Design <br />
                           Real time Web Apps <br />
                           Deployment &amp; System Adminstration <br />
                           LIVE Project &amp; Hackathon
                        </p>
                     </Card.Body>
                  </Card>
               </div>
               <div className="Card">
                  <Card style={{ width: "20rem" }}>
                     <Card.Img
                        className="cardImg"
                        variant="top"
                        src="https://codingblocks.com/assets/images/cb/logosc/color_algo.svg"
                     />
                     <Card.Body>
                        <Card.Title>
                           <h2>Algo++</h2>
                        </Card.Title>
                        <Card.Text>
                           <p class="price">
                              <h2>₹12,000</h2>
                           </p>
                           <p class="lectures">(15 lectures)</p>
                           <a href="RegistrationForm.html">
                              <div class="button">
                                 <Button variant="warning">RAGISTER NOW</Button>
                              </div>
                           </a>
                        </Card.Text>
                        <p class="course-details">
                           Adv Data Structures &amp; Algo in C++ <br />
                           Complex Problem Solving <br />
                           Algorithmic Analysis <br />
                           Interview Preparation
                        </p>
                     </Card.Body>
                  </Card>
               </div>
               <div className="Card">
                  <Card style={{ width: "20rem" }}>
                     <Card.Img
                        className="cardImg"
                        variant="top"
                        src="https://codingblocks.com/assets/images/cb/logosc/color_ml.svg"
                     />
                     <Card.Body>
                        <Card.Title>
                           <h2>Perceptron</h2>
                        </Card.Title>
                        <Card.Text>
                           <p class="price">
                              <h2>₹22,000</h2>
                           </p>
                           <p class="lectures">(23 lectures)</p>

                           <Button variant="primary">RAGISTER NOW</Button>
                        </Card.Text>
                        <p class="course-details">
                           Code Machine Learning Algorithms <br />
                           Artificial Intelligence <br />
                           Natural Language Processing <br />3 Live Projects
                           &amp; Hackathon
                        </p>
                     </Card.Body>
                  </Card>
               </div>
            </div>
            <div className="m4"></div>
            <div className="m5"></div>
            <div className="m6"></div>

            <Profile
               show={this.state.show3}
               setShow={(val) => {
                  this.setState({
                     show3: val,
                  });
               }}
            />

            {/* footer */}
            <div className="footer">
               <div className="footerhead">
                  {" "}
                  <h4>
                     Your trusted source to find highly-vetted mentors &
                     industry professionals to move your career ahead.
                  </h4>
               </div>
               <div className="image111">
                  <img
                     src={weblogo}
                     alt="/"
                     className="img-responsive2"
                     onClick={"/"}
                  />
               </div>
               <div className="footerd1">
                  <ul>
                     <Button variant="light">Home</Button>
                  </ul>
                  <Link to="/">home</Link>

                  <Link to="/">home</Link>

                  <Link to="/">home</Link>

                  <Link to="/">home</Link>

                  <Link to="/">home</Link>

                  <Link to="/">home</Link>
               </div>
               <div></div>
               <div></div>
               <div>
                  <img
                     src={footer1}
                     alt="/"
                     className="footerimg"
                     onClick={"/"}
                  />
               </div>
            </div>
         </div>
      );
   }
};

export default Dashboard;
