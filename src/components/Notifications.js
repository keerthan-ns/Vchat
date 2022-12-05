import { useEffect, useState } from "react";
import NavBar from './Navigation';
import Profile from "./Profile";
import '../styles/notifications.scss';

const BASE_URL = process.env.REACT_APP_DJANGO_URL;

function Notifications() {

    const [requests,setRequests] = useState([]);

    function get_follow_requests(){
        //get follow requests
        var username = localStorage.getItem("users").replaceAll('"','');
        var xhr = new XMLHttpRequest();
        xhr.open("POST", BASE_URL + "fetch_follow_requests/", true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send("username=" + username);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = xhr.responseText;
                console.log("from req " +response);          //response from server
                response = JSON.parse(response);        
                setRequests(response);
            }
        }
    }

    useEffect(() => {
      get_follow_requests();
    }, [])
    
  return (
    <>
        <NavBar/>
        <div className='notiPanel'>
            <div className="notification">
                <div className="titleContainer">
                    <div className="title">Recent follow requests</div>
                </div>
                {
                    requests?.map((item,index)=>(
                        <div key={index} style={{width:'device-width'}}><Profile  username={item.sourceId} profileImagePath={item.imagePath} urlText="View" iconSize="medium" viewIcons="true"/>
                        <hr/>
                        </div>
                    ))
                }
                    {/* <Card key={(item._id).toString()} cid={item._id} accountName={item.userId} image={item.imagePath} liked={item.liked} likedByNumber={item.likes} caption={item.caption} hours={item.postedAt} profileImagePath={item.profileImagePath}/> */}
                {/* <Profile
                    username="Thor"
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
        </div>
    </>
  )
}

export default Notifications