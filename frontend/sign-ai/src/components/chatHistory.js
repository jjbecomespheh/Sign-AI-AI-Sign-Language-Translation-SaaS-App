import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './chatHistory.css';
import MessageOfficer from './MessageOfficer';
import moment from 'moment'

export default function ChatHistory () {

    const [data, setData] = useState([]);

    

    useEffect(()=> {
        const loadData = async () => {
            const res = await axios.get("./chats.json");
            // const getData = await res.json();
            setData(res.data)
    
        }
        loadData();
    },[])

    const processedData = data.map((obj) =>{ 
        var date = moment(obj.created_at).format('MMMM Do YYYY') //format the date string into October 19th 2021
        console.log(date)
        return <MessageOfficer message = {obj.message} sender = {obj.sender} time = {obj.created_at}/>
    })


    // const loadData = ()=> {
    //     axios.get("/chats.json")
    //     .then((res) => {
    //         setData(res.data)
    //     })
    //     console.log(data)
    //     var date = data.created_at
    //     console.log(date)
    // }
    return (
        <div>
            <>
                {JSON.stringify(data)}
            </>
            {
                // data.map((obj) => )
                processedData
            }
        </div>
    )

}