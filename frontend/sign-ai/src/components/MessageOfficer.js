import React from "react";

export default function MessageOfficer (props) {
    const message = props.message
    const sender = props.sender
    const time = props.time
    console.log('hello from officer')
    return (
        <div class="container">
            <img src="/frontend/sign-ai/public/duck.jpeg" alt={sender}/>
            <p>{JSON.stringify(message)}</p>
            <span class="time-right">{time}</span>
        </div>
    )
  };
  
  