import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import image1 from "../images/dribbble-2.jpg";
import weblogo from "../images/newone.jpg";
import homehero from "../images/home_hero.png";
import coachmento from "../images/mobileshot.png";
import trilogy from "../images/StarCircle.png";
import mento from "../images/home_hero.webp";
import findmentor from "../images/find-mentor.webp";
import aplymentor from "../images/aply-mentor.webp";
import skillsup from "../images/skillsup.webp";
import end11 from "../images/end11.webp";
import footer1 from "../images/1final.jpg";

import { IoLogoInstagram } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoFirefox } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { Button } from "react-bootstrap";
function Home(props) {
   return (
      <div className="home">
         <div className="both">
            <div className="upperpart">
               <div className="image1">
                  <img
                     src={weblogo}
                     alt="/"
                     className="img-responsive"
                     onClick={"/"}
                  />
               </div>
               <div className="linkshome">
                  <div className="l1">
                     {" "}
                     <Link
                        onClick={() => {
                           props.loginHandler("signin");
                        }}
                        to="/signin"
                     >
                        <Button variant="btn btn-outline-light">Sign In</Button>
                     </Link>
                     <Link
                        onClick={() => {
                           props.loginHandler("signup");
                        }}
                        to="/signup"
                     >
                        {" "}
                        <Button variant="btn btn-outline-light">
                           Join For Free{" "}
                        </Button>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="downpart">
               <div className="slidwrapo">
                  <Carousel>
                     <Carousel.Item className="cr">
                        <Carousel.Caption>
                           <h3>With Pro-Mentor-Techs</h3>
                           <p>
                              Mentoring from the best mentors anytime,anywhere|
                              Achieve your personal and professional
                              goals.Personalised attention from Mentors| clarity
                              solutions to your problems
                           </p>
                        </Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item className="cr">
                        <img className="crimg" src={mento} alt="not found" />
                     </Carousel.Item>
                     <Carousel.Item className="cr">
                        <Carousel.Caption>
                           <h3>Get Instant Access to </h3>
                           <p>
                              Special Mentorship programs | video calls,live
                              session and Group chats| Masterclasses|
                              Audiobooks| MentorTalks| Self-Assesment
                           </p>
                        </Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item className="cr">
                        <img className="crimg" src={trilogy} alt="not found" />
                     </Carousel.Item>
                     <Carousel.Item className="cr">
                        <Carousel.Caption>
                           <h3>Get Mentorship from the best</h3>
                           <p>
                              Life coachs| Industry coachs| Business Mentors|
                              career Mentors| coach buddy
                           </p>
                        </Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item className="cr">
                        <img
                           className="crimg"
                           src={coachmento}
                           alt="not found"
                        />
                     </Carousel.Item>
                  </Carousel>
               </div>
               <div className="image2">
                  <img
                     className="img-responsive"
                     src={image1}
                     alt="not found"
                  />
               </div>
            </div>
         </div>
         <div className="homewhite">
            <pre>
               <h1 style={{ background: "	#20B2AA", color: "white" }}>
                  1-on-1 Subjective Mentorship
               </h1>

               <p>
                  {" "}
                  Work with leading tech mentors and gain access to <br />
                  personalized guidance to reach your potential.
                  <br />
                  Ongoing sessions and expert advice, on your terms,
                  <br /> all for a flat monthly price.
               </p>
            </pre>
         </div>
         <div>
            <img src={homehero} className="homehero"></img>
         </div>
         <div className="homecontent">
            <b>GET MENTORED BY INDUSTRY VETERANS</b>
            <br />
            <Link to="http://google.com">
               <Button variant="light">Google</Button>
            </Link>
         </div>
         <div className="homemid">
            <h1>
               <b>
                  Accessing a personal career coach
                  <br /> has never been simpler.
               </b>
            </h1>{" "}
            The road to career success is often a bumpy one.
            <br /> But imagine how much easier it would be if you had an <br />
            experienced industry leader available anytime to <br />
            offer advice and expert guidance.{" "}
         </div>
         <div></div>
         <div className="threeimages">
            <div className="home1">
               <h5>
                  <b>Find your Mentor</b>
               </h5>
               <img
                  src={findmentor}
                  alt="not found"
                  className="findmento"
               ></img>
               <div className="homeDiv">
                  Explore our growing catalogue of experienced mentors until you
                  find the perfect fit.
               </div>
            </div>
            <div className="home2">
               <h5>
                  <b>Apply for Mentorship</b>
               </h5>
               <img src={aplymentor} alt="" className="findmento"></img>
               <div className="homeDiv">
                  Fill in an application, and if you’re a match with your chosen
                  mentor you can start your free 7-day trial.
               </div>
            </div>
            <div className="home3">
               <h5>
                  <b>Level up your skills</b>
               </h5>
               <img src={skillsup} alt="" className="findmento"></img>
               <div className="homeDiv">
                  From personal chats to hands-on support, each mentor offers
                  different services to help you skyrocket your career.
               </div>
            </div>
         </div>
         <div className="fbtn">
            <Button variant="info">Find Mentor</Button>
            {"  "} <Button variant="info">Become a Mentor</Button>
         </div>

         <div className="homelastdiv">
            <h3>
               Learn that new skill, launch that project, land your dream
               career.
            </h3>
            With unlimited messaging, regular check-ins and personal study
            plans,
            <br /> your mentor can help you with actionable
            <br /> support, or simply be there to listen.
         </div>
         <div className="home22">
            <div className="enddiv">
               <p>
                  <h3>
                     Expert guidance. Right when you
                     <br /> need it most.
                  </h3>
                  With a direct 1-on-1 link to your mentor,
                  <br /> you’ll be able to ask questions, discuss <br />{" "}
                  progress, or just kick the tyres on a new idea.
                  <br /> Got an upcoming interview you need to nail?
                  <br />
                  Drop your mentor a message and they can help.
                  <br /> Unlimited messaging means you can ask <br />
                  them anything and they’ll respond as soon as they can.
                  <br /> (They’re only human, after all).
               </p>
            </div>
            <div className="endimg">
               <img src={end11} className="endimg"></img>
            </div>
         </div>
         {/**footer page started */}
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
                     <div className="button_div_footer">Culture & Reaction</div>
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
               <img src={footer1} alt="/" className="footerimg" onClick={"/"} />
            </div>
         </div>
      </div>
   );
}
export default Home;
