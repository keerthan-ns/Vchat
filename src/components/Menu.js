import "../styles/menu.scss";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as Explore } from "../images/explore.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";
import ProfileIcon from "./ProfileIcon";
import image from "../images/profile.jpg";

function Menu() {
  return (
    <div className="menu">
      <a href="/"><Home className="icon" /></a>
      <a href="/messages"><Inbox className="icon" /></a>
      <a href="/explore"><Explore className="icon" /></a>
      <a href="/notifications"><Notifications className="icon" /></a>
      <a href="/profile"><ProfileIcon iconSize="small" image={image} /></a>
    </div>
  );
}

export default Menu;
