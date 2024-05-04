import {Hello, Namaste} from "./Hello";
import { useState } from "react";
import Random from "./Random";


export default function App () {
  const [Name, setName] = useState("");

  const ClickBtn = () => {
    setName("Sumit");
  }

  const ClickLike = () => {
  <p>{setName("Thank You for your 👍")}</p> 
  }


  let inlineStyle = {
    color:"black", 
    fontSize: "20px",
    backgroundColor: "lightblue",
  }

  return <div>
  <h1>
    This is the first react message!
  </h1>
  <button>Subscribe</button>
  <div style={{'background-color': 'green', 'border-radius' : '5px'}}>
   <Hello> 
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem, ipsum.</p>
    <a href="#">hyperlink</a>
  </Hello>
  </div>
  <Random/>
  <Namaste />

  </div>
  
  
}

