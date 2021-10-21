import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './chatHistory.css';
import MessageOfficer from './MessageOfficer';
import moment from 'moment';
import _ from 'underscore';

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

    const sortedDate = (data) =>{
        // sortedDate = _.sortBy(data,"created_at")；
        sortedDate = _.groupBy(data,'created_at');    
        console.log(sortedDate)
        return {sortedDate}
    }

    const groups = data.reduce((groups, msg) => {
        const date = msg.created_at.split('T')[0];
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(msg);
        return groups;
      }, {});
      
      // Edit: to add it in the array format instead
      const groupArrays = Object.keys(groups).map((date) => {
        return {
          date,
          msg: groups[date]
        };
      });

      const processedData = data.map((obj) =>{ 
        var date = moment(obj.created_at).format('MMMM Do YYYY') //format the date string into October 19th 2021
        // console.log(groupArrays)
        return <MessageOfficer message = {obj.message} sender = {obj.sender} time = {obj.created_at}/>
      })

      const sortedData = groupArrays.map((nestedObj) =>{
          console.log(nestedObj)
          return(
            nestedObj.msg.map((obj) => {
                console.log(obj)
                return <MessageOfficer message = {obj.message} sender = {obj.sender} time = {obj.created_at}/>
            }))
          // return <MessageOfficer message = {message} sender = {sender} time = {created_at}/>
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
            {
                // data.map((obj) => )
                // processedData
                sortedData
                // sortedDate(data)
                // JSON.stringify(sortedDate)
                // JSON.stringify(groupArrays)
            }
        </div>
    )

}