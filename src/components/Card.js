import "../styles/card.scss";
import Profile from "./Profile";
import CardMenu from "./CardMenu";
import { useState } from "react";

const BASE_URL = process.env.REACT_APP_DJANGO_URL;

function Card(props) {
  const {
    cid,
    storyBorder,
    image,
    accountName,
    liked,
    caption,
    hours,
    profileImagePath,
  } = props;

  const [likedByNumber,setLikedByNumber] = useState(props.likedByNumber);

  function get_image(cid,accountName,image_pathh){
    var username = accountName;
    var image_path = image_pathh;
    var image_extension = image_path.split('.').pop();
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
            document.getElementById(cid).src = image_source;       
        }
    }
  }

  function setParentLiked (change) {
    (change === "increment")?setLikedByNumber(likedByNumber+1):setLikedByNumber(likedByNumber-1);
  }

  return (
    <div className="card">
      <header>
        <Profile username={accountName} iconSize="medium" storyBorder={storyBorder} profileImagePath={profileImagePath}/>
      </header>
      <img id={cid} className="cardImage" src={get_image(cid,accountName,image)} alt="card content" />
      <CardMenu cid={cid} liked={liked} setParentLiked={setParentLiked}/>
      <div className="likedBy">
        <span>
          <strong>Total likes {likedByNumber}</strong><br/>
          {caption}
        </span>
      </div>
      <div className="timePosted">{hours}</div>
    </div>
  );
}

export default Card;
