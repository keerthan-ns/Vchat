import React from 'react';
import NavBar from './Navigation';
import Profile from "./Profile";
import '../styles/notifications.scss';

function Notifications() {
  return (
    <>
        <NavBar/>
        <div className='notiPanel'>
            <div className="notification">
                <div className="titleContainer">
                    <div className="title">Recent follow requests</div>
                {/* <a href="/">See All</a> */}
                </div>

                <Profile
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
                />
            </div>
        </div>
    </>
  )
}

export default Notifications