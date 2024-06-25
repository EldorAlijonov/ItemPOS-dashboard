import React from 'react'
import "./Home.scss"
import item_1 from "../../assets/item_img_1.png";
import item_2 from "../../assets/item_img_2.png";
import item_3 from "../../assets/ee4df05ffe93d1113c1f61e2fe5a6482.png";
import item_4 from "../../assets/e9d4c8ff5b46e81cc55bbd0cfd9caa70.png";
import user_img from "../../assets/user.png";
import vector from "../../assets/Vector.png";
import tort from "../../assets/tort.png"
import gander from "../../assets/gender.png";
import coin from "../../assets/koin.png";
import shopping from "../../assets/shopping.png";
import web from "../../assets/web.png";
import { TableComponent } from '../../components';

const Home = () => {
    return (
        <div className="home">
            <div className="container-home">
                <div className="content">
                    <div className="left">
                        <div className="top">
                           <div className="items">
                           <div className="item-top">
                                <div className="item-1">
                                    <div className="item-img">
                                        <img src={item_1} alt="message" />
                                    </div>
                                    <div className="info">
                                        <h4>Email</h4>
                                        <span>abcd123@gmail.com</span>
                                    </div>
                                </div>
                                <div className="item-2">
                                    <div className="item-img">
                                        <img src={item_2} alt="message" />
                                    </div>
                                    <div className="info">
                                        <h4>Register Since</h4>
                                        <span>Aug 22, 2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-top">
                                <div className="item-3">
                                    <div className="item-img">
                                        <img src={item_3} alt="message" />
                                    </div>
                                    <div className="info">
                                        <h4>Favourite Branch</h4>
                                        <span>Branch A</span>
                                    </div>
                                </div>
                                <div className="item-4">
                                    <div className="item-img">
                                        <img src={item_4} alt="message" />
                                    </div>
                                    <div className="info">
                                        <h4>Favourite Item</h4>
                                        <span>Pizza</span>
                                    </div>
                                </div>
                            </div>
                           </div>
                        </div>
                        <div className="bottom">
                            <div className="contents">
                                <div className="card">
                                    <div className="card-top">
                                        <div className="left">
                                            <img src={coin} alt="coin" />
                                            <h4>Total Points</h4>
                                        </div>
                                        <span>300</span>
                                    </div>
                                    <div className="card-bottom">
                                        <div className="card-item">
                                            <h5 className='card-h5'>Points Used</h5>
                                            <span className='card-span'>150</span>
                                        </div>
                                        <div className="card-item">
                                            <h5>Outstanding Points</h5>
                                            <span className='card-span'>150</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-top">
                                        <div className="left">
                                            <img src={shopping} alt="" />
                                            <h4>Total Points</h4>
                                        </div>
                                        <span>300</span>
                                    </div>
                                    <div className="card-bottom">
                                        <div className="card-item">
                                            <h5 className='card-h5'>Points Used</h5>
                                            <span className='card-span'>150</span>
                                        </div>
                                        <div className="card-item">
                                            <h5>Outstanding Points</h5>
                                            <span className='card-span'>150</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-top">
                                        <div className="left">
                                            <img src={web} alt="" />
                                            <h4>Total Points</h4>
                                        </div>
                                        <span>300</span>
                                    </div>
                                    <div className="card-bottom">
                                        <div className="card-item">
                                            <h5 className='card-h5'>Points Used</h5>
                                            <span className='card-span'>150</span>
                                        </div>
                                        <div className="card-item">
                                            <h5>Outstanding Points</h5>
                                            <span className='card-span'>150</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="profil">
                            <div className="top">
                                <img src={user_img} alt="user profil" className="user-img" />
                                <div className="info">
                                    <h4>Andreas Iniesta</h4>
                                    <img src={vector} alt="" />
                                </div>
                                <span>+8801774286074</span>
                            </div>
                            <div className="bottom">
                                <div className="item">
                                    <div className="item-img">
                                        <img src={tort} alt="birthday" />
                                    </div>
                                    <div className="info">
                                        <h4>Birthday</h4>
                                        <span>Aug 20, 1997</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-img gander" >
                                        <img src={gander} alt="birthday" />
                                    </div>
                                    <div className="info">
                                        <h4>Gender</h4>
                                        <span>Male</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <TableComponent />
            </div>
        </div>
    )
}

export default Home
