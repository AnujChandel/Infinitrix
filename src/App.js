import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import "./index.css";
//import img from "./ImagesandVideos/image2.jpg";

function App() {
  return (
    /*
class = "image"
            style = {{
               backgroundImage: `url(${img})`
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
            }}
*/

    <div className="App">
      <Navbar />
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
