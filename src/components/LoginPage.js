import React, { Component } from 'react';
import "../styles/LoginPage.css";
import Grid from '@material-ui/core/Grid';
// import inst_image from '../images/9364675fb26a.svg';
import inst_image from '../images/phone31.png';
import insta_logo from '../images/vchatLogo.png';
import appstore from '../images/app.png';
import playstore from '../images/play.png';
import SignUp from './SignUp';
import SignIN from './SignIn'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLogin : true
         };
    }
    changeLogin=()=>{
        if(this.state.isLogin)
            this.setState({isLogin: false});
        else    
            this.setState({isLogin: true});
    }

    // sendLogoutRequest(){
    //     //send logout request
    //     var username = "newuser";
    //     var xhr = new XMLHttpRequest();
    //     xhr.open("POST", BASE_URL + "logout/", true);
    //     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //     xhr.send("username=" + username);
    //     xhr.onreadystatechange = function(){
    //         if (xhr.readyState === 4 && xhr.status === 200) {
    //             var response = xhr.responseText;
    //             console.log(response);          //response from server
    //             response = JSON.parse(response);        //contains 'status' and 'message'
    //         }
    //     }
    // }

    render() {
        return (
            <>
                <Grid container>
                    <Grid item xs={3} id="firstgrid"></Grid>
                    <Grid item xs={6} id="maingrid">
                        <div className="loginpage__main">
                            <div id="mobile">
                                <img src={inst_image} width="454px" alt="Android/IOS"/>
                            </div>
                            <div id="form_div">
                                <div className="loginpage_rightcomponent">
                                    <img className="loginpage__logo" src={insta_logo} alt="Instagram"/>
                                    <div className="loginPage__signin">
                                        {
                                            this.state.isLogin ? <SignIN/> : <SignUp/>
                                        }

                                        <div className="login__ordiv">
                                            <div className="login__dividor"></div>
                                            <div className="login__or">OR</div>
                                            <div className="login__dividor"></div>
                                        </div>
                                        <div className="login__fb">
                                            Log in with Facebook
                                        </div>
                                        <div className="login_forgt"> Forgot password?</div>
                                    </div>
                                </div>
                                <div className="loginpage__signupoption">
                                    {
                                        this.state.isLogin ?
                                        <div className="loginPage__signin">
                                                 Don't have an account? <span onClick={this.changeLogin} style={{ "fontWeight":"bold", "color":"#0395F6","top":"5"}}>Sign up</span>
                                        </div> :
                                        <div className="loginPage__signup">
                                                Have an account? <span onClick={this.changeLogin}  style={{ "fontWeight":"bold", "color":"#0395F6","top":"5"}}>Sign in</span>
                                        </div>
                                    }
                                </div>

                                <div className="loginPage__downloadSection">
                                    <div>
                                    Get the app.
                                    </div>
                                    <div className="loginPage__option">
                                        <img className="loginPage_dwimg" src={appstore} width="136px" alt=""/>
                                        <img className="loginPage_dwimg" src={playstore} width="136px" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3} id="secondgrid"></Grid>
                </Grid>
            </>
        );
    }
}

export default LoginPage;