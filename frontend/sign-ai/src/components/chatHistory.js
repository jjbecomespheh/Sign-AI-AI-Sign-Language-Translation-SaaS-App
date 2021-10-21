import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './chatHistory.css';
import MessageOfficer from './MessageOfficer';

export default function ChatHistory () {
    const [data, setData] = useState([]);
    
    useEffect(()=> {
        const loadData = async () => {
            const res = await axios.get("./chats.json");
            setData(res.data)
        }
        loadData();
    },[])

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

      const sortedData = groupArrays.map((nestedObj) =>{
          const viewMsg = () => {
            return(
                nestedObj.msg.map((obj) => {
                    return <MessageOfficer message = {obj.message} sender = {obj.sender} time = {obj.created_at}/>
                })
            )
        }

          return(
              <div>
                <button onClick={viewMsg}>{nestedObj.date}</button>
              </div>
            )
      })
    return (
        <div>
            {sortedData} 
        </div>
    )

}