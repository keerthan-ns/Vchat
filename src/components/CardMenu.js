import "../styles/cardMenu.scss";
import { ReactComponent as Inbox } from "../images/inbox.svg";
// import { ReactComponent as Notifications } from "../images/notifications.svg";
import { ReactComponent as Heart } from "../images/heart.svg";
import { ReactComponent as Liked } from "../images/liked.svg";
import { useState } from "react";
import toast,{Toaster} from 'react-hot-toast';

const BASE_URL = process.env.REACT_APP_DJANGO_URL;

function CardMenu(props) {
  const [cid,setCid] = useState(props.cid);
  const [liked,setLiked] =useState( props.liked);
    function likepost(){
      //like post
      var username = document.getElementById("username6").value;
      // var post_id = document.getElementById("post_id").value;
      var post_id = cid;
      var xhr = new XMLHttpRequest();
      xhr.open("POST", BASE_URL + "like_post/", true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send("username=" + username + "&post_id=" + post_id);
      xhr.onreadystatechange = function(){
          if (xhr.readyState === 4 && xhr.status === 200) {
              var response = xhr.responseText;
              console.log(response);          //response from server
              response = JSON.parse(response);        //contains 'status' and 'message'
              if(response.status === "success"){
                toast.success("You liked the post");
                toast.success(response.message);
                window.location.reload();
              }
              else{
                toast.error(response.message);
              }
          }
      }
  }
  return (
    <div className="cardMenu">
      <Toaster/>
      <div className="interactions">
      {liked ? <Liked className="icon heart"/> : <Heart className="icon heart" onClick={likepost}/>}
        {/* <Heart className="icon heart" onClick={likepost}/> */}
        <Inbox className="icon" />
      </div>
    </div>
  );
}

export default CardMenu;
