import React, { Component } from 'react';
import "../styles/ProfilePage.css";
import "../styles/ProfilePage.scss";
import NavBar from './Navigation';

export default class ProfilePage extends Component {
  render() {
    return (
        <div>
        {/* <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}> */}
            <NavBar/>
                <header>
                    <div className="Profile_container">
                        <div className="Profile_profile">
                            <div className="Profile_profile-image">
                                <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt=""/>
                            </div>
                            <div className="Profile_profile-user-settings">
                                <h1 className="Profile_profile-user-name">janedoe_</h1>
                                <button className="Profile_btn Profile_profile-edit-btn">Edit Profile</button>
                                <button className="Profile_btn Profile_profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>
                            </div>
                            <div className="Profile_profile-stats">
                                <ul>
                                    <li><span className="Profile_profile-stat-count">164</span> posts</li>
                                    <li><span className="Profile_profile-stat-count">188</span> followers</li>
                                    <li><span className="Profile_profile-stat-count">206</span> following</li>
                                </ul>
                            </div>
                            <div className="Profile_profile-bio">
                                <p><span className="Profile_profile-real-name">Jane Doe</span><br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>
                            </div>
                        </div>
                    </div>
                </header>
                {/* <div  className="gallery">
                    <div  className="gallery-item">
                        <img alt="gallery-post" src="https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div  className="gallery-item">
                        <img alt="gallery-post" src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div  className="gallery-item">
                        <img alt="gallery-post" src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div  className="gallery-item">
                        <img alt="gallery-post" src="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div  className="gallery-item">
                        <img alt="gallery-post" src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div  className="gallery-item">
                        <img alt="gallery-post" src="https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    </div>
                </div> */}
                
                <section className="grid">
                    <div>
                        <img className='grid__photo' src='https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
                        {/* <div className="Profile_item-info">
                            <ul>
                                <li className="Profile_item-likes"><span className="Profile_visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 38</li>
                            </ul>
                        </div> */}
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1516893842880-5d8aada7ac05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1539108826694-1297410cdda9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1529690982439-df5e60eb5a3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1491056792553-4704d261e3ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1562138888-3d0a63b21dcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1568641134257-ab85695f67e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1545385095-f5a14a9160d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1547462713-a208daf9d997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1522586217274-9096ee38a805?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' className='grid__photo'/>
                    </div>   
                </section>
                {/* <main>
                    <div className="Profile_container">
                        <div className="Profile_gallery">
                            <div className="Profile_gallery-item" tabindex="0">
                                <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="Profile_gallery-image" alt=""/>
                                <div className="Profile_gallery-item-info">
                                    <ul>
                                        <li className="Profile_gallery-item-likes"><span className="Profile_visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 56</li>
                                        <li className="Profile_gallery-item-comments"><span className="Profile_visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Profile_gallery-item" tabindex="0">
                                <img src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop" className="Profile_gallery-image" alt=""/>
                                <div className="Profile_gallery-item-info">
                                    <ul>
                                        <li className="Profile_gallery-item-likes"><span className="Profile_visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 89</li>
                                        <li className="Profile_gallery-item-comments"><span className="Profile_visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 5</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Profile_gallery-item" tabindex="0">
                                <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop" className="Profile_gallery-image" alt=""/>
                                <div className="Profile_gallery-item-type">
                                    <span className="Profile_visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>
                                </div>
                                <div className="Profile_gallery-item-info">
                                    <ul>
                                        <li className="Profile_gallery-item-likes"><span className="Profile_visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 42</li>
                                        <li className="Profile_gallery-item-comments"><span className="Profile_visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 1</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Profile_gallery-item" tabindex="0">
                                <img src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop" className="Profile_gallery-image" alt=""/>
                                <div className="Profile_gallery-item-type">
                                    <span className="Profile_visually-hidden">Video</span><i className="fas fa-video" aria-hidden="true"></i>
                                </div>
                                <div className="Profile_gallery-item-info">
                                    <ul>
                                        <li className="Profile_gallery-item-likes"><span className="Profile_visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 38</li>
                                        <li className="Profile_gallery-item-comments"><span className="Profile_visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 0</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Profile_gallery-item" tabindex="0">
                                <img src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop" className="Profile_gallery-image" alt=""/>
                                <div className="Profile_gallery-item-type">
                                    <span className="Profile_visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>
                                </div>
                                <div className="Profile_gallery-item-info">
                                    <ul>
                                        <li className="Profile_gallery-item-likes"><span className="Profile_visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 47</li>
                                        <li className="Profile_gallery-item-comments"><span className="Profile_visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 1</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Profile_gallery-item" tabindex="0">
                                <img src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop" className="Profile_gallery-image" alt=""/>
                                <div className="gallery-item-info">
                                    <ul>
                                        <li className="Profile_gallery-item-likes"><span className="Profile_visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 94</li>
                                        <li className="Profile_gallery-item-comments"><span className="Profile_visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 3</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Profile_gallery-item" tabindex="0">
                                <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop" className="Profile_gallery-image" alt=""/>
                                <div className="Profile_gallery-item-type">
                                    <span className="Profile_visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>
                                </div>
                                <div className="Profile_gallery-item-info">
                                    <ul>
                                        <li className="Profile_gallery-item-likes"><span className="Profile_visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 52</li>
                                        <li className="Profile_gallery-item-comments"><span className="Profile_visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 4</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Profile_gallery-item" tabindex="0">
                                <img src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop" className="Profile_gallery-image" alt=""/>
                                <div className="Profile_gallery-item-info">
                                    <ul>
                                        <li className="Profile_gallery-item-likes"><span className="Profile_visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 66</li>
                                        <li className="Profile_gallery-item-comments"><span className="Profile_visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Profile_gallery-item" tabindex="0">
                                <img src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop" className="Profile_gallery-image" alt=""/>
                                <div className="Profile_gallery-item-type">
                                    <span className="Profile_visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>
                                </div>
                                <div className="Profile_gallery-item-info">
                                    <ul>
                                        <li className="Profile_gallery-item-likes"><span className="Profile_visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 45</li>
                                        <li className="Profile_gallery-item-comments"><span className="Profile_visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 0</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Profile_gallery-item" tabindex="0">
                                <img src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop" className="Profile_gallery-image" alt=""/>
                                <div className="Profile_gallery-item-info">
                                    <ul>
                                        <li className="Profile_gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 34</li>
                                        <li className="Profile_gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 1</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Profile_gallery-item" tabindex="0">
                                <img src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop" className="Profile_gallery-image" alt=""/>
                                <div className="Profile_gallery-item-info">
                                    <ul>
                                        <li className="Profile_gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 41</li>
                                        <li className="Profile_gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 0</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Profile_gallery-item" tabindex="0">
                                <img src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop" className="Profile_gallery-image" alt=""/>
                                <div className="Profile_gallery-item-type">
                                    <span className="visually-hidden">Video</span><i className="fas fa-video" aria-hidden="true"></i>
                                </div>
                                <div className="Profile_gallery-item-info">
                                    <ul>
                                        <li className="Profile_gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 30</li>
                                        <li className="Profile_gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main> */}
                {/* <main claasName="Profile_supermain">
                    <div className="Profile_maindiv">
                        <article className="Profile_article">
                            <div>
                                <div className="Profile_flexstyle">
                                    <div className="Profile_imgholder">

                                        <div className="Profile_imgdiv">
                                            <div className="Profile_div1">
                                                <div className="Profile_div2">
                                                    <img alt="" className="Profile_img" src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"/>
                                                </div>
                                                <div className="Profile_div3">
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="Profile_imgdiv">
                                            <div className="Profile_div1">
                                                <div className="Profile_div2">
                                                    <img alt="" className="Profile_img" src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop"/>
                                                </div>
                                                <div className="Profile_div3">
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="Profile_imgdiv">
                                            <div className="Profile_div1">
                                                <div className="Profile_div2">
                                                    <img alt="" className="Profile_img" src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"/>
                                                </div>
                                                <div className="Profile_div3">
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="Profile_imgdiv">
                                            <div className="Profile_div1">
                                                <div className="Profile_div2">
                                                    <img alt="" className="Profile_img" src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop"/>
                                                </div>
                                                <div className="Profile_div3">
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="Profile_imgdiv">
                                            <div className="Profile_div1">
                                                <div className="Profile_div2">
                                                    <img alt="" className="Profile_img" src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop"/>
                                                </div>
                                                <div className="Profile_div3">
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="Profile_imgdiv">
                                            <div className="Profile_div1">
                                                <div className="Profile_div2">
                                                    <img alt="" className="Profile_img" src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop"/>
                                                </div>
                                                <div className="Profile_div3">
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="Profile_imgdiv">
                                            <div className="Profile_div1">
                                                <div className="Profile_div2">
                                                    <img alt="" className="Profile_img" src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop"/>
                                                </div>
                                                <div className="Profile_div3">
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="Profile_imgdiv">
                                            <div className="Profile_div1">
                                                <div className="Profile_div2">
                                                    <img alt="" className="Profile_img" src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop"/>
                                                </div>
                                                <div className="Profile_div3">
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="Profile_imgdiv">
                                            <div className="Profile_div1">
                                                <div className="Profile_div2">
                                                    <img alt="" className="Profile_img" src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop"/>
                                                </div>
                                                <div className="Profile_div3">
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="Profile_imgdiv">
                                            <div className="Profile_div1">
                                                <div className="Profile_div2">
                                                    <img alt="" className="Profile_img" src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop"/>
                                                </div>
                                                <div className="Profile_div3">
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="Profile_imgdiv">
                                            <div className="Profile_div1">
                                                <div className="Profile_div2">
                                                    <img alt="" className="Profile_img" src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop"/>
                                                </div>
                                                <div className="Profile_div3">
                                                </div>
                                            </div>
                                        </div>     
                                        https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </main> */}
        </div>
    )
  }
}
