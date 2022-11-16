import "../styles/stories.scss";
import Story from "./Story";
import uploadimage from "../images/statusadd.png";
import HorizontalScroll from "react-scroll-horizontal";
// import HorizontalScroll from "react-horizontal-scrolling";

function Stories() {
  return (
    <div className="stories">
        <div className="fileupload">
            <label for="file-upload-status" >
                <img className="statusbar__upload" src={uploadimage} width="55px" height="55px" alt="" />
            </label>
                <input id="file-upload-status" type="file"/>
        </div>
      {/* <HorizontalScroll className="scroll" reverseScroll={true}> */}
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      {/* </HorizontalScroll> */}
    </div>
  );
}

export default Stories;
