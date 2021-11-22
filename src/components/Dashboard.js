import React from "react";
import { Link } from "react-router-dom";
import weblogo from "../images/newone.jpg";
import footer1 from "../images/1final.jpg";
import New_LCD from "../images/New_LCD.png";
import blue_LCD from "../images/blue_LCD.jpg";
import img14 from "../images/my1.png";

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
   Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiTwotoneFileText } from "react-icons/ai";
import StarRatings from "react-star-ratings";
import { BsChatDotsFill } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";
import { IoMdThumbsUp } from "react-icons/io";

import { IoLogoFacebook } from "react-icons/io";
import { IoLogoFirefox } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
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
                                 variant="info"
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
                                       // icon="user"
                                       onClick={() => {
                                          this.setState({
                                             viewProfile_Var: "view",
                                          });
                                       }}
                                    >
                                       <BsFillPersonFill />
                                    </Button>
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
                                    >
                                       <MdOutlineSettings />
                                    </Button>{" "}
                                    Setting
                                 </NavDropdown.Item>
                                 <NavDropdown.Item>
                                    <Button
                                       size="small"
                                       circular
                                       color="blue"
                                       // icon="help"
                                    >
                                       <BsQuestionCircle />
                                    </Button>{" "}
                                    Help
                                 </NavDropdown.Item>
                                 <NavDropdown.Item>
                                    <Button
                                       size="small"
                                       circular
                                       color="blue"
                                       // icon="chat"
                                    >
                                       {" "}
                                       <BsChatDotsFill />
                                    </Button>{" "}
                                    Chat
                                 </NavDropdown.Item>
                                 <NavDropdown.Item>
                                    <Button size="small" circular color="blue">
                                       <IoLogoFirefox />
                                    </Button>{" "}
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
                                    variant="info"
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
                                       // icon="user"
                                    >
                                       <BsFillPersonFill />
                                    </Button>{" "}
                                    Profile
                                 </NavDropdown.Item>
                                 <NavDropdown.Item>
                                    <Button
                                       size="small"
                                       circular
                                       color="blue"
                                       // icon="info"
                                    >
                                       <BsFillInfoCircleFill />
                                    </Button>{" "}
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
                                       <IoIosLogOut />
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
                  {/* img(src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/221808/sky.jpg").background
    p.message all your dreams can come true<br/>if you have the courage to pursue them
    - for (i = 1; i <= 100; i++)
      .circle-container
        .circle */}
                  <div className="circle-container">
                     <div className="circle"></div>
                  </div>
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
               {/* <ul>
                  <li>home</li>
                  <li>reto</li>
                  <li>footer</li>
               </ul> */}
            </div>
            <div className="m1">
               <h1>Featured Mentors</h1>
               <div>
                  <Carousel className="dashcarousel">
                     <Carousel.Item>
                        <h3>Software Developers</h3>
                        <div className="carousel-Mento">
                           <div className="carousel-mentor-boxes">
                              <Image
                                 src={img14}
                                 style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 300 / 2,
                                 }}
                              ></Image>
                              <br /> <IoMdThumbsUp />
                              <br />
                              "Diana is the type of mentor you want to keep for
                              a long time if you are looking for someone to
                              guide you through the coding world. She
                              immediately identified my goals and helped me find
                              a learning path."
                              <br /> <h5> - Jerrica, a JavaScript mentee.</h5>
                           </div>
                           {/* <p>Nulla vitae elit libe</p> */}
                           <div className="carousel-mentor-boxes">
                              <Image
                                 src={img14}
                                 style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 300 / 2,
                                 }}
                              ></Image>
                              <br />
                              <IoMdThumbsUp />
                              <br />
                              "Diana is the type of mentor you want to keep for
                              a long time if you are looking for someone to
                              guide you through the coding world. She
                              immediately identified my goals and helped me find
                              a learning path."
                              <br /> <h5> - Jerrica, a JavaScript mentee.</h5>
                           </div>
                           {/* <p>Nulla vitae elit libe</p> */}
                        </div>
                        <Carousel.Caption></Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                        <h3>System Design Experts</h3>
                        <div className="carousel-Mento">
                           <div className="carousel-mentor-boxes">
                              <Image
                                 src={img14}
                                 style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 300 / 2,
                                 }}
                              ></Image>
                              <br />
                              <IoMdThumbsUp />
                              <br />
                              "Diana is the type of mentor you want to keep for
                              a long time if you are looking for someone to
                              guide you through the coding world. She
                              immediately identified my goals and helped me find
                              a learning path."
                              <br /> <h5> - Jerrica, a JavaScript mentee.</h5>
                           </div>
                           {/* <p>Nulla vitae elit libe</p> */}
                           <div className="carousel-mentor-boxes">
                              <Image
                                 src={img14}
                                 style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 300 / 2,
                                 }}
                              ></Image>
                              <br />
                              <IoMdThumbsUp />
                              <br />
                              "Diana is the type of mentor you want to keep for
                              a long time if you are looking for someone to
                              guide you through the coding world. She
                              immediately identified my goals and helped me find
                              a learning path."
                              <br /> <h5> - Jerrica, a JavaScript mentee.</h5>
                           </div>
                           {/* <p>Nulla vitae elit libe</p> */}
                        </div>

                        <Carousel.Caption></Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                        <h3>Full Stack Developer</h3>
                        <div className="carousel-Mento">
                           <div className="carousel-mentor-boxes">
                              <Image
                                 src={img14}
                                 style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 300 / 2,
                                 }}
                              ></Image>
                              <br />
                              <IoMdThumbsUp />
                              <br />
                              "Diana is the type of mentor you want to keep for
                              a long time if you are looking for someone to
                              guide you through the coding world. She
                              immediately identified my goals and helped me find
                              a learning path."
                              <br /> <h5> - Jerrica, a JavaScript mentee.</h5>
                           </div>
                           {/* <p>Nulla vitae elit libe</p> */}
                           <div className="carousel-mentor-boxes">
                              <Image
                                 src={img14}
                                 style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 300 / 2,
                                 }}
                              ></Image>
                              <br />
                              <IoMdThumbsUp />
                              <br />
                              "Diana is the type of mentor you want to keep for
                              a long time if you are looking for someone to
                              guide you through the coding world. She
                              immediately identified my goals and helped me find
                              a learning path."
                              <br /> <h5> - Jerrica, a JavaScript mentee.</h5>
                           </div>
                           {/* <p>Nulla vitae elit libe</p> */}
                        </div>

                        <Carousel.Caption></Carousel.Caption>
                     </Carousel.Item>
                  </Carousel>
               </div>
            </div>
            <div className="m1">
               <h1>Industry Experts </h1>
               <div>
                  <Carousel className="dashcarousel">
                     <Carousel.Item>
                        <h3>Bussiness Experts</h3>
                        <div className="carousel-Mento">
                           <div className="carousel-mentor-boxes">
                              <Image
                                 src={img14}
                                 style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 300 / 2,
                                 }}
                              ></Image>
                              <br />
                              <IoMdThumbsUp />
                              <br />
                              "Diana is the type of mentor you want to keep for
                              a long time if you are looking for someone to
                              guide you through the coding world. She
                              immediately identified my goals and helped me find
                              a learning path."
                              <br /> <h5> - Jerrica, a JavaScript mentee.</h5>
                           </div>
                           {/* <p>Nulla vitae elit libe</p> */}
                           <div className="carousel-mentor-boxes">
                              <Image
                                 src={img14}
                                 style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 300 / 2,
                                 }}
                              ></Image>
                              <br />
                              <IoMdThumbsUp />
                              <br />
                              "Diana is the type of mentor you want to keep for
                              a long time if you are looking for someone to
                              guide you through the coding world. She
                              immediately identified my goals and helped me find
                              a learning path."
                              <br /> <h5> - Jerrica, a JavaScript mentee.</h5>
                           </div>
                           {/* <p>Nulla vitae elit libe</p> */}
                        </div>
                        <Carousel.Caption></Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                        <h3>Personal Coachs</h3>
                        <div className="carousel-Mento">
                           <div className="carousel-mentor-boxes">
                              <Image
                                 src={img14}
                                 style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 300 / 2,
                                 }}
                              ></Image>
                              <br />
                              <IoMdThumbsUp />
                              <br />
                              "Diana is the type of mentor you want to keep for
                              a long time if you are looking for someone to
                              guide you through the coding world. She
                              immediately identified my goals and helped me find
                              a learning path."
                              <br /> <h5> - Jerrica, a JavaScript mentee.</h5>
                           </div>
                           {/* <p>Nulla vitae elit libe</p> */}
                           <div className="carousel-mentor-boxes">
                              <Image
                                 src={img14}
                                 style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 300 / 2,
                                 }}
                              ></Image>
                              <br />
                              <IoMdThumbsUp />
                              <br />
                              "Diana is the type of mentor you want to keep for
                              a long time if you are looking for someone to
                              guide you through the coding world. She
                              immediately identified my goals and helped me find
                              a learning path."
                              <br /> <h5> - Jerrica, a JavaScript mentee.</h5>
                           </div>
                           {/* <p>Nulla vitae elit libe</p> */}
                        </div>

                        <Carousel.Caption></Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                        <h3>Arts & Designer</h3>
                        <div className="carousel-Mento">
                           <div className="carousel-mentor-boxes">
                              <Image
                                 src={img14}
                                 style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 300 / 2,
                                 }}
                              ></Image>
                              <br />
                              <IoMdThumbsUp />
                              <br />
                              "Diana is the type of mentor you want to keep for
                              a long time if you are looking for someone to
                              guide you through the coding world. She
                              immediately identified my goals and helped me find
                              a learning path."
                              <br /> <h5> - Jerrica, a JavaScript mentee.</h5>
                           </div>
                           {/* <p>Nulla vitae elit libe</p> */}
                           <div className="carousel-mentor-boxes">
                              <Image
                                 src={img14}
                                 style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 300 / 2,
                                 }}
                              ></Image>
                              <br />
                              <IoMdThumbsUp />
                              <br />
                              "Diana is the type of mentor you want to keep for
                              a long time if you are looking for someone to
                              guide you through the coding world. She
                              immediately identified my goals and helped me find
                              a learning path."
                              <br /> <h5> - Jerrica, a JavaScript mentee.</h5>
                           </div>
                           {/* <p>Nulla vitae elit libe</p> */}
                        </div>

                        <Carousel.Caption></Carousel.Caption>
                     </Carousel.Item>
                  </Carousel>
               </div>
            </div>
            <div className="All-courses">
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
                                    <Button variant="dark">RAGISTER NOW</Button>
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
                                    <Button variant="dark">RAGISTER NOW</Button>
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

                              <Button variant="dark">RAGISTER NOW</Button>
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
                                    <Button variant="dark">RAGISTER NOW</Button>
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
                                    <Button variant="dark">RAGISTER NOW</Button>
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

                              <Button variant="dark">RAGISTER NOW</Button>
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
            </div>
            <div className="m4">
               <div className="m4_1">
                  <img className="m4_Image" src={New_LCD} alt="not found" />
               </div>
            </div>
            <div className="m5">
               <p>
                  <h3>
                     Learn that new skill, launch that project, land your dream
                     career.
                  </h3>
                  With unlimited messaging, regular check-ins and personal study
                  plans, your mentor can help you with actionable support, or
                  simply be there to listen.
               </p>
               <p>
                  <h3>
                     Industry-leading advice from the people who know tech best
                  </h3>
                  Your mentor will offer guidance where they see opportunity,
                  and even push you to do amazing things you probably thought
                  you couldn’t. Whether that’s switching careers or simply
                  preparing for a personal project, our mentors are like having
                  an accountability partner in your pocket.
               </p>
               <div className="two-Button">
                  <h2>
                     Over 1,000 people have already discovered the power of a
                     <br /> personal mentor. Isn’t it time you did, too?
                  </h2>
                  <Button variant="dark">Find Mentor</Button>{" "}
                  <Button variant="dark">Become A Mentor</Button>
               </div>
            </div>
            <div className="m6">
               <div className="m4_1">
                  <img className="m4_Image" src={blue_LCD} alt="not found" />
               </div>
            </div>
            <div className="entir-review">
               <div className="inner-rew">
                  <h2>Still not convinced? Don’t just take our word for it</h2>
                  At Pro-Mentor-Techs, we’ve already delivered 1-on-1 mentorship
                  to over 2,000 students, professionals, managers and
                  executives. Even better, between them they’ve left an average
                  rating of 4.7 out of 5 for our mentors. But don’t just take
                  our word for it – here’s what some of them had to say about
                  Pro-Mentor-Techs.
               </div>
               <div className="Review_grids">
                  <div className="review-grid-columns">
                     <IoMdThumbsUp />
                     <br />
                     "Felix is a great mentor, with years of experience in the
                     marketing industry he knows exactly what hiring managers
                     are looking for. Really easy to talk to, very good listener
                     and gives great advice."
                     <br /> <h5>- Walter, a Marketing mentee.</h5>
                  </div>
                  <div className="review-grid-columns">
                     <IoMdThumbsUp />
                     <br />
                     "Pooja is very organized and an excellent mentor. She is
                     very friendly and understand Flutter and Dart very well.
                     Anyone needing help with Flutter would be wise to add Pooja
                     as a mentor."
                     <br /> <h5> - Mike, a Flutter mentee</h5>
                  </div>
                  <div className="review-grid-columns">
                     <IoMdThumbsUp />
                     <br />
                     "Holly gave excellent mentorship when I had troubles
                     choosing a path in my tech career. Thank you Holly for your
                     advice and help!"
                     <br /> <h5> - Kimmy, a Software Engineering mentee</h5>
                  </div>
                  <div className="review-grid-columns">
                     <IoMdThumbsUp />
                     <br />
                     "Sandrina helps me a lot and inspires me very much! I
                     recommend her to anyone who is looking for a mentor." `
                     <br />
                     <br /> <h5> - David, a Frontend mentee</h5>
                  </div>
                  <div className="review-grid-columns">
                     <IoMdThumbsUp />
                     <br />
                     "Diana is the type of mentor you want to keep for a long
                     time if you are looking for someone to guide you through
                     the coding world. She immediately identified my goals and
                     helped me find a learning path."
                     <br /> <h5> - Jerrica, a JavaScript mentee.</h5>
                  </div>
                  <div className="review-grid-columns">
                     <IoMdThumbsUp />
                     <br />
                     "Trace went above and beyond to help me build a backend for
                     my application. Reaching out to Trace was the best decision
                     I've made in a long time."
                     <br /> <h5> - Mark, a Web Development mentee.</h5>
                  </div>
               </div>
            </div>
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
                  Your trusted source to find highly-vetted mentors & industry
                  professionals to move your career ahead.
               </div>
               <div className="Uper_Logo-Div">
                  <div className="image111">
                     <img
                        src={weblogo}
                        alt="/"
                        className="img-responsive2"
                        onClick={"/"}
                     />
                  </div>
                  <div className="all-Social-media">
                     <Link to="">
                        <div className="button_div_footer">
                           <IoMdCreate />
                        </div>
                     </Link>
                     <Link to="">
                        <div className="button_div_footer">
                           <IoLogoFacebook />
                        </div>
                     </Link>
                     <Link to="">
                        <div className="button_div_footer">
                           <IoLogoTwitter />
                        </div>
                     </Link>
                     <Link to="">
                        <div className="button_div_footer">
                           <IoLogoLinkedin />
                        </div>
                     </Link>
                     <Link to="">
                        <div className="button_div_footer">
                           <IoLogoInstagram />
                        </div>
                     </Link>
                     <Link to="">
                        <div className="button_div_footer">
                           <IoLogoGithub />
                        </div>
                     </Link>
                  </div>
               </div>
               <div className="all_footer_Links">
                  <div className="footerd1">
                     {" "}
                     <h4>PRO-MENTOR-TECHS</h4>
                     <Link to="">
                        <div className="button_div_footer">Questions</div>
                     </Link>
                     <Link to="/">
                        <div className="button_div_footer">Jobs</div>
                     </Link>{" "}
                     <Link to="/">
                        <div className="button_div_footer">Review</div>
                     </Link>{" "}
                     <Link to="/">
                        <div className="button_div_footer">Help</div>
                     </Link>{" "}
                     <Link to="/">
                        <div className="button_div_footer">Mobile</div>
                     </Link>
                  </div>
                  <div className="footerd1">
                     <div>
                        <h4>PRODUCTS</h4>
                     </div>
                     <Link to="/">
                        <div className="button_div_footer">Teams</div>
                     </Link>
                     <Link to="/">
                        <div className="button_div_footer">Talent</div>
                     </Link>{" "}
                     <Link to="/">
                        <div className="button_div_footer">Advertise</div>
                     </Link>{" "}
                     <Link to="/">
                        <div className="button_div_footer">Enterprise</div>
                     </Link>{" "}
                     <Link to="/">
                        <div className="button_div_footer">Experience</div>
                     </Link>
                  </div>
                  <div className="footerd1">
                     <h4>COMPANY</h4>
                     <Link to="">
                        <div className="button_div_footer">About</div>
                     </Link>
                     <Link to="/">
                        <div className="button_div_footer">Press</div>
                     </Link>{" "}
                     <Link to="/">
                        <div className="button_div_footer">Work here</div>
                     </Link>{" "}
                     <Link to="/">
                        <div className="button_div_footer">Legal</div>
                     </Link>{" "}
                     <Link to="/">
                        <div className="button_div_footer">Privacy Policy</div>
                     </Link>
                  </div>
                  <div className="footerd1">
                     <h4>MENTOR EXCHANGE NETWORK</h4>
                     <Link to="">
                        <div className="button_div_footer">Technology</div>
                     </Link>
                     <Link to="/">
                        <div className="button_div_footer">Life Arts</div>
                     </Link>{" "}
                     <Link to="/">
                        <div className="button_div_footer">
                           Culture & Reaction
                        </div>
                     </Link>{" "}
                     <Link to="/">
                        <div className="button_div_footer">Science</div>
                     </Link>{" "}
                     <Link to="/">
                        <div className="button_div_footer">Prefessional</div>
                     </Link>
                  </div>
               </div>
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
}

export default Dashboard;
