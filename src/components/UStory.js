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
    // function get_user_stories(){
    //     //get stories of a particular user
    //     var uname = localStorage.getItem("users").replaceAll('"','');
    //     var uname2 = username;
    //     var xhr = new XMLHttpRequest();
    //     xhr.open("POST", BASE_URL + "fetch_user_stories/", true);
    //     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //     xhr.send("username=" + uname + "&username2=" + uname2);
    //     // xhr.send("username=" + uname);
    //     xhr.onreadystatechange = function(){
    //         if (xhr.readyState === 4 && xhr.status === 200) {
    //             var response = xhr.responseText;
    //             console.log(response);          //response from server
    //             response = JSON.parse(response);        //contains 'status' and 'message'
    //             setUserStories(response);
                
    //         }
    //         console.log(userStories);
    //     }
    // }

    // function get_image(image_pathh){
    //     //get image
    //     var usern = localStorage.getItem("users").replaceAll('"','');
    //     console.log(image_pathh);
    //     if(image_pathh !== undefined){
    //       var image_path = image_pathh;
    //       var image_extension = image_pathh.split('.').pop();
    //       var xhr = new XMLHttpRequest();
    //       xhr.open("POST", BASE_URL + "get_image/", true);
    //       xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //       xhr.overrideMimeType('text/plain; charset=x-user-defined');                 //added line: for binary data
    //       xhr.send("username=" + usern + "&imagePath=" + image_path);
    //       xhr.onreadystatechange = function(){
    //           if (xhr.readyState === 4 && xhr.status === 200) {
    //               // // var response = xhr.responseText;
    //               var binary = "";
    //               var responseText = xhr.responseText;
    //               var responseTextLen = responseText.length;
      
    //               for (let i = 0; i < responseTextLen; i++ ) {
    //                   binary += String.fromCharCode(responseText.charCodeAt(i) & 255);
    //               }
    //               var image_source = 'data:image/' + image_extension + ';base64,' + btoa(binary);
                  
    //               return image_source;
      
    //           }
    //       }
    //     }
    // }

    // function get_user_stories() {
    //     //get stories of a particular user
    //     var username = localStorage.getItem("users").replaceAll('"','');
    //     var username2 = username;
    //     var xhr = new XMLHttpRequest();
    //     xhr.open("POST", BASE_URL + "fetch_user_stories/", true);
    //     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //     xhr.send("username=" + username + "&username2=" + username2);
    //     var proceed = false;
    //     xhr.onreadystatechange = function () {
    //         if (xhr.readyState === 4 && xhr.status === 200) {
    //             var response = xhr.responseText;
    //             response = JSON.parse(response);
    //             console.log(response);          //response from server
    //             get_image2(username, response);
                
    //         }
    //     }
    // }

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
                console.log(response);          //response from server
                response = JSON.parse(response);        //contains 'status' and 'message'
                console.log("STORIES of "+usern2+" : "+response);
                setUserStories(response);
                setLoading(false)
            }
        }
    }
    function goBack(){
        console.log("Done")
        navigate(-1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( () => {
        setLoading(true)
        get_user_stories();
      
    }, [])
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


const userstories = [
  {
    // url: BASE_URL + "get_image/username=" + localStorage.getItem("users").replaceAll('"','') + "&imagePath=04a2fc86-0807-4129-9d06-1f87e403375f.png",
    // url: "https://picsum.photos/1080/1920",
    url: "data:image/jfif;base64,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",
    header: {
      heading: 'Mohit Karekar',
      subheading: 'Posted 5h ago'
    }
  },
  {
    url:
      'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',
    header: {
      heading: 'Mohit Karekar',
      subheading: 'Posted 32m ago',
    //   profileImage: 'https://picsum.photos/1080/1920'
    }
  },
  {
    url:
      'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
    header: {
      heading: 'mohitk05/react-insta-stories',
      subheading: 'Posted 32m ago'
    }
  },
  {
    url: 'https://picsum.photos/1080/1920',
    header: {
      heading: 'Mohit Karekar',
      subheading: 'Posted 5h ago'
    }
  },
  {
    url:
      'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',
    header: {
      heading: 'Mohit Karekar',
      subheading: 'Posted 32m ago'
    }
  },
  {
    url:
      'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
    header: {
      heading: 'mohitk05/react-insta-stories',
      subheading: 'Posted 32m ago'
    }
  }
];
