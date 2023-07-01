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


// const userstories = [
//   {
//     url: "https://picsum.photos/1080/1920",
    
//     header: {
//       heading: 'Mohit Karekar',
//       subheading: 'Posted 5h ago'
//     }
//   },
//   {
//     url:
//       'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',
//     header: {
//       heading: 'Mohit Karekar',
//       subheading: 'Posted 32m ago',
//     //   profileImage: 'https://picsum.photos/1080/1920'
//     }
//   },
//   {
//     url:
//       'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
//     header: {
//       heading: 'mohitk05/react-insta-stories',
//       subheading: 'Posted 32m ago'
//     }
//   },
//   {
//     url: 'https://picsum.photos/1080/1920',
//     header: {
//       heading: 'Mohit Karekar',
//       subheading: 'Posted 5h ago'
//     }
//   },
//   {
//     url:
//       'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',
//     header: {
//       heading: 'Mohit Karekar',
//       subheading: 'Posted 32m ago'
//     }
//   },
//   {
//     url:
//       'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
//     header: {
//       heading: 'mohitk05/react-insta-stories',
//       subheading: 'Posted 32m ago'
//     }
//   }
// ];
