import React, { useEffect, useState } from "react"
import "../styles/suggestions.scss"
import Profile from "./Profile"

const BASE_URL = process.env.REACT_APP_DJANGO_URL;

function Suggestions() {

  const [suggestions,setSuggestions] = useState([]);

  function recommendations(){
    //get recommendations
    var username = localStorage.getItem("users").replaceAll('"','');
    var xhr = new XMLHttpRequest();
    xhr.open("POST", BASE_URL + "recommendations/", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send("username=" + username);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            // console.log(response);          //response from server
            response = JSON.parse(response);        //contains 'status' and 'message'
            // console.log("Suggestions");
            // console.log(response);
            setSuggestions(response);
        }
    }
  }
  useEffect(() => {
    recommendations();
  }, []);

  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">Suggestions For You</div>
        {/* <a href="/">See All</a> */}
      </div>
      {
        suggestions?.map((item,index)=>(
            <div key={index}><Profile  username={item.username} profileImagePath={item.imagePath} urlText="View" iconSize="medium" viewIcon="true"/>
            <hr/>
            </div>
        ))
      }
      {/* <Profile
        caption="Followed by mapvault + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Followed by dadatlacak + 1 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Follows you"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Followed by dadatlacak + 7 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Followed by mapvault + 4 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      /> */}
    </div>
  );
}

export default Suggestions;
