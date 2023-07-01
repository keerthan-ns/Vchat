import "../styles/navigation.scss";
import Menu from "./Menu";
import logo from "../images/vchatLogo.png";
import{Toaster} from 'react-hot-toast'


function Navigation() {
  return (
    <>
      <Toaster/>
      <div className="navigation">
        <div className="container">
          <img className="logo" src={logo} alt="instagram logo" />
          {/* <div className="search"> */}
          <input text="text" className="search" placeholder="Search" />
            {/* <img className="searchIcon" src={searchIcon} alt="search icon" />
            <span className="searchText">Search</span> */}
          {/* </div> */}
          <Menu />
        </div>
      </div>
      </>
  );
}

export default Navigation;
