import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function FoxTale() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Games/FoxTale/build.loader.js",
    dataUrl: "/Games/FoxTale/build.data",
    frameworkUrl: "/Games/FoxTale/build.framework.js",
    codeUrl: "/Games/FoxTale/build.wasm",
  });

  return (
    <div className="container">
      <p>
        {" "}
        <b>Games By unity</b>
      </p>
      <p></p>
      <Unity
        style={{
          width: "90%",
        }}
        unityProvider={unityProvider}
      />
    </div>
  );
}
