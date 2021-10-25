import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './chatHistory.css';
import MessageDeaf from './messageDeaf';
import MessageOfficer from './MessageOfficer';
import {useParams} from 'react-router-dom';

export default function Message () {

    const {index, conv_id} = useParams()
    const [message, setMessage] = useState([])
    const [dateCur, setDateCur] = useState(null)


    useEffect(()=> {
        console.log("INDEX AND CONV_ID IS", index, conv_id)
    axios.get(`/chats/${index}.json`).then((res) => {
        console.log(res.data.created_at.split('T'));
        setDateCur(res.data.created_at.split('T')[0].toString()); return});    
    
    axios.get('/chats.json').then((res) => {
        const res_data = res.data
        var needed_messages = []
        for(var datapoint of res_data){
            if(datapoint.created_at.split('T')[0].toString() == dateCur && datapoint.conversation_id.toString() == conv_id.toString()){
                needed_messages.push({sender: datapoint.sender, message: datapoint.message})
            }
        }
        console.log(needed_messages)
        console.log("date is ", dateCur);
        setMessage(needed_messages);
        
        return;
    })
    
    },[dateCur])



    // var messages = data.map((obj) => obj.message)
    // var sender = data.map((obj) => obj.sender)
    
    return (
        <div>

            
                WILL DISPLAY CHATS HERE
                <p>
                {JSON.stringify(message)}
                </p>
            {/* {JSON.stringify(data)}
            {sender}
            <MessageOfficer message={messages}/> */}
        </div>
    )

}