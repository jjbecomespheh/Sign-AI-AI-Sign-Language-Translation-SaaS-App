import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './chatHistory.css';
import MessageDeaf from './messageDeaf';
import MessageOfficer from './MessageOfficer';
import {useParams} from 'react-router-dom';
export default function ChatHistory (props) {

    const data = props.data
    const {conv_id} = useParams()

    var messages = data.map((obj) => obj.message)
    var sender = data.map((obj) => obj.sender)
    
    return (
        <div>

            {
                data.map((obj) => <MessageOfficer message = {obj.message} sender = {obj.sender} time = {obj.created_at}/>)
            }
            {/* {JSON.stringify(data)}
            {sender}
            <MessageOfficer message={messages}/> */}
        </div>
    )

}