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
            response = JSON.parse(response);     
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
      </div>
      {
        suggestions?.map((item,index)=>(
            <div key={index}><Profile  username={item.username} profileImagePath={item.imagePath} urlText="View" iconSize="medium" viewIcon="true"/>
            <hr/>
            </div>
        ))
      }
    </div>
  );
}

export default Suggestions;
