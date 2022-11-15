import React, { Component } from 'react';
import "../styles/LoginPage.css";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            emailId : null,
            name: null,
            userName: null,
            password: null
         }
    }

    render() { 
        return ( 
            <div>
                <input className="logipage__text" type="text" placeholder="Mobile number or Email" />
                <input className="logipage__text" type="text" placeholder="Full Name" />
                <input className="logipage__text" type="text" placeholder="Username" />
                <input className="logipage__text" type="password" placeholder="Password" />
                <button className="login__button">Sign up</button>
            </div>
         );
    }
}
 
export default SignUp;