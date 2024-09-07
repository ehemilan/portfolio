import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ fontSize: '10px'}}>
    <Typewriter
      options={{
        strings: [
          "If you defeat someone in what he believe he is the best at, he will hate you for life. If you do this to everyone, everyone will adore you.",
          
        ],
        autoStart: true,
        loop: true,
        delay: 75,  
        deleteSpeed: 15,
      }}
    /></div> 
  );
}

export default Type;
