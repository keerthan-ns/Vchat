import React, { useEffect, useState } from "react";
import ReactInstaStories from 'react-insta-stories';
import { useNavigate, useParams } from 'react-router-dom'
import Loader from "./Loader";

const BASE_URL = process.env.REACT_APP_DJANGO_URL;

function UStory() {
    let {username} = useParams();
    const [loading , setLoading] = useState(true)
    const [userStories,setUserStories] = useState([]);
    const navigate = useNavigate();

    function get_user_stories() {
        //get stories of a particular user
        var usern = localStorage.getItem("users").replaceAll('"','');
        var usern2 = username;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", BASE_URL + "fetch_user_stories/", true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send("username=" + usern + "&username2=" + usern2);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = xhr.responseText;
                response = JSON.parse(response);
                setUserStories(response);
                setLoading(false)
            }
        }
    }
    function goBack(){
        navigate(-1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( () => {
        setLoading(true)
        get_user_stories();
      
    })
    if(loading){
        return <Loader/>
    }

    return (
        <div className="storyDiv">
            <ReactInstaStories
            stories={userStories}
            defaultInterval={2000}
            width={360}
            height={740}
            onAllStoriesEnd={goBack}
            />
        </div>
    );
}

export default UStory;
