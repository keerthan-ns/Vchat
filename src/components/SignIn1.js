import React, { Component } from 'react';
import "../styles/LoginPage.css";
import toast,{Toaster} from 'react-hot-toast';
import {withRouter} from './AppRouter/UseNavigation';

const BASE_URL = process.env.REACT_APP_DJANGO_URL;


class SignIN extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            emailId : null,
            password: null
         }

    }

    sendLoginRequest(){
        //send user name and password by post request
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", BASE_URL + "login/", true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send("username=" + username + "&password=" + password);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = xhr.responseText;
                console.log(response);          //response from server
                response = JSON.parse(response);        //contains 'status' and 'message'
                if(response.status === "success"){
                    toast.success(response.message);
                    // this.props.navigate('/home');
                    localStorage.setItem("users",JSON.stringify(username));
                    window.location.reload();
                }
                else{
                    toast.error(response.message);
                }
            }
        }
    }

    sendLogoutRequest(){
        //send logout request
        var username = document.getElementById("username").value;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", BASE_URL + "logout/", true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send("username=" + username);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = xhr.responseText;
                console.log(response);          //response from server
                response = JSON.parse(response);        //contains 'status' and 'message'
            }
        }
    }

    render() { 
        return ( 
        <>
            <Toaster/>
             <input className="logipage__text" type="text" placeholder="Username, or email" id="username" />
             <input className="logipage__text" type="password" placeholder="Password" id="password"/>
             <button className="login__button" onClick={this.sendLogoutRequest}>Log In</button>
        </> 
    );
    }
}
 
export default SignIN;