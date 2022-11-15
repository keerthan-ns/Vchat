import React, { Component } from 'react';
import "../styles/LoginPage.css";

class SignIN extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            emailId : null,
            password: null
         }
    }

    render() { 
        return ( 
        <div>
             <input className="logipage__text" onChange={(event)=>{this.state.emailId=event.currentTarget.value}} type="text" placeholder="Phone number, username, or email" />
             <input className="logipage__text" onChange={(event)=>{this.state.password=event.currentTarget.value}}  type="password" placeholder="Password" />
             <a href="/"><button className="login__button" onClick={this.login}>Log In</button></a>
             {/* <button className="login__button" onClick={'/'}>Log In</button> */}
        </div> 
    );
    }
}
 
export default SignIN;