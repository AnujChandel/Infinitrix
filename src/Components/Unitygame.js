import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Unitygame() {
   const { unityProvider } = useUnityContext({
     loaderUrl: "/myunityapp.loader.js",
     dataUrl: "/myunityapp.data",
     frameworkUrl: "/myunityapp.framework.js",
     codeUrl: "/myunityapp.wasm",
   })

  return (
  <div className="container">
    <p>  Games By unity</p><p></p>
  <Unity
  style={{
    width:"90%"
  }}
      unityProvider={unityProvider} />

  </div>
);
}