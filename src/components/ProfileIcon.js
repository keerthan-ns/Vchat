import { useEffect,useState } from "react";
import "../styles/profileIcon.scss";
import dummy from "../images/user.png";

const BASE_URL = process.env.REACT_APP_DJANGO_URL;

function ProfileIcon(props) {
  const { iconSize, storyBorder, profileImagePath } = props;
  const [imgSrc,setImgSrc] = useState("");

    function get_image(image_pathh){
      setTimeout(()=>{
        if(image_pathh !== undefined && image_pathh !== null){
          var username = "test2";
          var image_path = image_pathh;
          var image_extension = image_pathh.split('.').pop();
          var xhr = new XMLHttpRequest();
          xhr.open("POST", BASE_URL + "get_image/", true);
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          xhr.overrideMimeType('text/plain; charset=x-user-defined');                 //added line: for binary data
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
                  
                  if(image_source !== "data:image/;base64,eyJzdGF0dXMiOiAiZXJyb3IiLCAibWVzc2FnZSI6ICJObyBpbWFnZSBmb3VuZCJ9")
                    setImgSrc(image_source);
      
              }
          }
        }
      },5000);
    }

  useEffect(() => {
    get_image(profileImagePath);
  } )
  
  return (
    <div className={storyBorder ? "storyBorder" : "profileBorder"}>
      {imgSrc ? (<img className={`profileIcon ${iconSize}`} src={imgSrc} id="profilepic" alt="profile" />
      ) : (
        <img className={`profileIcon ${iconSize}`} src={dummy} id="profilepic" alt="profile" />
      )}
    </div>
  );
}

export default ProfileIcon;
