import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import image1 from "../images/Dashboard-1.png";
import { Button } from "react-bootstrap";
function Home(props) {
   return (
      <div className="home">
         <div className="both">
            <div className="upperpart">
               <div className="image1">
                  <img src={image1} alt="/" className="img-responsive" />
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
                        {/* <img
                           className="d-block w-100"
                           src="https://unsplash.com/t/wallpapers"
                           alt="First slide"
                        /> */}
                        <Carousel.Caption>
                           <h3>First slide label</h3>
                           <p>
                              Nulla vitae elit libero, a pharetra augue mollis
                              interdum.
                           </p>
                        </Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item className="cr">
                        {/* <img
                           className="d-block w-100"
                           src="https://api.unsplash.com/photos,nature?"
                           alt="Second slide"
                        /> */}

                        <Carousel.Caption>
                           <h3>Second slide label</h3>
                           <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                           </p>
                        </Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item className="cr">
                        {/* <img
                           className="d-block w-100"
                           src="https://unsplash.com/? nature,technology"
                           alt="Third slide"
                        /> */}

                        <Carousel.Caption>
                           <h3>Third slide label</h3>
                           <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur.
                           </p>
                        </Carousel.Caption>
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
      </div>
   );
}
export default Home;
