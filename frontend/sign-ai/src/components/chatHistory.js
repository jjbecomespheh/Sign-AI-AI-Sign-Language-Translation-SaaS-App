import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './chatHistory.css';
import MessageDeaf from './messageDeaf';
import MessageOfficer from './MessageOfficer';

export default function ChatHistory () {

    const [data, setData] = useState([]);

    useEffect(()=> {
        loadData();
    },[])

    const loadData = ()=> {
        axios.get("/chats.json")
        .then((res) => {
            setData(res.data)
        })
    }

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