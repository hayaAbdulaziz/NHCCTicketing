import React from 'react';
import "./style.scss";
import Ticketlist from "./ticketlist";
import Createtickets from "./createtickets";
import Opentickets from "./opentickets";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
export default class Ticket extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // list of ticket
        }
    
    }
    render(){
    return(
        
  <Router>
 
  <Navbar bg="light" expand="lg">
  <img src="https://nhcc.digitum.com.sa/image/logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      
      />
  <Navbar.Brand href="#home">NHCC Ticketing app</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
  <Nav.Link href="/ticketlist"><Link to="/ticketlist">Ticketlist</Link></Nav.Link>
  <Nav.Link href="/ticket"><Link to="/ticket">Ticket</Link></Nav.Link>
  <Nav.Link href="/createtickets"><Link to="/createtickets">Createtickets</Link></Nav.Link>
  <Nav.Link href="/opentickets"> <Link to="/opentickets">Opentickets</Link></Nav.Link>
  </Nav>
  </Navbar.Collapse>
  </Navbar>
    <div>
   <Route path="/ticket"render={() => (<Ticket />)} />
   <Route path="/ticketlist" render={() => (   <Ticketlist /> )}/>
   <Route path="/createtickets" render={() => (   <Createtickets /> )}/>
   <Route path="/opentickets" render={() => (   <Opentickets /> )}/>
   </div>
   </Router>
     
        );
    }}

