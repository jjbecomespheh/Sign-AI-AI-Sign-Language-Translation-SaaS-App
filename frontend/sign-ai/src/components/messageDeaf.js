import React from "react";

export default function MessageDeaf ({ message }) {
    return (
        <div class="container darker">
            <img src="../../public/bear.png" alt="Bear" class="right"/>
            {console.log(message)}
            <p>{message}</p>
            <span class="time-left">11:01</span>
        </div>
    )
  };
  
  