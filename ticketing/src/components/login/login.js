
import React from "react";
export class Login extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div className="base-container">
        <div className="header">Welcome to NHCC Ticketing app</div>
        <div className="content">
        <div className="image">
        <img src="https://nhcc.digitum.com.sa/image/logo.png"/>
        </div>
        <div className="form">
        <div className="form-group">
        <label htmlFor="username">UserName</label>
        <input type="text" name="username" placeholder="username"/>
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="text" name="password" placeholder="password"/>
        </div>
        </div>
        </div>
        <div className="footer">
       <button type="button"className="but">Login </button>
        </div>
        </div> 
        );
    }
}