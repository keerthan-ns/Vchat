import { useEffect, useState } from "react";
import NavBar from './Navigation';
import Profile from "./Profile";
import '../styles/notifications.scss';
import noRequest from "../images/no_requests.png"
import toast,{Toaster} from 'react-hot-toast'

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
    function showLoading(){
        toast('Fetching requests please wait..',
                {duration:3000}
            );
    }

    useEffect(() => {
      get_follow_requests();
    }, [])
    
  return (
    <>
        <Toaster/>
        <NavBar/>
        <div className='notiPanel'>
            <div className="notification">
                <div className="titleContainer">
                    <div className="title">Recent follow requests</div>
                </div>
                {(requests.length !== 0)?
                    requests?.map((item,index)=>(
                        <div key={index} style={{maxWidth:'device-width'}}><Profile  username={item.sourceId} profileImagePath={item.imagePath} urlText="View" iconSize="medium" viewIcon="true" acceptIcon="true"/>
                        <hr/>
                        </div>
                    )):(
                        <div onLoad={showLoading}>
                            <img src={noRequest} className="no_request" alt="" />
                        </div>
                    )
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