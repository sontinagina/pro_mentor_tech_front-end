import React from "react";
import { Link } from "react-router-dom";
import weblogo from "../images/newone.jpg";
import footer1 from "../images/1final.jpg";
import New_LCD from "../images/New_LCD.png";
import blue_LCD from "../images/blue_LCD.jpg";
// import img14 from "../images/my1.png";
import mento1 from "../images/mentor-Image-one.jfif";
import mento8 from "../images/mentor-image-eight.jpg";
import mento11 from "../images/mentor-image-eleone.jfif";
import mento5 from "../images/mentor-image-five.jpg";
import mento4 from "../images/mentor-image-four.jpg";
import mento9 from "../images/mentor-image-nine.jfif";
import mento7 from "../images/mentor-image-seven.webp";
import mento6 from "../images/mentor-image-six.jpg";
import mento10 from "../images/mentor-image-ten.jpeg";
import mento3 from "../images/mentor-image-three.jfif";
import mento2 from "../images/mentor-image-two.jpg";
import mento12 from "../images/mentor-image-twoelve.jfif";
// import mento12 from "../images/mentor-image-twoelve.jfif";
import StarRatings from "react-star-ratings";

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
// import StarRatings from "react-star-ratings";
import { BsChatDotsFill } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";
import { IoMdThumbsUp } from "react-icons/io";
// import { BsSearch } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoFirefox } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { BsPatchCheck } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import { BsStack } from "react-icons/bs";
import { BsStackOverflow } from "react-icons/bs";
import { BsSkype } from "react-icons/bs";
import { BsSnapchat } from "react-icons/bs";
import { BsFillDropletFill } from "react-icons/bs";
import { BsFillLayersFill } from "react-icons/bs";
import { BsEnvelopeOpenFill } from "react-icons/bs";
import { BsTelephoneForward } from "react-icons/bs";
import Profile from "./Profile";
// import viewProfile from "./viewProfile"; 
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
      const url3 = this.props.URL + "getUsername";
      console.log("url3::", url3);
      fetch(url3, {
         credentials:'include',
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
      })
         .then((r) => {
            return r.json();
         })
         .then((r) => {
            console.log("res::->", r);
            console.log("get username value: ", r.user.length);
            this.setState({
               userInfo: [...r.user],
               userEmailId: [...r.user],
            });
         })
         .catch((err) => {
            console.log(err);
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
                                    {this.state.userInfo !== undefined
                                       ? this.state.userInfo[0].USERNAME
                                       : ""}
                                    <br />
                                    {this.state.userEmailId !== undefined
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
            </div>
            {/* <div className="dash-search"> */}
            <input
               className="dash-search"
               placeholder="Search `mentors`"
            ></input>

            {/* </div> */}
            <div className="dash-box-buttons">
               <Button variant="light" size="sm">
                  PYTHON MENTORS
               </Button>
               <Button variant="light">JAVA SCRIPT MENTORS</Button>
               <Button variant="light">JAVA MENTORS</Button>
               <Button variant="light">DESIGN MENTORS</Button>
               <Button variant="light">BUSINESS MENTORS</Button>
               <Button variant="light">MACHINE LEARNING MENTORS</Button>
               <Button variant="light">PRODUCT MANAGEMENT MENTORS</Button>
            </div>
            <div className="m1">
               <h1>Featured Mentors</h1>
               <div>
                  <Carousel className="dashcarousel">
                     <Carousel.Item>
                        <h3>Software Developers</h3>
                        <div className="carousel-Mento">
                           <div className="flip">
                              <div class="flip-box">
                                 <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                       <Image
                                          src={mento11}
                                          style={{
                                             width: 90,
                                             height: 90,
                                             borderRadius: 300 / 2,
                                          }}
                                       ></Image>
                                       <br />
                                       <h2>Aayush Ghosh</h2>
                                       <IoMdThumbsUp />
                                       <br />
                                       <h5>
                                          Software Developer at Apple{" "}
                                          <BsApple />
                                       </h5>
                                       <div className="rating">
                                          <StarRatings
                                             rating={4.5}
                                             changeRating={this.changeRating}
                                             starRatedColor="#ffd700"
                                             starEmptyColor="rgb(203, 211, 227)"
                                             starHoverColor="#ffd700"
                                             starSpacing="4px"
                                             starDimension="22px"
                                             starSelectingHoverColor="#FFFF00"
                                          />
                                          <span>(220 review)</span>
                                          <br />
                                          <BsChatDotsFill /> Chat
                                          {" .."} <BsFillTelephoneFill />{" "}
                                          Regular Calls{" .. "}
                                          <BsPatchCheck /> Tasks
                                       </div>
                                    </div>
                                    <div class="flip-box-back">
                                       <h2>Experience</h2>
                                       Aayush is a Apple Developer Expert for
                                       Web Technologies. he is a field Marshal
                                       of Frontend Applications, thriving to
                                       innovate frontend with accessible
                                       Interfaces. An innovation strategist and
                                       Massachusetts Institute of Technology
                                       Bootcamper graduate, he brings 4+ years
                                       of experience in Web Development,
                                       Accessibility with his expertise in
                                       Angular Framework. …
                                    </div>
                                 </div>
                              </div>

                              <div class="flip-box">
                                 <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                       <Image
                                          src={mento1}
                                          style={{
                                             width: 90,
                                             height: 90,
                                             borderRadius: 300 / 2,
                                          }}
                                       ></Image>
                                       <br />
                                       <h2>Claire Lyles </h2>
                                       <IoMdThumbsUp />
                                       <br />
                                       <h5>
                                          Software Developer at Google{" "}
                                          <BsGoogle />
                                       </h5>
                                       <div className="rating">
                                          <StarRatings
                                             rating={3.5}
                                             changeRating={this.changeRating}
                                             starRatedColor="#ffd700"
                                             starEmptyColor="rgb(203, 211, 227)"
                                             starHoverColor="#ffd700"
                                             starSpacing="4px"
                                             starDimension="22px"
                                             starSelectingHoverColor="#FFFF00"
                                          />
                                          <span>(20 review)</span>
                                          <br />
                                          <BsChatDotsFill /> Chat
                                          {" .."} <BsFillTelephoneFill />{" "}
                                          Regular Calls{" .. "}
                                          <BsPatchCheck /> Tasks
                                       </div>
                                    </div>
                                    <div class="flip-box-back">
                                       <h2>Experience</h2>
                                       Hi there, I’m Claire 👋 I have 8+ years
                                       of experience in design and most recently
                                       worked at Google. If you’re anything like
                                       me, you also had a “non-traditional” path
                                       into design. Over the years I've had the
                                       opportunity to work on products ranging
                                       from wearables and travel, to consumer …
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <Carousel.Caption></Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                        <h3>System Design Experts</h3>
                        <div className="carousel-Mento">
                           <div className="flip">
                              <div class="flip-box">
                                 <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                       <Image
                                          src={mento12}
                                          style={{
                                             width: 90,
                                             height: 90,
                                             borderRadius: 300 / 2,
                                          }}
                                       ></Image>
                                       <br />
                                       <h2>Austin Wilson</h2>
                                       <IoMdThumbsUp />
                                       <br />
                                       <h5>
                                          Platform Architect at It Works!
                                          Twitter <BsTwitter />
                                       </h5>
                                       <div className="rating">
                                          <StarRatings
                                             rating={4.5}
                                             changeRating={this.changeRating}
                                             starRatedColor="#ffd700"
                                             starEmptyColor="rgb(203, 211, 227)"
                                             starHoverColor="#ffd700"
                                             starSpacing="4px"
                                             starDimension="22px"
                                             starSelectingHoverColor="#FFFF00"
                                          />
                                          <span>(220 review)</span>
                                          <br />
                                          <BsChatDotsFill /> Chat
                                          {" .."} <BsFillTelephoneFill />{" "}
                                          Regular Calls{" .. "}
                                          <BsPatchCheck /> Tasks
                                       </div>
                                    </div>
                                    <div class="flip-box-back">
                                       <h2>Experience</h2>
                                       My first 4 years in development were code
                                       first ask questions later. Then I found a
                                       job under someone who could truly mentor
                                       me in the principles of good code. This
                                       change in my career propelled me from a
                                       year one developer into a professional
                                       software engineer and I would …
                                    </div>
                                 </div>
                              </div>

                              <div class="flip-box">
                                 <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                       <Image
                                          src={mento8}
                                          style={{
                                             width: 90,
                                             height: 90,
                                             borderRadius: 300 / 2,
                                          }}
                                       ></Image>
                                       <br />
                                       <h2>Nilesh Arnaiya </h2>
                                       <IoMdThumbsUp />
                                       <br />
                                       <h5>
                                          Android Developer at Youtube{" "}
                                          <BsYoutube />
                                       </h5>
                                       <div className="rating">
                                          <StarRatings
                                             rating={5}
                                             changeRating={this.changeRating}
                                             starRatedColor="#ffd700"
                                             starEmptyColor="rgb(203, 211, 227)"
                                             starHoverColor="#ffd700"
                                             starSpacing="4px"
                                             starDimension="22px"
                                             starSelectingHoverColor="#FFFF00"
                                          />
                                          <span>(400 review)</span>
                                          <br />
                                          <BsChatDotsFill /> Chat
                                          {" .."} <BsFillTelephoneFill />{" "}
                                          Regular Calls{" .. "}
                                          <BsPatchCheck /> Tasks
                                       </div>
                                    </div>
                                    <div class="flip-box-back">
                                       <h2>Experience</h2>
                                       Hello, I'm Nilesh Arnaiya. I've been
                                       mentoring on this platform for 3+ years
                                       now and I've previously worked as a Data
                                       scientist at Genuin Inc and currently a
                                       senior Android Developer at Aventior. I
                                       was also a Mentor at Udacity where I
                                       applied my extensive mentorship
                                       experience in AI and …
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <Carousel.Caption></Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                        <h3>Full Stack Developer</h3>
                        <div className="carousel-Mento">
                           <div className="flip">
                              <div class="flip-box">
                                 <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                       <Image
                                          src={mento5}
                                          style={{
                                             width: 90,
                                             height: 90,
                                             borderRadius: 300 / 2,
                                          }}
                                       ></Image>
                                       <br />
                                       <h2>Richard Bunkham </h2>
                                       <IoMdThumbsUp />
                                       <br />
                                       <h5>
                                          Executive Career Coach at Whatsapp{" "}
                                          <BsWhatsapp />
                                       </h5>
                                       <div className="rating">
                                          <StarRatings
                                             rating={4.5}
                                             changeRating={this.changeRating}
                                             starRatedColor="#ffd700"
                                             starEmptyColor="rgb(203, 211, 227)"
                                             starHoverColor="#ffd700"
                                             starSpacing="4px"
                                             starDimension="22px"
                                             starSelectingHoverColor="#FFFF00"
                                          />
                                          <span>(220 review)</span>
                                          <br />
                                          <BsChatDotsFill /> Chat
                                          {" .."} <BsFillTelephoneFill />{" "}
                                          Regular Calls{" .. "}
                                          <BsPatchCheck /> Tasks
                                       </div>
                                    </div>
                                    <div class="flip-box-back">
                                       <h2>Experience</h2>I am a qualified HR
                                       professional and experienced career
                                       coach, my approach is pragmatic and
                                       action focused together we will find you
                                       your dream job and pass the interview. I
                                       have over 20 years experience recruiting
                                       in varied sectors globally, I have an
                                       insight into what employers are looking
                                       for
                                    </div>
                                 </div>
                              </div>

                              <div class="flip-box">
                                 <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                       <Image
                                          src={mento9}
                                          style={{
                                             width: 90,
                                             height: 90,
                                             borderRadius: 300 / 2,
                                          }}
                                       ></Image>
                                       <br />
                                       <h2>Tobias Steffen</h2>
                                       <IoMdThumbsUp />
                                       <br />
                                       <h5>
                                          Software Developer at Spotify{" "}
                                          <BsSpotify />
                                       </h5>
                                       <div className="rating">
                                          <StarRatings
                                             rating={4.5}
                                             changeRating={this.changeRating}
                                             starRatedColor="#ffd700"
                                             starEmptyColor="rgb(203, 211, 227)"
                                             starHoverColor="#ffd700"
                                             starSpacing="4px"
                                             starDimension="22px"
                                             starSelectingHoverColor="#FFFF00"
                                          />
                                          <span>(220 review)</span>
                                          <br />
                                          <BsChatDotsFill /> Chat
                                          {" .."} <BsFillTelephoneFill />{" "}
                                          Regular Calls{" .. "}
                                          <BsPatchCheck /> Tasks
                                       </div>
                                    </div>
                                    <div class="flip-box-back">
                                       <h2>Experience</h2>
                                       Hi there, 👋 You love webdesign and want
                                       to want to become better in using
                                       Webflow? Great! I can accompany you in
                                       getting familiar with the basics and also
                                       teach you advanced techniques. Reach out
                                       to me so we can dive right into your
                                       project! 🥥 About me in a …
                                    </div>
                                 </div>
                              </div>
                           </div>
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
                           <div className="flip">
                              <div class="flip-box">
                                 <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                       <Image
                                          src={mento4}
                                          style={{
                                             width: 90,
                                             height: 90,
                                             borderRadius: 300 / 2,
                                          }}
                                       ></Image>
                                       <br />
                                       <h2>Everton Paula </h2>
                                       <IoMdThumbsUp />
                                       <br />
                                       <h5>
                                          Business Consultant at Andrade
                                          Gutierrez Engineering <BsStack />
                                       </h5>
                                       <div className="rating">
                                          <StarRatings
                                             rating={3}
                                             changeRating={this.changeRating}
                                             starRatedColor="#ffd700"
                                             starEmptyColor="rgb(203, 211, 227)"
                                             starHoverColor="#ffd700"
                                             starSpacing="4px"
                                             starDimension="22px"
                                             starSelectingHoverColor="#FFFF00"
                                          />
                                          <span>(220 review)</span>
                                          <br />
                                          <BsChatDotsFill /> Chat
                                          {" .."} <BsFillTelephoneFill />{" "}
                                          Regular Calls{" .. "}
                                          <BsPatchCheck /> Tasks
                                       </div>
                                    </div>
                                    <div class="flip-box-back">
                                       <h2>Experience</h2>
                                       Bachelor Degree in Quality Management,
                                       Data Scientist, a specialist in
                                       Operational Excellence and Lean and Six
                                       Sigma Training, Quality Engineer
                                       Certified by the American Society for
                                       Quality, Master Black Belt certified by
                                       the Florida Atlantic University and
                                       Technician in Mechanical Industrial.
                                       Experienced in Industrial Operations and
                                       Services, Quality Management and …
                                    </div>
                                 </div>
                              </div>

                              <div class="flip-box">
                                 <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                       <Image
                                          src={mento2}
                                          style={{
                                             width: 90,
                                             height: 90,
                                             borderRadius: 300 / 2,
                                          }}
                                       ></Image>
                                       <br />
                                       <h2>Lea Marolt Sonnenschein</h2>
                                       <IoMdThumbsUp />
                                       <br />
                                       <h5>
                                          Senior Product Manager at
                                          StackOverflow <BsStackOverflow />
                                       </h5>
                                       <div className="rating">
                                          <StarRatings
                                             rating={4.5}
                                             changeRating={this.changeRating}
                                             starRatedColor="#ffd700"
                                             starEmptyColor="rgb(203, 211, 227)"
                                             starHoverColor="#ffd700"
                                             starSpacing="4px"
                                             starDimension="22px"
                                             starSelectingHoverColor="#FFFF00"
                                          />
                                          <span>(220 review)</span>
                                          <br />
                                          <BsChatDotsFill /> Chat
                                          {" .."} <BsFillTelephoneFill />{" "}
                                          Regular Calls{" .. "}
                                          <BsPatchCheck /> Tasks
                                       </div>
                                    </div>
                                    <div class="flip-box-back">
                                       <h2>Experience</h2>
                                       I'm an iOS engineer turned product
                                       manager trained in New York and London.
                                       As a career switcher (back and forth
                                       between engineering and product a few
                                       times), I know how tricky it can be to
                                       get your foot in the door and re-package
                                       yourself and your skillset. I love all …
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <Carousel.Caption></Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                        <h3>Personal Coachs</h3>
                        <div className="carousel-Mento">
                           <div className="flip">
                              <div class="flip-box">
                                 <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                       <Image
                                          src={mento7}
                                          style={{
                                             width: 90,
                                             height: 90,
                                             borderRadius: 300 / 2,
                                          }}
                                       ></Image>
                                       <br />
                                       <h2>Andrii Khliakin </h2>
                                       <IoMdThumbsUp />
                                       <br />
                                       <h5>
                                          Senior Product Manager at Jooble{" "}
                                          <BsSkype />
                                       </h5>
                                       <div className="rating">
                                          <StarRatings
                                             rating={5}
                                             changeRating={this.changeRating}
                                             starRatedColor="#ffd700"
                                             starEmptyColor="rgb(203, 211, 227)"
                                             starHoverColor="#ffd700"
                                             starSpacing="4px"
                                             starDimension="22px"
                                             starSelectingHoverColor="#FFFF00"
                                          />
                                          <span>(220 review)</span>
                                          <br />
                                          <BsChatDotsFill /> Chat
                                          {" .."} <BsFillTelephoneFill />{" "}
                                          Regular Calls{" .. "}
                                          <BsPatchCheck /> Tasks
                                       </div>
                                    </div>
                                    <div class="flip-box-back">
                                       <h2>Experience</h2>
                                       I'm a Product Manager with 15 years of
                                       overall experience focused on delivering
                                       high-impact results in web products. I
                                       have strong experience in both B2B and
                                       B2C areas. I worked in Jooble — #2 job
                                       aggregator in the World with millions
                                       users audience. And previously, I built
                                       from a scratch …
                                    </div>
                                 </div>
                              </div>

                              <div class="flip-box">
                                 <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                       <Image
                                          src={mento3}
                                          style={{
                                             width: 90,
                                             height: 90,
                                             borderRadius: 300 / 2,
                                          }}
                                       ></Image>
                                       <br />
                                       <h2>Megan Casebier </h2>
                                       <IoMdThumbsUp />
                                       <br />
                                       <h5>
                                          UX Designer & Researcher at Snapchat{" "}
                                          <BsSnapchat />
                                       </h5>
                                       <div className="rating">
                                          <StarRatings
                                             rating={4}
                                             changeRating={this.changeRating}
                                             starRatedColor="#ffd700"
                                             starEmptyColor="rgb(203, 211, 227)"
                                             starHoverColor="#ffd700"
                                             starSpacing="4px"
                                             starDimension="22px"
                                             starSelectingHoverColor="#FFFF00"
                                          />
                                          <span>(220 review)</span>
                                          <br />
                                          <BsChatDotsFill /> Chat
                                          {" .."} <BsFillTelephoneFill />{" "}
                                          Regular Calls{" .. "}
                                          <BsPatchCheck /> Tasks
                                       </div>
                                    </div>
                                    <div class="flip-box-back">
                                       <h2>Experience</h2>
                                       Hi! I'm Megan. I'm a UX Designer and
                                       Researcher working at a startup in the
                                       shipping & logistics industry. I'm also a
                                       non-traditional career switcher that
                                       leveraged my savvy storytelling skills to
                                       land my first UX role with ZERO industry
                                       experience and a background in Social
                                       Psychology, Digital Marketing and …
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <Carousel.Caption></Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                        <h3>Arts & Designer</h3>
                        <div className="carousel-Mento">
                           <div className="flip">
                              <div class="flip-box">
                                 <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                       <Image
                                          src={mento10}
                                          style={{
                                             width: 90,
                                             height: 90,
                                             borderRadius: 300 / 2,
                                          }}
                                       ></Image>
                                       <br />
                                       <h2>Niharika Arora </h2>
                                       <IoMdThumbsUp />
                                       <br />
                                       <h5>
                                          Android Engineer at Google{" "}
                                          <BsGoogle />
                                       </h5>
                                       <div className="rating">
                                          <StarRatings
                                             rating={5}
                                             changeRating={this.changeRating}
                                             starRatedColor="#ffd700"
                                             starEmptyColor="rgb(203, 211, 227)"
                                             starHoverColor="#ffd700"
                                             starSpacing="4px"
                                             starDimension="22px"
                                             starSelectingHoverColor="#FFFF00"
                                          />
                                          <span>(220 review)</span>
                                          <br />
                                          <BsChatDotsFill /> Chat
                                          {" .."} <BsFillTelephoneFill />{" "}
                                          Regular Calls{" .. "}
                                          <BsPatchCheck /> Tasks
                                       </div>
                                    </div>
                                    <div class="flip-box-back">
                                       <h2>Experience</h2>
                                       Niharika Arora, also known as
                                       theDroidLady, is working as an Android
                                       Engineer at Google and has been into
                                       Android for the last 6 years. She is a
                                       former Google Developer Expert for
                                       Android and one of the core contributors
                                       to the Government of India's Contact
                                       tracing App "AarogyaSetu" to fight …
                                    </div>
                                 </div>
                              </div>

                              <div class="flip-box">
                                 <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                       <Image
                                          src={mento6}
                                          style={{
                                             width: 90,
                                             height: 90,
                                             borderRadius: 300 / 2,
                                          }}
                                       ></Image>
                                       <br />
                                       <h2>Kiran Kumar</h2>
                                       <IoMdThumbsUp />
                                       <br />
                                       <h5>
                                          Engineering Manager at MediBuddy{" "}
                                          <BsFillDropletFill />
                                       </h5>
                                       <div className="rating">
                                          <StarRatings
                                             rating={4.5}
                                             changeRating={this.changeRating}
                                             starRatedColor="#ffd700"
                                             starEmptyColor="rgb(203, 211, 227)"
                                             starHoverColor="#ffd700"
                                             starSpacing="4px"
                                             starDimension="22px"
                                             starSelectingHoverColor="#FFFF00"
                                          />
                                          <span>(220 review)</span>
                                          <br />
                                          <BsChatDotsFill /> Chat
                                          {" .."} <BsFillTelephoneFill />{" "}
                                          Regular Calls{" .. "}
                                          <BsPatchCheck /> Tasks
                                       </div>
                                    </div>
                                    <div class="flip-box-back">
                                       <h2>Experience</h2>
                                       Coming from India's one of the most
                                       premium institutes (IIT Kharagpur) and
                                       having over seven years of experience,
                                       building scalable & stable products that
                                       can solve real life problems is something
                                       I enjoy. I have worked in fast-paced
                                       startups to now a growing unicorn
                                       enterprise in the healthcare space along
                                       …
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <Carousel.Caption></Carousel.Caption>
                     </Carousel.Item>
                  </Carousel>
               </div>
            </div>
            <div className="All-courses">
               <div className="course-box">
                  <h2>Explore Our Courses Section</h2>
                  <p>
                     Take the first step in building a strong foundation for
                     your career
                  </p>
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
               <div className="review-box1">
                  <h1>Our Success Stories</h1>
                  <p>
                     1800+ students on DS ,Algo , OS & Web Development with
                     detailed get benifited Completely Level 1 of DS Algo series
                     ,<br />
                     it's seriously all you need to crack 80% of tech
                     interviews. Works best for students/working
                     <br /> professionals who:
                  </p>
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
            <div className="Consultend-page">
               <div>
                  <h1>Do you have any doubts?</h1>
                  <p>
                     Do you have any doubts?Get a free consultation with our
                     specialists
                  </p>
                  <div>
                     <h3>
                        <BsFillTelephoneFill /> Call Us +91 11 4019 4461
                     </h3>{" "}
                     <h3>
                        <BsTelephoneForward /> Tele Us +91 20093 45
                     </h3>
                     <h4>
                        <BsEnvelopeOpenFill /> support.no.reply@gmail.com
                     </h4>
                  </div>
               </div>
               <div className="Consultant-input">
                  <BsFillLayersFill />
                  <input
                     className="input-conso"
                     type="text"
                     placeholder="Your Name"
                  ></input>
                  <input
                     className="input-conso"
                     type="email"
                     placeholder="Your Email"
                  ></input>
                  <input
                     className="input-conso"
                     type="number"
                     placeholder="Your Number"
                  ></input>
                  <input
                     className="input-conso"
                     type="number"
                     placeholder="Your Graduation"
                  ></input>
                  <Button variant="warning">Request CallBack</Button>
               </div>
            </div>
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
