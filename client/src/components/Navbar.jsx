import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/cw-logo.png';
import Login from "./Login.jsx";
import { Weather } from "./Weather.jsx";

export function Navbar(imageInfo) {
  // const [author, setAuthor] = useState('hi');

  // useEffect(()=> {
  //   setAuthor(imageInfo.imageInfo)
  //   console.log('this changed', imageInfo)
  // }, [imageInfo]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-3 d-flex justify-content-between">
      <div className="text-white">
        <div>Image By</div>
        <div>
        {imageInfo.imageInfo}
        </div>
      </div>
     <div>
      <Weather/>
     </div>
      
      
    </nav >
  )
}