import React, { useState } from "react";
//import "./aurora.css";
import LoadScreen from "./ui/loadScreen";
import { LOCALSTORAGE_LOGIN_KEY } from "./ui/login/loginScreen";
import Canvas from "./ui/canvas";

const Aurora = () => {
  const userInfo = localStorage.getItem(LOCALSTORAGE_LOGIN_KEY) || '{ "userName": "Guest", "googleDetails": null }';

  const [userData, setUserData] = useState(JSON.parse(userInfo));
  const [isLoadingAudioSystem, setIsLoadingAudioSystem] = useState(true);

  if (!isLoadingAudioSystem) {
    return <LoadScreen />;
  } else {
    return (
      <div className="auroraContainer">
        <div>menu items here</div>
        <Canvas />
      </div>
    );
  }
};

export default Aurora;
