import React from "react";
import "../App.css";
// import StarWidget from "../components/StarWidget";
import {} from "reactstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
// import { IconName } from "react-icons/si";
import { AiTwotoneFileText } from "react-icons/ai";
import { Image } from "react-bootstrap";
// import img from "../components/image/alia.webp";
import StarRatings from "react-star-ratings";

class viewProfile extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
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
         // rating: "",
      };
      this.changeRating = this.changeRating.bind(this);
   }
   // updateRating(rating) {
   //    this.setState({ rating });
   // }
   changeRating(newRating, name) {
      this.setState({
         rating: newRating,
      });
   }
   render() {
      return (
         <div className="Home">
            <div className="twoUpperdiv">
               <span className="imgdiv">
                  <span>
                     {/* <Image className="mentorimg" src={img} rounded /> */}
                  </span>
                  {/* <sapn> */}
                  <div className="mDetailtag">
                     <span className="name">{this.state.name}</span>
                     <div className="name1">{this.state.field}</div>
                     <span className="name1">
                        experience: {this.state.experience}
                     </span>
                     <div className="name3">
                        @working:-{this.state.companay}
                     </div>
                     <div className="rating">
                        <StarRatings
                           rating={this.state.rating}
                           changeRating={this.changeRating}
                           starRatedColor="#ffd700"
                           starEmptyColor="rgb(203, 211, 227)"
                           starHoverColor="#ffd700"
                           starSpacing="4px"
                           starDimension="22px"
                           starSelectingHoverColor="#FFFF00"
                        />
                        <span>(1 review)</span>
                     </div>
                  </div>

                  {/* </span> */}
                  <div className="para">
                     <p>
                        Hi,my name is Danijela,I'm a freelance Front End
                        developer from Serbia.My specialties are React.js,
                        JavaScript,HTML5 and CSS3. I'm open to mentoring a
                        beginner who needs help with Front End development.I
                        know how to make things simpler and easier to learn.Also
                        I know a variety of different tools and tricks that can
                        make your life easier and help you with learning web
                        development.Sign up for the FREE trial so we can get to
                        know each other and help you achieve your goals.
                     </p>
                  </div>

                  <div className="skills">
                     Core Skills
                     <div>
                        <>
                           <Button variant="info">{this.state.s1}</Button>{" "}
                           <Button variant="info">{this.state.s2}</Button>{" "}
                           <Button variant="info">{this.state.s3}</Button>{" "}
                           <Button variant="info">{this.state.s4}</Button>{" "}
                           <Button variant="info">{this.state.s5}</Button>{" "}
                           <Button variant="info">{this.state.s6}</Button>{" "}
                           <Button variant="info">{this.state.s7}</Button>{" "}
                           <Button variant="info">{this.state.s8}</Button>{" "}
                           <Button variant="info">{this.state.s8}</Button>
                        </>
                     </div>
                  </div>
               </span>
               <>
                  <span className="sideDiv">
                     Mentorship Program
                     <div>{this.state.fee}</div> <hr />
                     <div> Includes unlimited Q&A </div>
                     <br />
                     <div> Tasks & exercises</div>
                     <br />
                     <div> Flat fee, no hidden costs</div>
                     <br />
                     <div> 7 day free trial! Cancel anytime.</div>
                     <br />
                     <Button variant="warning">APPLY NOW</Button>
                     <p className="lastSide">Lock in this price now!</p>
                  </span>
               </>
            </div>
            <div className="track">
               <p className="tp">TRACK DASHBOARD</p>
               <div>
                  <AiTwotoneFileText />
                  logoutFull-Stack Web Development - May 2021 - vector (Archive)
               </div>
               <div>
                  {" "}
                  <AiTwotoneFileText />
                  Full-Stack Web Development - July 2021 - Explorer
               </div>
               <div className="tp">NEW BATCHS </div>
               <div>
                  {" "}
                  <AiTwotoneFileText />
                  Full-Stack Web Development - July 2021 - Explorer
               </div>{" "}
               <div>
                  {" "}
                  <AiTwotoneFileText />
                  Full-Stack Web Development - July 2021 - Explorer
               </div>
            </div>
         </div>
      );
   }
}
export default viewProfile;
