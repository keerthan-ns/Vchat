import NavBar from './Navigation'
import '../styles/explore.scss'
import React, { useEffect, useState } from "react"
import Profile from "./Profile"
import { Toaster } from 'react-hot-toast'

const BASE_URL = process.env.REACT_APP_DJANGO_URL;

function Explore() {

    const [suggestions,setSuggestions] = useState([]);
    const [searched,setSearched] = useState([]);

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

    function search(){
        //search
        var username = localStorage.getItem("users").replaceAll('"','');
        var search = document.getElementById("search").value.trim();
        if(search!== null && /\S/.test(search)){
            var xhr = new XMLHttpRequest();
            xhr.open("POST", BASE_URL + "search/", true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send("username=" + username + "&search_string=" + search);
            xhr.onreadystatechange = function(){
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var response = xhr.responseText;
                    response = JSON.parse(response);        //contains 'status' and 'message'
                    setSearched(response);
                }
            }
        }
        else{
            setSearched([]);
        }
    }

    useEffect(() => {
        document.getElementById("search").value = "";
        recommendations();
    }, []);
  return (
    <>
        <Toaster/>
        <NavBar/>
        <div className='expPanel'>
            <div className="explore">
                <input text="text" className="expSearch" placeholder="Search for people" id="search" onChange={search}/>
                {
                    searched?.map((item,index)=>(
                        <div key={index}><Profile  username={item.username} profileImagePath={item.imagePath} urlText="View" iconSize="medium" viewIcon="true"/>
                        <hr/>
                        </div>
                    ))
                }
                <div className="expTitleContainer">
                    <div className="expTitle">Suggestions for you</div>
                </div>
                {
                    suggestions?.map((item,index)=>(
                        <div key={index}><Profile  username={item.username} profileImagePath={item.imagePath} urlText="View" iconSize="medium" viewIcon="true"/>
                        <hr/>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Explore