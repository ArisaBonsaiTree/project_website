import React, {useState, useEffect, createContext} from "react";
import {Link} from 'react-router-dom'

function Links() {
    return  (
        <>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </>
        
    )
};

export default Links;