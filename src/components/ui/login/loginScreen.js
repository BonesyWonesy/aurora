import React, { useState, useEffect } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import FancyText from "../fancyText";
import CoolButton from "../coolButton";
import { useGoogleLogin } from "@react-oauth/google";

export const LOCALSTORAGE_LOGIN_KEY = "aurora_logindetails";
const GOOGLE_SIGN_IN_TEXT = "Sign in with Google 🚀";
const APP_NAV_PATH = "/aurora";

function LoginScreen() {
  let navigate = useNavigate();

  const startApp = () => {
    navigate(APP_NAV_PATH);
  };

  const startAppAsGuest = () => {
    localStorage.setItem(
      LOCALSTORAGE_LOGIN_KEY,
      JSON.stringify({
        userName: "Guest",
        googleDetails: null,
      })
    );
    startApp();
  };

  const onLoginSuccess = (codeResponse) => {
    const loginDetails = {
      userName: "A Google User",
      googleDetails: {
        accessToken: codeResponse.access_token,
      },
    };

    localStorage.setItem(LOCALSTORAGE_LOGIN_KEY, JSON.stringify(loginDetails));
    setUserLoginDetails(loginDetails);
  };

  const onLoginFailure = () => {
    setHasLoginError(true);
  };

  // Attempt to read the login settings in local storage;
  const storedLoginDetails = localStorage.getItem(LOCALSTORAGE_LOGIN_KEY);
  let loginDetails = storedLoginDetails ? JSON.parse(storedLoginDetails) : null;

  const [userLoginDetails, setUserLoginDetails] = useState(loginDetails);
  const [profile, setProfile] = useState(null);
  const [hasLoginError, setHasLoginError] = useState(false);

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => onLoginSuccess(codeResponse),
    onError: () => onLoginFailure(),
  });

  useEffect(() => {
    if (userLoginDetails && userLoginDetails.googleDetails && !profile) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userLoginDetails.googleDetails.accessToken}`,
          {
            headers: {
              Authorization: `Bearer ${userLoginDetails.googleDetails.accessToken}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          userLoginDetails.userName = res.data.name;
          localStorage.setItem(LOCALSTORAGE_LOGIN_KEY, JSON.stringify(loginDetails));
        })
        .catch((err) => console.log(err));
    }
  }, [userLoginDetails]);

  let loginBody = (
    <div>
      <FancyText>
        <h1>Login</h1>
        <p>
          If you login with Google, your presets and audio tracks will automatically be saved to your Google Drive
          account
        </p>
      </FancyText>
      <CoolButton onClick={googleLogin}>{GOOGLE_SIGN_IN_TEXT}</CoolButton>
      <FancyText>
        <h1>or Continue As Guest</h1>
        <p> If you continue as a guest all your data is saved locally to this browser</p>
      </FancyText>
      <CoolButton onClick={startAppAsGuest}>Start Aurora</CoolButton>
    </div>
  );

  if (userLoginDetails) {
    let promptGoogle = null;

    if (!userLoginDetails.googleDetails) {
      promptGoogle = (
        <React.Fragment>
          <FancyText>
            <h1>Would you like to sign in with Google to save to the cloud?</h1>
          </FancyText>
          <CoolButton onClick={googleLogin}> {GOOGLE_SIGN_IN_TEXT}</CoolButton>
        </React.Fragment>
      );
    }
    loginBody = (
      <React.Fragment>
        <FancyText>
          <h1>Welcome back {userLoginDetails.userName}</h1>
          <p> Pick up where you left off!</p>
        </FancyText>
        <CoolButton onClick={startApp}>Start Aurora</CoolButton>
        {promptGoogle}
      </React.Fragment>
    );
  }

  if (hasLoginError) {
    loginBody = (
      <div>
        <FancyText>
          <p>
            An error occured while attempting to sign in with Google. You can either try again, or just continue as a
            guest
          </p>
        </FancyText>
        <CoolButton onClick={googleLogin}>{GOOGLE_SIGN_IN_TEXT}</CoolButton>
        <br />
        <br />
        <br />
        <CoolButton onClick={startAppAsGuest}>Start Aurora as Guest</CoolButton>
      </div>
    );
  }

  return <div>{loginBody}</div>;
}

export default LoginScreen;
