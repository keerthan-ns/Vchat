import React, { useEffect, useState } from "react";
import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";
import uploadImage from "../images/upload.png";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import toast,{Toaster} from 'react-hot-toast';


const BASE_URL = process.env.REACT_APP_DJANGO_URL;


function Cards() {

  const [posts,setPosts] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [filename,setFileName] = useState();
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    document.getElementById("uploadimage").value = "";
    setFileName("");
    setOpen(false);
  };

  function getPosts(){
    //get all posts
    var username = localStorage.getItem("users").replaceAll('"','');
    var xhr = new XMLHttpRequest();
    xhr.open("POST", BASE_URL + "fetch_posts/", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send("username=" + username);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText; 
            response = JSON.parse(response); 
            setPosts(response);
        }
    }
  }

  function sendpost(){
    //send post
    document.getElementById("cancelBtn").disabled = true;
    document.getElementById("postBtn").disabled = true;
    document.getElementById("postBtn").style.backgroundColor = "grey";
    var username = localStorage.getItem("users").replaceAll('"','');
    var caption = document.getElementById("caption").value;
    toast('Uploading post please wait..',
                {duration:2000}
            );

    var formData = new FormData();
    formData.append("image", document.getElementById("uploadimage").files[0]);
    formData.append("username", username);
    formData.append("caption", caption);
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", BASE_URL + "store_post/", true);
    xhr.send(formData);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            response = JSON.parse(response);    
            if(response.status === "success"){
              toast.success("Image posted");
              handleClose();
              window.location.reload();
            }
            else{
              toast.error("Something went wrong");
            }
        }
        document.getElementById("cancelBtn").disabled = false;
        document.getElementById("postBtn").disabled = false;
    }
  }  
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
    <Toaster/>
      <div className="cards">
        <Stories />
        <div className="file_container"> 
          <img className="uploadicon" src={uploadImage} alt="" onClick={handleClickOpen}/>
        </div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Upload a post</DialogTitle>
          <DialogContent>
            <input style={{ display: 'none' }} accept="image/*" id={'uploadimage'} type="file" onChange={(e)=>{setFileName(e.target.value)}}/>
              <label htmlFor={'uploadimage'}>
                <Button component="span" size="small" style={{backgroundColor:'blueviolet',color:'white'}}>
                  Select a photo
                </Button>
                <h6>{filename}</h6>
              </label>
            <TextField
              autoFocus
              margin="dense"
              id="caption"
              label="Enter a caption"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} id="cancelBtn">Cancel</Button>
            <Button onClick={sendpost} id="postBtn" style={{backgroundColor:'purple',color:'white'}}>Post</Button>
          </DialogActions>
        </Dialog>
        {
            posts?.map((item)=>(
              <Card key={(item._id).toString()} cid={item._id} accountName={item.userId} image={item.imagePath} liked={item.liked} likedByNumber={item.likes} caption={item.caption} hours={item.postedAt} profileImagePath={item.profileImagePath}/>
            ))
        }
      </div>
    </>
  );
}

export default Cards;
