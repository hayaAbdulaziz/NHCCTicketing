import React from 'react';
import "./style.scss";
import Ticketlist from "./ticketlist";
import Createtickets from "./createtickets";
import Opentickets from "./opentickets";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
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
    <nav >
    <Link to="/ticketlist">Ticketlist</Link>
    <Link to="/ticket">Ticket</Link>
    <Link to="/createtickets">Createtickets</Link>
    <Link to="/opentickets">Opentickets</Link>
    </nav>
    <div>
          <Route path="/ticket"render={() => (<Ticket />)} />
          <Route path="/ticketlist" render={() => (   <Ticketlist /> )}/>
          <Route path="/createtickets" render={() => (   <Createtickets /> )}/>
          <Route path="/opentickets" render={() => (   <Opentickets /> )}/>
        </div>
      </Router>
     
        );
    }}

