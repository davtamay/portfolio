

import Header from "../Components/Header.js";
import Navigator from "../Components/Navigator.js";
import React, { useState, useEffect, useCallback } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import{tw} from "twind"

export default function Sample() {
  
  
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/myunityapp.loader.js",
    dataUrl: "build/myunityapp.data",
    frameworkUrl: "build/myunityapp.framework.js",
    codeUrl: "build/myunityapp.wasm",
    webglContextAttributes:{
        preserveDrawingBuffer: true,
    },
  });



  //We'll use a state to store the device pixel ratio.
  const [devicePixelRatio, setDevicePixelRatio] = useState(
    global.devicePixelRatio
  );
  const handleChangePixelRatio = useCallback(
    function () {
      // A function which will update the device pixel ratio of the Unity
      // Application to match the device pixel ratio of the browser.
      const updateDevicePixelRatio = function () {
        setDevicePixelRatio(window.devicePixelRatio);
      };
      // A media matcher which watches for changes in the device pixel ratio.
      const mediaMatcher = window.matchMedia(
        `screen and (resolution: ${devicePixelRatio}dppx)`
      );
      // Adding an event listener to the media matcher which will update the
      // device pixel ratio of the Unity Application when the device pixel
      // ratio changes.
      mediaMatcher.addEventListener("change", updateDevicePixelRatio);
      return function () {
        // Removing the event listener when the component unmounts.
        mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
      };
    },
    [devicePixelRatio]
  );


  return( 
  <>
    <Navigator class={tw`h-full w-full`}></Navigator>
    {/* <Header></Header> */}
  
  
  
  <div className={tw`h-full w-full`}>
  <Unity class={tw``}
  unityProvider={unityProvider} 
  style={{ width: 400, height: 400, 
  
  
  }}
      devicePixelRatio={devicePixelRatio}
  />
  </div>
  
  </>
  );
}
