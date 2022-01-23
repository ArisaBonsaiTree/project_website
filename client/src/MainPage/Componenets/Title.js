import React, {useState, useEffect, createContext} from "react";

import pic from '../../Images/pfpGH.png'

import './Title.scss'

function Title() {
    return  (
        <section className="title">
            <div className="header">
                <div className="img-div">
                    <img src={pic} alt="" />
                </div>
            
                <div className="header-div">
                    <h1>Arisa Bonsai Tree</h1>
                </div>
            </div>
        </section>
    )
};

export default Title;