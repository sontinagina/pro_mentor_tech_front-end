import React from "react";
import {
   Button,
   Form,
   Nav,
   Navbar,
   NavDropdown,
   FormControl,
} from "react-bootstrap";
class Dashboard extends React.Component {
   constructor() {
      super();
      this.state = {
         show: false,
         show2: false,
      };
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
                     </Form>
                  </Navbar.Collapse>
               </Navbar>
            </div>
            <div className="m1"></div>
            <div className="m2"></div>
            <div className="m3"></div>
            <div className="m4"></div>
            <div className="m5"></div>
            <div className="m6"></div>
            <div className="m7"></div>
            <div className="m8"></div>
         </div>
      );
   }
}
export default Dashboard;
