import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Video from "../ImagesandVideos/video.mp4";
import { Link } from "react-router-dom";
import "./Pdbton.css";
import { Button } from "react-bootstrap";

export default function infx() {
  return (
    <main className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <h2>Welcome to My Small Gaming Company</h2>
          <p>
            We create innovative software that empowers 2D Games growth and
            success.
          </p>
          <p>
            We create innovative software that empowers 2D Games growth and
            success.
          </p>
          <p>
            We create innovative software that empowers 2D Games growth and
            success.
          </p>
          <p>Create innovative software that empowers 2D Games success.</p>
          <p>
            We create innovative software that empowers 2D Games growth and
            success.
          </p>
          <Link to="/playDemo">
            <Button className="pdbton">PLAY DEMO</Button>
          </Link>
        </div>
        <div className="col-md-6">
          <div style={{ paddingTop: "5px", paddingBottom: "5px" }}>
            <video
              src={Video}
              className="img-fluid"
              width="700"
              height="700"
              type="video/mp4"
              autoplay="true"
              loop="true"
              controls
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </main>
  );
}
