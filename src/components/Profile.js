import "../styles/profile.scss";
import ProfileIcon from "./ProfileIcon";
import users from "../data/users";
import { Button,IconButton  } from "@material-ui/core";
import View from '@material-ui/icons/Visibility';
import Accept from '@material-ui/icons/PersonAdd';
import toast,{Toaster} from 'react-hot-toast';

const BASE_URL = process.env.REACT_APP_DJANGO_URL;
function Profile(props) {
  const {
    username,
    caption,
    urlText,
    iconSize,
    viewIcon,
    acceptIcon,
    storyBorder,
    hideAccountName,
    profileImagePath,
  } = props;

  function accept_follow_request(uname){
    //accept follow request
    // console.log("Clicked me");
    // console.log(uname);
    var username2 = uname;
    var username = localStorage.getItem("users").replaceAll('"','');
    var xhr = new XMLHttpRequest();
    xhr.open("POST", BASE_URL + "accept_follow_request/", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send("username=" + username + "&follow_username=" + username2);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            console.log(response);          
            response = JSON.parse(response);      
            if(response.status === "success"){
              toast.success("Follow request accepted");
              setTimeout(() => {
                window.location.reload();
              }, 2000);
              
            }  
            else{
              toast.error(response.message);
            }  
        }
    }
  }

  return (
    <div className="profile">
      <Toaster/>
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
      {/* <a href={"user/"+username} >{urlText}</a> */}
      {viewIcon ?
        (<Button href={"user/"+username} size="small" variant="contained" color="primary">View</Button>):(null)
      }
      {acceptIcon ?
        (<Button id={username} onClick={()=>accept_follow_request(username)}  size="small" color="primary"><Accept/></Button>):(null)
      }
      {/* {viewIcons ?
        (<Button href={"user/Addfriend"} size="small" color="primary"><Accept/></Button>):(null)
      } */}
      
      
    </div>
  );
}

export default Profile;
