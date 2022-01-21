import React, {useState, useEffect, createContext} from "react";

import pic from '../../Images/pfpGH.png'

function Title() {
    return  (
        <div className="class">

            <div className="header">
                <div className="img-div">
                    <img src={pic} alt="" />
                </div>
            
                <div className="header-div">
                    <h1>API Workshop</h1>
                </div>
            </div>
        </div>
    )
};

export default Title;