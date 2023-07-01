import "../styles/story.scss";
import ProfileIcon from "./ProfileIcon";

function Story(props) {

  const {
    accountName,
    imagePath
  }=props;
  
  return (
    <div className="story">
      <ProfileIcon iconSize="big" storyBorder={true} profileImagePath={imagePath}/>
      <span className="accountName">{accountName}</span>
    </div>
  );
}

export default Story;
