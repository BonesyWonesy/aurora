import React from "react";
import Header from "./header";
import Features from "./features";
import CoolButton from "./ui/coolButton";
import { useNavigate } from "react-router-dom";
import { isAudioSupported } from "../utils/aurora";
import FancyText from "./ui/fancyText";

function HomeScreen() {
  let navigate = useNavigate();

  let actionContent = null;

  if (isAudioSupported) {
    actionContent = (
      <CoolButton
        onClick={() => {
          navigate("/login");
        }}
        isEnabled={true}
      >
        Start Aurora
      </CoolButton>
    );
  } else {
    actionContent = (
      <FancyText>
        <p>Sorry but it doesn't look like your browser is going to support the features that Aurora needs to run =(</p>
      </FancyText>
    );
  }

  return (
    <React.Fragment>
      <Header />
      <Features />
      {actionContent}
    </React.Fragment>
  );
}

export default HomeScreen;
