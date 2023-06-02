import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import "./index.css";

function App() {
  return (
    /*
class = "image"
            style = {{
               height: "350px",
               width: "550px",
               backgroundImage:
               'url("https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/b2/1f/21/b21f21a8-e4f6-b7d2-1fec-8e5430273077/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png")',
               backgroundSize: "contain",
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
