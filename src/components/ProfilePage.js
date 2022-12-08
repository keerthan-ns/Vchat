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
                var response = xhr.responseText;
                console.log(response);          //response from server
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
                var response = xhr.responseText;
                console.log(response);          //response from server
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
                // console.log(response);          //response from server
                // ***** for profile pic use get_image() function *****
                response = JSON.parse(response); 
                console.log(response);
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
        console.log(image_pathh);
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

    const sendLogoutRequest=()=>{
        //send logout request
        //   var username = document.getElementById("username").value;
          var username = localStorage.getItem("users").replaceAll('"','');
        //   var username = "test2";
        //   var username = uname.toString;
        //   console.log(typeof username);
          var xhr = new XMLHttpRequest();
          xhr.open("POST", BASE_URL + "logout/", true);
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //   console.log("username=" + username); 
          xhr.send("username=" + username);
          xhr.onreadystatechange = function(){
              if (xhr.readyState === 4 && xhr.status === 200) {
                  var response = xhr.responseText;
                  console.log(response);          //response from server
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
            console.log(response);          //response from server
            response = JSON.parse(response);        //contains 'status' and 'message'
            if(response.status === "success"){
                toast.success("Bio updated successfully");
                profile.bio = bio;
                handleClose();
                // navigate('/profile');
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
                console.log(response);          //response from server
                response = JSON.parse(response); 
                if(response.status === "success"){
                    toast.success("DP updated successfully");
                    window.location.reload();
                    // setProfile(prevState => ({ profile: prevState.profile.map(el => (
                    //     el.document.getElementById('profileid').value ===? { ...el,imagePath } : el)) 
                    // }))
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
                console.log(response);          //response from server
                // ****** for getting image use get_image function ******
                response = JSON.parse(response); 
                setMypost(response);
                // console.log(myposts);
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
                    {/* <Button onClick={sendpost}>Update</Button> */}
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
                                {/* <a href="https://www.flaticon.com/free-icons/logout" title="logout icons">Logout icons created by Pixel perfect - Flaticon</a> */}
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
                    {/* <div>
                        <img src='https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1516893842880-5d8aada7ac05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1539108826694-1297410cdda9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1529690982439-df5e60eb5a3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1491056792553-4704d261e3ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1562138888-3d0a63b21dcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1568641134257-ab85695f67e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1545385095-f5a14a9160d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1547462713-a208daf9d997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1522586217274-9096ee38a805?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo' alt=""/>
                    </div>    */}
        </>
    )
}
export default ProfilePage;
