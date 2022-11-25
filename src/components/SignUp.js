import React, { Component } from 'react';
import "../styles/LoginPage.css";
import '../styles/Popup.css';
import toast,{Toaster} from 'react-hot-toast';

const BASE_URL = process.env.REACT_APP_DJANGO_URL;

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

    sendSignupRequest(){
        //send email, fullname, user name and password by post request
        var email = document.getElementById("emailID").value;
        var fullname = document.getElementById("name").value;
        var username = document.getElementById("userName").value;
        var password = document.getElementById("password").value;
        if(email===""||username===""||fullname===""||password===""){
            toast.error("All the fields must be filled !");
        }
        else{
            toast('Registering please wait..',
                {duration:1000}
            );
            var xhr = new XMLHttpRequest();
            xhr.open("POST", BASE_URL + "signup/", true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send("username=" + username + "&password=" + password + "&email=" + email + "&fullname=" + fullname);
            xhr.onreadystatechange = function(){
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var response = xhr.responseText;
                    console.log(response);          //response from server
                    response = JSON.parse(response);       //contains 'status' and 'message' 
                    if(response.status === "success"){
                        toast.success(response.message);
                        document.getElementById("emailID").value = "";
                        document.getElementById("name").value = "";
                        document.getElementById("userName").value = "";
                        document.getElementById("password").value = "";     
                    }
                    else{
                        toast.error(response.message);
                    }
                }
            }
        }
    }
    handleReset () {
        document.getElementById("emailID").value = "";
        document.getElementById("name").value = "";
        document.getElementById("userName").value = "";
        document.getElementById("password").value = "";  
      };

    render() { 
        return ( 
            <>
                <Toaster/>
                <input className="logipage__text" type="text" placeholder="Enter Email" id="emailID" />
                <input className="logipage__text" type="text" placeholder="Full Name" id="name" />
                <input className="logipage__text" type="text" placeholder="Username" id="userName" />
                <input className="logipage__text" type="password" placeholder="Password" id="password" />
                <button className="login__button" onClick={this.sendSignupRequest}>Sign up</button>
            </>
         );
    }
}
 
export default SignUp;