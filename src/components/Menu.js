import { useEffect } from "react";
import "../styles/menu.scss";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as Explore } from "../images/explore.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";
import dummy from "../images/user.png";

const BASE_URL = process.env.REACT_APP_DJANGO_URL;

function Menu() {
    function get_profile(){
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
                localStorage.setItem("profileimage",response.imagePath);
                get_image(response.imagePath);
            }
        }
      },5000);
    }

    function get_image(image_pathh){
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
  });
  
  return (
    <div className="menu">
      <a href="/home" id="homeA"><Home className="icon" id="homeC"/></a>
      <a href="/messages" id="messageA"><Inbox className="icon" id="messageC"/></a>
      <a href="/explore" id="exploreA"><Explore className="icon" id="exploreC" /></a>
      <a href="/notifications" id="notiA"><Notifications className="icon" id="notiC" /></a>
      <a href="/profile"><img className="profileIcon small" src={dummy} id="menuProfile" alt="profile" /></a>
    </div>
  );
}

export default Menu;
