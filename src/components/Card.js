import "../styles/card.scss";
import Profile from "./Profile";
import CardMenu from "./CardMenu";

const BASE_URL = process.env.REACT_APP_DJANGO_URL;

function Card(props) {
  const {
    
    cid,
    storyBorder,
    image,
    accountName,
    liked,
    likedByNumber,
    caption,
    hours,
    profileImagePath,
  } = props;

  function get_image(cid,accountName,image_pathh){
    //get image
    // var username = localStorage.getItem("users").replaceAll('"','');
    var username = accountName;
    // var image_path = document.getElementById("image_path").value;
    var image_path = image_pathh;
    // console.log(image_path);
    var image_extension = image_path.split('.').pop();
    var xhr = new XMLHttpRequest();
    xhr.open("POST", BASE_URL + "get_image/", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.overrideMimeType('text/plain; charset=x-user-defined');                 //added line: for binary data
    xhr.send("username=" + username + "&imagePath=" + image_path);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            // // var response = xhr.responseText;
            var binary = "";
            var responseText = xhr.responseText;
            var responseTextLen = responseText.length;

            for (let i = 0; i < responseTextLen; i++ ) {
                binary += String.fromCharCode(responseText.charCodeAt(i) & 255);
            }
            var image_source = 'data:image/' + image_extension + ';base64,' + btoa(binary);

            // console.log(image_source);          //response from server
            document.getElementById(cid).src = image_source;       //for displaying image
            // return image_source;

        }
    }
  }

  return (
    <div className="card">
      <header>
        <Profile username={accountName} iconSize="medium" storyBorder={storyBorder} profileImagePath={profileImagePath}/>
        {/* <CardButton className="cardButton" /> */}
      </header>
      <img id={cid} className="cardImage" src={get_image(cid,accountName,image)} alt="card content" />
      <CardMenu cid={cid} liked={liked}/>
      <div className="likedBy">
        {/* <Profile iconSize="small" hideAccountName={true} /> */}
        <span>
          <strong>Total likes {likedByNumber}</strong><br/>
          {caption}
        </span>
      </div>
      {/* <div className="comments">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
            />
          );
        })}
      </div> */}
      <div className="timePosted">{hours} HOURS AGO</div>
      {/* <div className="addComment">
        <div className="commentText">Add a comment...</div>
        <div className="postText">Post</div>
      </div> */}
    </div>
  );
}

export default Card;
