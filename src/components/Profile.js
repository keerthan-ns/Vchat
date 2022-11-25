import "../styles/profile.scss";
import ProfileIcon from "./ProfileIcon";
import users from "../data/users";

const BASE_URL = process.env.REACT_APP_DJANGO_URL;
function Profile(props) {
  const {
    username,
    caption,
    urlText,
    iconSize,
    // captionSize,
    storyBorder,
    hideAccountName,
    profileImagePath,
  } = props;

  // let accountName = username
  //   ? username
  //   : users[Math.floor(Math.random() * users.length)].username;
  // function get_profile(){
  //   //get profile
  //   var uname = username;
  //   var xhr = new XMLHttpRequest();
  //   xhr.open("POST", BASE_URL + "fetch_profile/", true);
  //   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  //   xhr.send("username=" + uname);
  //   xhr.onreadystatechange = function(){
  //       if (xhr.readyState === 4 && xhr.status === 200) {
  //           var response = xhr.responseText;
  //           response = JSON.parse(response); 
  //           // setImagePath(response.imagePath);
  //           // get_image(response.imagePath);
  //           console.log(response);
  //           return response.imagePath;
  //       }
  //   }
  // }

  // function get_image(image_pathh){
  //   //get image
  //   // var username = "null";
  //   var username = "test2";
  //   // var image_path = document.getElementById("image_path").value;
  //   // console.log(uname+" "+username);
  //   if(image_pathh === undefined)
  //     image_pathh = "5a4457a2-ce51-4ee8-b6ca-4466ceea98a7.png";
  //   console.log("OFF no use :"+image_pathh);
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

  return (
    <div className="profile">
      <ProfileIcon
        iconSize={iconSize}
        storyBorder={storyBorder}
        // image={get_profile()}
        profileImagePath={profileImagePath}
      />
      {(username || caption) && !hideAccountName && (
        <div className="textContainer">
          <span className="accountName">{username}</span>
          {/* <span className={`caption ${captionSize}`}>{caption}</span> */}
        </div>
      )}
      {/* {(accountName || caption) && !hideAccountName && (
        <div className="textContainer">
          <span className="accountName">{accountName}</span>
        </div>
      )} */}
      {/* <button onClick={navto}>{urlText}</button> */}
      <a href="/profile">{urlText}</a>
    </div>
  );
}

export default Profile;
