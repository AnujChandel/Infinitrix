import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bgimg from "../ImagesandVideos/bgimage.jpg";
import Video from "../ImagesandVideos/video.mp4";
import { Link } from "react-router-dom";


  export default function infx(){
    return(
      <main className="container py-5">
          <div style={{ backgroundImage: `url(${Bgimg})` }}>
            <div className="row align-items-center">
              <div className="col-md-6 text-center mb-4 mb-md-0">
                <h2>Welcome to My Small Gaming Company</h2>
                <p>
                  We create innovative software that empowers 2D Games growth and success.
                </p>
                <p>
                  We create innovative software that empowers 2D Games growth and success.
                </p>
                <p>
                  We create innovative software that empowers 2D Games growth and success.
                </p>
                <p>
                  Create innovative software that empowers 2D Games success.
                </p>
                <p>
                  We create innovative software that empowers 2D Games growth and success.
                </p>
                <Link to="/playDemo">
                <button
                  className="btn"
                  style={{ background: 'linear-gradient(to right, #f78ca0, #f9748f, #fd868c, #fe9a8b, #feca8a, #f9d989, #f7e988, #f7f987)', 
                  marginLeft: "-10px",
                  border: 'none',
                  color: 'white',
                  padding: '15px 32px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '16px',
                  margin: '4px 2px',
                  cursor: 'pointer'
                 }}
                >
                  Play Demo
                </button></Link>
              </div>
              <div className="col-md-6">
                <div style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                  <video src={Video}
                    className="img-fluid"
                    width="700"
                    height="700"
                    type="video/mp4"
                    autoplay="true"
                    loop="true"
                    controls>
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </main>
    )
}
