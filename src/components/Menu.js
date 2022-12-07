import { useEffect, useState } from "react";
import "../styles/menu.scss";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as Explore } from "../images/explore.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";
import ProfileIcon from "./ProfileIcon";
import image from "../images/profile.jpg";
import dummy from "../images/user.png";

const BASE_URL = process.env.REACT_APP_DJANGO_URL;

function Menu() {

  // const [profileImagePath,setProfileImagePath] = useState("");

    function get_profile(){
      //get profile
      setTimeout(()=>{
        var username = localStorage.getItem("users").replaceAll('"','');
        var xhr = new XMLHttpRequest();
        xhr.open("POST", BASE_URL + "fetch_profile/", true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send("username=" + username);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = xhr.responseText;
                response = JSON.parse(response); 
                // console.log("Image from menu:"+response.imagePath);
                // setProfileImagePath(response.imagePath);
                localStorage.setItem("profileimage",response.imagePath);
                get_image(response.imagePath);
                // return response.imagePath;
            }
        }
      },5000);
    }

    function get_image(image_pathh){
      //get image
      // var username = "test2";
      // var image_path = document.getElementById("image_path").value;
      // console.log(uname+" "+username);
      // console.log(image_pathh);
      if(image_pathh !== undefined){
        var username = localStorage.getItem("users").replaceAll('"','');
        var image_path = image_pathh;
        var image_extension = image_pathh.split('.').pop();
        var xhr = new XMLHttpRequest();
        xhr.open("POST", BASE_URL + "get_image/", true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.overrideMimeType('text/plain; charset=x-user-defined');    
        xhr.send("username=" + username + "&imagePath=" + image_path);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 && xhr.status === 200) {
                // // var response = xhr.responseText;
                var binary = "";
                var responseText = xhr.responseText;
                var responseTextLen = responseText.length;
    
                for (let i = 0; i < responseTextLen; i++ ) {
                    binary += String.fromCharCode(responseText.charCodeAt(i) & 255);
                }
                var image_source = 'data:image/' + image_extension + ';base64,' + btoa(binary);
                document.getElementById("menuProfile").src = image_source;
            }
        }
      }
    }
    
  useEffect(() => {
    get_profile();
  },[]);
  
  return (
    <div className="menu">
      <a href="/home" id="homeA"><Home className="icon" id="homeC"/></a>
      <a href="/messages" id="messageA"><Inbox className="icon" id="messageC"/></a>
      <a href="/explore" id="exploreA"><Explore className="icon" id="exploreC" /></a>
      <a href="/notifications" id="notiA"><Notifications className="icon" id="notiC" /></a>
      {/* <a href="/profile"><ProfileIcon className="profileIcon" iconSize="small" image={profileImagePath} /></a> */}
      <a href="/profile"><img className="profileIcon small" src={dummy} id="menuProfile" alt="profile" /></a>
    </div>
  );
}

export default Menu;
