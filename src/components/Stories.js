import "../styles/stories.scss";
import Story from "./Story";
import uploadimage from "../images/statusadd.png";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useEffect, useState } from "react";
// import toast,{Toaster} from 'react-hot-toast';
import toast, { Toaster } from 'react-hot-toast';
// import HorizontalScroll from "react-horizontal-scrolling";

const BASE_URL = process.env.REACT_APP_DJANGO_URL;


function Stories() {

  const [stories,setStories] = useState([]);
  const [openS, setOpenS] = React.useState(false);
  const [filenameS,setFileNameS] = useState();

  const handleClickOpenS = () => {
    setOpenS(true);
  };

  const handleClose = () => {
    document.getElementById("storyimage").value = "";
    setFileNameS("");
    setOpenS(false);
  };

  function send_story(){
    //send story
    document.getElementById("cancelBtn").disabled = true;
    document.getElementById("storyBtn").disabled = true;
    document.getElementById("storyBtn").style.backgroundColor = "grey";
    var username = localStorage.getItem("users").replaceAll('"','');
    var formData = new FormData();
    formData.append("username", username);
    formData.append("image", document.getElementById("storyimage").files[0]);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", BASE_URL + "store_story/", true);
    xhr.send(formData);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            response = JSON.parse(response);        //contains 'status' and 'message'
            console.log(response);          //response from server
            if(response.status === "success"){
              handleClose();
              console.log(response.message);
              toast.success(response.message);
              window.location.reload();
            }
            else{
              toast.error("Something went wrong");
            }
        }
      document.getElementById("cancelBtn").disabled = true;
      document.getElementById("storyBtn").disabled = true;
    }
  }
  function get_stories(){
    //get stories of user and followers
    var username = localStorage.getItem("users").replaceAll('"','');
    var xhr = new XMLHttpRequest();
    xhr.open("POST", BASE_URL + "fetch_stories/", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send("username=" + username);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            console.log("STORIES LIST : "+response);          //response from server
            response = JSON.parse(response);        //contains 'status' and 'message'
            setStories(response);
        }
    }
  }
useEffect(() => {
  get_stories();
},[])


  return (
    <>
      <div className="stories">
        <div className="fileupload">
            {/* <label htmlFor="file-upload-status" > */}
                <img className="statusbar__upload" src={uploadimage} width="55px" height="55px" onClick={handleClickOpenS} alt="" />
            {/* </label>
                <input id="file-upload-status" type="file"/> */}
        </div>
        <Dialog open={openS} onClose={handleClose}>
          <DialogTitle>Share your story</DialogTitle>
          <DialogContent>
            <input style={{ display: 'none' }} accept="image/*" id={'storyimage'} type="file" onChange={(e)=>{setFileNameS(e.target.value)}}/>
              <label htmlFor={'storyimage'}>
                <Button component="span" size="small" style={{backgroundColor:'blueviolet',color:'white'}}>
                  Select a photo
                </Button>
                <h6>{filenameS}</h6>
              </label>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} id="cancelBtn">Cancel</Button>
            <Button onClick={send_story} id="storyBtn" style={{backgroundColor:'purple',color:'white'}}>Post</Button>
          </DialogActions>
        </Dialog>
        {
            stories?.map((item)=>(
              <a href={"storyOf/"+item.username} className="anchorStory">
                <Story accountName={item.username} imagePath={item.imagePath}/>
              </a>
            ))
        }
        {/* <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story /> */}
      </div>
    </>
  );
}

export default Stories;
