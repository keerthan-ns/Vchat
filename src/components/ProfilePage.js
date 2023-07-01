import React, { useEffect, useState } from "react";
import "../styles/ProfilePage.css";
import "../styles/ProfilePage.scss";
import NavBar from './Navigation';
import toast,{Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import noPost from "../images/no_post.png";
import dummy from "../images/user.png";
import Loader from "./Loader";

const BASE_URL = process.env.REACT_APP_DJANGO_URL;

function ProfilePage() {

    const [profile,setProfile] = useState([]);
    const [myposts,setMypost] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [loading , setLoading] = useState(true)
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [checked, setChecked] = useState(false);

    const switchHandler = (event) => {
        setChecked(event.target.checked);
        if(event.target.checked){
            change_to_private();
            
        }
        else{
            change_to_public();
            
        }
    };
    const navigate = useNavigate();

    function change_to_private(){
        //change to private
        var username = localStorage.getItem("users").replaceAll('"','');
        var xhr = new XMLHttpRequest();
        xhr.open("POST", BASE_URL + "change_to_private/", true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send("username=" + username);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = xhr.responseText;//response from server
                response = JSON.parse(response);        
                if(response.status === "success"){
                    profile.type = 'private';
                    toast.success("Your account is now private");  
                    handleClose();
                }
                else{
                    toast.error("Failed to update");
                }
            }
        }
    }

    function change_to_public(){
        //change to public
        var username = localStorage.getItem("users").replaceAll('"','');
        var xhr = new XMLHttpRequest();
        xhr.open("POST", BASE_URL + "change_to_public/", true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send("username=" + username);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = xhr.responseText; //response from server
                response = JSON.parse(response); 
                if(response.status === "success"){
                    profile.type = 'public';
                    toast.success("Your account is now public");
                    handleClose();  
                }
                else{
                    toast.error("Failed to update");
                }
            }
        }
    }

    function get_profile(){
        //get profile
        var username = localStorage.getItem("users").replaceAll('"','');
        var xhr = new XMLHttpRequest();
        xhr.open("POST", BASE_URL + "fetch_profile/", true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send("username=" + username);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = xhr.responseText;
                response = JSON.parse(response);
                setProfile(response);
                setChecked(response.type==='private' ? true : false)
                getmyposts();
                get_image(response.username,"profileDP",response.imagePath);
            }
        }
    }

    function get_image(uname,cid,image_pathh){
        //get image
        var username = localStorage.getItem("users").replaceAll('"','');
        if(image_pathh !== undefined){
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
                    document.getElementById(cid).src = image_source;         
                }
            }
        }
    }

    const sendLogoutRequest=()=>{
        //send logout request
          var username = localStorage.getItem("users").replaceAll('"','');
          var xhr = new XMLHttpRequest();
          xhr.open("POST", BASE_URL + "logout/", true);
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          xhr.send("username=" + username);
          xhr.onreadystatechange = function(){
              if (xhr.readyState === 4 && xhr.status === 200) {
                  var response = xhr.responseText;
                  response = JSON.parse(response);
                  if(response.status === "success"){
                      localStorage.clear();
                      navigate('/');
                      toast.success(response.message);
                    
                }
                else{
                    toast.error(response.message);
                }        
              }
          }
    }

    function update_bio(){
        //update bio
        var username = localStorage.getItem("users").replaceAll('"','');
        var bio = document.getElementById("bio").value;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", BASE_URL + "update_bio/", true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send("username=" + username + "&bio=" + bio);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = xhr.responseText;
                response = JSON.parse(response);        //contains 'status' and 'message'
                if(response.status === "success"){
                    toast.success("Bio updated successfully");
                    profile.bio = bio;
                    handleClose();
                }
                else{
                    toast.error("Failed to update");
                }
            }
        }
    }

    function update_profile_pic(){
        //update profile pic
        var username = localStorage.getItem("users").replaceAll('"','');
        var formData = new FormData();
        formData.append("username", username);
        formData.append("image", document.getElementById("uploadDP").files[0]);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", BASE_URL + "update_profile_pic/", true);
        xhr.send(formData);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = xhr.responseText;
                response = JSON.parse(response); 
                if(response.status === "success"){
                    toast.success("DP updated successfully");
                    window.location.reload();
                }
                else{
                    toast.error("Failed to update");
                }
            }
        }
    }

    function getmyposts(){
        //get top 10 posts of user
        var username = localStorage.getItem("users").replaceAll('"','');
        var xhr = new XMLHttpRequest();
        xhr.open("POST", BASE_URL + "fetch_my_posts/", true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send("username=" + username);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = xhr.responseText;
                // ****** for getting image use get_image function ******
                response = JSON.parse(response); 
                setMypost(response);
                setLoading(false)
            }
        }
    }

    useEffect(() => {
    setLoading(true)
    get_profile();
    },[]);
    if(loading){
    return(<><NavBar/> <Loader/></>)
    }
    return (
        <>
            <Toaster/>
            <NavBar/>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Cutomise your profile</DialogTitle>
                <DialogContent>
                    <div>
                        <input style={{ display: 'none' }} accept="image/*" id={'uploadDP'} type="file" />
                        <label htmlFor={'uploadDP'}>
                            <Button component="span" size="small" style={{color:'blueviolet',border:'0.1rem  solid darkblue'}}>Select a photo</Button>
                        </label>
                        <Button component="span" size="small" style={{backgroundColor:'blueviolet',color:'white',float:"right"}} onClick={update_profile_pic}>Upload</Button>
                    </div>
                    <hr/>
                    <div>
                        <TextField autoFocus margin="dense" id="bio" label="Edit your bio here" fullWidth variant="standard" />
                        <Button component="span" size="small" style={{color:'blueviolet'}} onClick={update_bio}>Update bio</Button>
                    </div>
                    <hr/>
                    <div>
                        <FormControlLabel control={<Switch checked={checked} onChange={switchHandler}/>} label={profile.type} />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
                <header>
                    <input type='text' value={profile._id} id="profileid" hidden/>
                    <div className="Profile_container">
                        <div className="Profile_profile">
                            <div className="Profile_profile-image">
                                <img src={dummy} alt="" id="profileDP" style={{border:'3px solid darkblue'}}/>
                            </div>
                            <div className="Profile_profile-user-settings">
                                <h1 className="Profile_profile-user-name">{profile.username}</h1>
                                <button className="Profile_btn Profile_profile-edit-btn" onClick={handleClickOpen}>Edit Profile</button>
                                <button className="Profile_btn Profile_profile-logout-btn" onClick={sendLogoutRequest} alt="Logout" ></button>
                            </div>
                            <div className="Profile_profile-stats">
                                <ul>
                                    <li><span className="Profile_profile-stat-count">{profile.posts_count}</span> posts</li>
                                    <li><span className="Profile_profile-stat-count">{profile.follower_count}</span> followers</li>
                                    <li><span className="Profile_profile-stat-count">{profile.following_count}</span> following</li>
                                </ul>
                            </div>
                            <div className="Profile_profile-bio">
                                <p><span className="Profile_profile-real-name">{profile.fullname}</span><br/> {profile.bio}</p>
                            </div>
                        </div>
                    </div>
                </header>
                
                {(myposts.length !== 0)?(<section className="grid">
                    {
                        myposts?.map((item,index)=>(
                            <div key={(item._id).toString()}>
                                <img id={item._id} src={get_image(profile.username,item._id,item.imagePath)} className='grid__photo' alt="" />
                            </div>
                        ))
                    }</section>):
                    (<section className="nopost">
                        <img src={noPost} className='nopost__nophoto' alt="" />
                    </section>)
                }
        </>
    )
}
export default ProfilePage;
