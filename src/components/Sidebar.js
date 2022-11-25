import React, { useEffect, useState } from "react";
import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "../images/profile.jpg";

const BASE_URL = process.env.REACT_APP_DJANGO_URL;

function Sidebar() {

  const [profileImagePath,setProfile] = useState();
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
              // get_image(response.username,"profileDP",response.imagePath);
              setProfile(response.imagePath);
              // setChecked(response.type==='private' ? true : false)
              // getmyposts();
          }
      }
  }

  useEffect(() => {
    get_profile();
  }, [])
  

  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
        <Profile
          username= {localStorage.getItem("users").replaceAll('"','')}
          caption= {localStorage.getItem("users").replaceAll('"','')}
          urlText="View"
          iconSize="big"
          // image={image}
          profileImagePath={localStorage.getItem("profileimage")}
        />
        <Suggestions />
        <Footer />
      </div>
    </Sticky>
  );
}

export default Sidebar;
