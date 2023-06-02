import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Video from "../ImagesandVideos/video.mp4";
import { Link } from "react-router-dom";
import "./AllCSS/Pdbton.css";
import { Button } from "react-bootstrap";

export default function infx() {
  return (
    <main className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <h2>Welcome to My Small Gaming Company</h2>
          <p>
            Dive into a world of immersive experiences and endless entertainment
            on our gaming platform.
          </p>
          <p>
            Browse through our extensive library of games, ranging from
            action-packed adventures to mind-bending puzzles.
          </p>
          <p>
            Connect with fellow gamers, share experiences, and participate in
            lively discussions on our vibrant forums.
          </p>
          <p>
            Get the latest news, updates, and announcements about your favorite
            games and upcoming releases.
          </p>
          <p>
            Unlock new levels of skill and achievement with our innovative
            software designed to enhance your gaming performance.
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
