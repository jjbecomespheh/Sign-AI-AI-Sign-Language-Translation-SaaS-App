import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './chatHistory.css';
import MessageDeaf from './messageDeaf';
import MessageOfficer from './MessageOfficer';
import {useParams} from 'react-router-dom';

export default function Message () {

    const {conv_id} = useParams()

    // var messages = data.map((obj) => obj.message)
    // var sender = data.map((obj) => obj.sender)
    
    return (
        <div>

            
                WILL DISPLAY CHATS HERE
                <p>
                IN PROGRESS
                </p>
            {/* {JSON.stringify(data)}
            {sender}
            <MessageOfficer message={messages}/> */}
        </div>
    )

}