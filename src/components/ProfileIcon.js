import { useEffect,useState } from "react";
import "../styles/profileIcon.scss";
import dummy from "../images/user.png";

const BASE_URL = process.env.REACT_APP_DJANGO_URL;

function ProfileIcon(props) {
  const { iconSize, storyBorder, profileImagePath } = props;
  const [imgSrc,setImgSrc] = useState("");

  // function getRandomInt(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  // let randomId = getRandomInt(1, 70);

  // let profileImage = image
  //   ? image
  //   : `https://i.pravatar.cc/150?img=${randomId}`;
  
  // let profileImage = image? image : `/static/media/profile.8806fe59.jpg`;

  // const [imagePath,setImagePath] = useState(null);
    // function get_profile(){
    //   //get profile
    //   var username = localStorage.getItem("users").replaceAll('"','');
    //   var xhr = new XMLHttpRequest();
    //   xhr.open("POST", BASE_URL + "fetch_profile/", true);
    //   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //   xhr.send("username=" + username);
    //   xhr.onreadystatechange = function(){
    //       if (xhr.readyState === 4 && xhr.status === 200) {
    //           var response = xhr.responseText;
    //           response = JSON.parse(response); 
    //           // setImagePath(response.imagePath);
    //           get_image(response.imagePath);
    //       }
    //   }
    // }
    
    // function get_image(image_pathh){
    //   //get image
    //   // var username = "null";
    //   var username = "test2";
    //   // var image_path = document.getElementById("image_path").value;
    //   // console.log(uname+" "+username);
    //   // if(image_pathh === undefined)
    //   //   image_pathh = "5a4457a2-ce51-4ee8-b6ca-4466ceea98a7.png";
    //   console.log("OFF no use :"+image_pathh);
    //   setImgSrc(image_pathh);
    //   var image_path = image_pathh;
    //   var image_extension = image_pathh.split('.').pop();
    //   var xhr = new XMLHttpRequest();
    //   xhr.open("POST", BASE_URL + "get_image/", true);
    //   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //   xhr.overrideMimeType('text/plain; charset=x-user-defined');                 //added line: for binary data
    //   xhr.send("username=" + username + "&imagePath=" + image_path);
    //   xhr.onreadystatechange = function(){
    //       if (xhr.readyState === 4 && xhr.status === 200) {
    //           // // var response = xhr.responseText;
    //           var binary = "";
    //           var responseText = xhr.responseText;
    //           var responseTextLen = responseText.length;
  
    //           for (let i = 0; i < responseTextLen; i++ ) {
    //               binary += String.fromCharCode(responseText.charCodeAt(i) & 255);
    //           }
    //           var image_source = 'data:image/' + image_extension + ';base64,' + btoa(binary);
  
    //           // console.log(image_source);          //response from server
    //           // document.getElementById('profilepic').src = image_source;       
    //           return image_source;
  
    //       }
    //   }
    // }

    function get_image(image_pathh){
      setTimeout(()=>{
        if(image_pathh !== undefined){
          var username = "test2";
          console.log("OFF no use :"+image_pathh);
          console.log("type"+typeof(image_pathh));
          var image_path = image_pathh;
          var image_extension = image_pathh.split('.').pop();
          var xhr = new XMLHttpRequest();
          xhr.open("POST", BASE_URL + "get_image/", true);
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          xhr.overrideMimeType('text/plain; charset=x-user-defined');                 //added line: for binary data
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
                  
                  if(image_source !== "data:image/;base64,eyJzdGF0dXMiOiAiZXJyb3IiLCAibWVzc2FnZSI6ICJObyBpbWFnZSBmb3VuZCJ9")
                    setImgSrc(image_source);
                  // return image_source;
      
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
      {/* <img
        className={`profileIcon ${iconSize}`}
        // src={profileImagePath}
        src={get_image(profileImagePath)}
        id="profilepic"
        alt="profile"
      /> */}
      {/* {imgSrc && <img
        className={`profileIcon ${iconSize}`}
        src={imgSrc}
        id="profilepic"
        alt="profile"
      />} */}
      {imgSrc ? (<img className={`profileIcon ${iconSize}`} src={imgSrc} id="profilepic" alt="profile" />
      ) : (
        <img className={`profileIcon ${iconSize}`} src={dummy} id="profilepic" alt="profile" />
      )}
    </div>
  );
}

export default ProfileIcon;
