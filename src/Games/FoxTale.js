import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Unity, useUnityContext } from "react-unity-webgl";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Unitygame.css";

export default function FoxTale() {
  const { unityProvider, loadingProgression, unload, isLoaded } =
    useUnityContext({
      loaderUrl: "/Games/FoxTale/build.loader.js",
      dataUrl: "/Games/FoxTale/build.data",
      frameworkUrl: "/Games/FoxTale/build.framework.js",
      codeUrl: "/Games/FoxTale/build.wasm",
    });

  const navigate = useNavigate();

  async function handleClickBack() {
    await unload();
    navigate("/AllGames");
  }

  return (
    <Fragment>
      <div className="container">
        <p>
          <b>Games By unity</b>
        </p>
        <h6>
          <p style={{ color: "red" }}>
            Please press QUIT GAME button before navigation to unload Game.
            <br></br> <br></br>
            Remember if QUIT button is in the game, it might not work.
          </p>
        </h6>
        <p></p>
        {!isLoaded && (
          <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
        )}
        <Button
          className="pdbton"
          style={{ position: "absolute", top: 155, right: 340 }}
          onClick={handleClickBack}
        >
          QUIT GAME
        </Button>
        <br></br>
        <Unity
          style={{
            width: "90%",
            visibility: isLoaded ? "visible" : "hidden",
          }}
          unityProvider={unityProvider}
          devicePixelRatio={window.devicePixelRatio}
          className="myunityapp"
        />
      </div>
    </Fragment>
  );
}
