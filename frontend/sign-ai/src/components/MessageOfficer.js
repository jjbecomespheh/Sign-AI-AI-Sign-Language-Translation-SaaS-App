import React from "react";

export default function MessageOfficer ({ message }) {
    return (
        <div class="container">
            <img src="/frontend/sign-ai/public/duck.jpeg" alt="Duck"/>
            <p>{message}</p>
            <span class="time-right">11:00</span>
        </div>
    )
  };
  
  