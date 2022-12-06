import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import toast,{Toaster} from 'react-hot-toast';
import NavBar from './Navigation';
import "../styles/UserPage.css";
import "../styles/ProfilePage.scss";
import noPost from "../images/no_post.png";
import accPrivate from "../images/acc_private.png";
import { Button} from "@material-ui/core";
import dummy from "../images/user.png";

const BASE_URL = process.env.REACT_APP_DJANGO_URL;

function User() {
    let {username} = useParams();
    const [profile,setProfile] = useState([]);
    const [userposts,setUserPosts] = useState([]);

    function get_userProfile(){
      //get profile
      var usern1 = localStorage.getItem("users").replaceAll('"','');
      var usern2 = username;//to be fetched
      var xhr = new XMLHttpRequest();
      xhr.open("POST", BASE_URL + "get_user_info/", true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send("username=" + usern1 + "&username2=" + usern2);
      xhr.onreadystatechange = function(){
          if (xhr.readyState === 4 && xhr.status === 200) {
              var response = xhr.responseText;
              // console.log(response);          //response from server
              // ***** for profile pic use get_image() function *****
              response = JSON.parse(response); 
              console.log("USER INFORMATION");
              console.log(response);
              get_image(response.username,"profileDP",response.imagePath);
              setProfile(response);
              if(response.type=== "public" || response.follow_status==="accepted")
                getuserposts();

              console.log("USER POST : "+userposts);
          }
      }
  }

  function getuserposts(){
    //get top 10 posts of user
    var usern = username;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", BASE_URL + "fetch_my_posts/", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send("username=" + usern);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            console.log(response);          //response from server
            // ****** for getting image use get_image function ******
            response = JSON.parse(response); 
            setUserPosts(response);
            // console.log(myposts);
        }
    }
  }

  function get_image(uname,cid,image_pathh){
      //get image
      var usern = username;
      // var username = "test2";
      // var image_path = document.getElementById("image_path").value;
      // console.log(uname+" "+username);
      console.log(image_pathh);
      if(image_pathh !== undefined){
        var image_path = image_pathh;
        var image_extension = image_pathh.split('.').pop();
        var xhr = new XMLHttpRequest();
        xhr.open("POST", BASE_URL + "get_image/", true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.overrideMimeType('text/plain; charset=x-user-defined');                 //added line: for binary data
        xhr.send("username=" + usern + "&imagePath=" + image_path);
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
    
                // console.log(image_source);          //response from server
                document.getElementById(cid).src = image_source;       //for displaying image
                
                // return image_source;
    
            }
        }
      }
  }

  function unfollow(){
    //unfollow
    var usern1 = localStorage.getItem("users").replaceAll('"','');
    var usern2 = username;//to be fetched
    var xhr = new XMLHttpRequest();
    xhr.open("POST", BASE_URL + "unfollow/", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send("username=" + usern1 + "&unfollow_username=" + usern2);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            console.log(response);          //response from server
            response = JSON.parse(response);        //contains 'status' and 'message'
            if(response.status === "success"){
              toast.success("Unfollow completed");  
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

  function send_follow_request(){
    //send follow request
    var usern1 = localStorage.getItem("users").replaceAll('"','');
    var usern2 = username;//to be fetched
    var xhr = new XMLHttpRequest();
    xhr.open("POST", BASE_URL + "follow_request/", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send("username=" + usern1 + "&follow_username=" + usern2);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            console.log(response);          //response from server
            response = JSON.parse(response);        //contains 'status' and 'message'
            if(response.status === "success"){
              toast.success("Follow request sent");  
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

  useEffect(() => {
    get_userProfile(); 
  },[]);

  return (
    <>
        <Toaster/>
        <NavBar/>
        <header>
            <input type='text' value={profile._id} id="profileid" hidden/>
            <div className="User_container">
                <div className="User_profile">
                    <div className="User_profile-image">
                        <img src={dummy} alt="" id="profileDP" style={{border:'3px solid darkblue'}}/>
                    </div>
                    <div className="User_profile-user-settings">
                      <div className="User_profile-bio">
                          <span className="User_profile-user-name" style={{margin:'10px 0'}}>{username}</span><br/>
                          <p>
                            <span className="User_profile-real-name">{profile.fullname}</span><br/> {profile.bio}
                          </p>
                      </div>
                    </div>
                    <div className="User_profile-stats">
                        <ul>
                            <li><span className="User_profile-stat-count">{profile.posts_count}</span> posts</li>
                            <li><span className="User_profile-stat-count">{profile.follower_count}</span> followers</li>
                            <li><span className="User_profile-stat-count">{profile.following_count}</span> following</li>
                        </ul>
                    </div>
                    
                    <div className="User_profile-user-settings">
                        {
                          (profile.follow_status === "pending")?(
                            <button className="User_btn User_profile-edit-btn customBtn" onClick={null}>Requested</button>):null
                        }
                        {
                          (profile.follow_status === "accepted")?(
                            <button className="User_btn User_profile-edit-btn customBtn" onClick={unfollow}>Unfollow</button>):null
                        }
                        {
                          (profile.follow_status === "rejected" || profile.follow_status === "follow request not sent" || profile.follow_status === "unfollowed")?(
                          <button className="User_btn User_profile-edit-btn customBtn" onClick={send_follow_request}>Follow</button>):null
                        }
                    </div>
                </div>
            </div>
        </header>
        <hr className="horiLine"/>
        {(profile.type === "public" || profile.follow_status === "accepted")?(
          (userposts.length !== 0) ? (<section className="grid">
              {
                  userposts?.map((item,index)=>(
                      <div key={(item._id).toString()}>
                          <img id={item._id} src={get_image(profile.username,item._id,item.imagePath)} className='grid__photo' alt="" />
                      </div>
                  ))
              }
              </section>)
            :(
                <section className="nopost">
                  <div className='nopost__nophoto'/>
                  <img src={noPost} className='nopost__nophoto' alt="" />
                  <div className='nopost__nophoto'/>
                </section>
            )
        ):null}
        {(profile.type === "private" && (profile.follow_status === "rejected" || profile.follow_status === "follow request not sent"  || profile.follow_status === "unfollowed" || profile.follow_status === "pending") )?(
                <section className="nopost">
                  {/* <div className='nopost__nophoto'/> */}
                  <img src={accPrivate} className='nopost__nophoto' alt="" />
                  {/* <div className='nopost__nophoto'/> */}
                </section>
            ):null}
    </>
  )
}

export default User