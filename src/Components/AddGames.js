import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SaveAs from 'file-saver';



export default function AddGames(props) {
  const [formSubmitted, setFormSubmitted] = useState(true);

  const [orgname, neworgname] = useState('');
  const [gamename, newgamename] = useState('');
  const [link, newlink] = useState('');
  const [description, newdescription] = useState('');

  function onsubmit(e) {
    e.preventDefault();
  
    setFormSubmitted(false);
    console.log( "the last updated data");
    
   
  }

  function viewResponse(){
    var date = new Date().toLocaleString();
    var blob = new Blob([ "orgname is: ", orgname ,"\n", "gamename is:  ", gamename  , "\n","link is:  ", link ,"\n","description is:  ", description , "\n"], { type: "text/plain;charset=utf-8" });
    var newName = orgname + "--" + date + ".txt"
     SaveAs(blob, newName); 
  }

  const handleInputChangeorgname = (e) => {
    neworgname(e.target.value);
    console.log("orgname:" , orgname);
  };
  const handleInputChangegamename = (e) => {
    newgamename(e.target.value);
    console.log("gamename:" ,gamename);
  };
    
    const handleInputChangelink = (e) => {
    newlink(e.target.value);
    console.log("link:" , link);
  }

    const handleInputChangedescription = (e) => {
    newdescription(e.target.value);
    console.log("description:",description);
  }

  return (
    <div className='container'>
      {formSubmitted ? (
      <div
        style={{
          display: 'block',
          width: 700,
          padding: 30,
        }}
      >
        <h4>Upload Your own Game</h4>
        <p>
          <h6>
            <p style={{ color: 'red' }}>
              It is mandatory to Upload your game WebGL files on Github
            </p>
          </h6>
        </p>
        
          <Form onSubmit={onsubmit}>
            <br></br>
            <Form.Group>
              <Form.Label>Enter your organisation or Personal name:</Form.Label>
              <br></br>
              <Form.Control
                type='text'
                onChange={handleInputChangeorgname}
                
                value={orgname}
                placeholder='Enter here'
              />
              <p> </p>
            </Form.Group>
            <Form.Group>
              <Form.Label>Enter your Game name:</Form.Label>
              <Form.Control
                type='text'
                onChange={handleInputChangegamename}
                
                value={gamename}
                placeholder='Enter here'
              />
              <p> </p>
            </Form.Group>
            <Form.Group>
              <Form.Label>Add Github or Git link:</Form.Label>
              <Form.Control
                type='text'
                onChange={handleInputChangelink}
                
                value={link}
                placeholder='Enter here'
              />
            </Form.Group>
            <br></br>
            <Form.Group>
              <Form.Label>Add description about Game:</Form.Label>
              <Form.Control
                as='textarea'
                rows={5}
                type='text'
                onChange={handleInputChangedescription}
                
                value={description}
                placeholder='Enter here'
              />
              <p> </p>
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
       
      </div> ) : (<>
         <h2> <p>Thank you for submission  </p></h2>  <br></br>
         <h5> <p> We will check if the game is compatible with our system and conditions. </p></h5><br></br>
         <h5> <p> If the game is compatible, then it will be Uploaded within 7 days. </p></h5>
         <Button variant='outline-info' onClick={viewResponse} >
              View Reponse
            </Button>
          </>
        )}
    </div>
  );
}
