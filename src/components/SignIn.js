import React from 'react'
import "../styles/LoginPage.css"
import toast,{Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const BASE_URL = process.env.REACT_APP_DJANGO_URL;

function SignIn() {
    const navigate = useNavigate();
    const sendLoginRequest=()=>{
        //send user name and password by post request
        
        document.getElementById("login_btn").disabled = true;
        document.getElementById("login_btn").style.backgroundColor = "grey";
        var username = document.getElementById("username").value.trim();
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
                    localStorage.setItem("users",JSON.stringify(username));
                    navigate('/home');
                    
                }
                else if(response.status === "error"){
                    toast.error(response.message);
                    document.getElementById("login_btn").disabled = false;
                    document.getElementById("login_btn").style.backgroundColor = "#0395F6";
                }
            }
        }
    }
  return (
    <>
        <Toaster/>
        <input className="logipage__text" type="text" placeholder="Username, or email" id="username" />
        <input className="logipage__text" type="password" placeholder="Password" id="password"/>
        <button className="login__button" id="login_btn" onClick={sendLoginRequest}>Log In</button>
    </>
  )
}

export default SignIn