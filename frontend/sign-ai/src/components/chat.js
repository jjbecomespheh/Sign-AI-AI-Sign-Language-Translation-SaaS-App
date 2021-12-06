import React, {useState} from "react";
import axios from "axios"
import NestedList from "./nestedList";
import {useHistory} from 'react-router-dom';
import { Button } from '@material-ui/core'

function ChatHistoryNestedList(){
    const history = useHistory()
    function goHome(){
        history.push('/')
    }

    const [data, setData] = useState([])
    const [display, setDisplay] = useState(false)

    function getDbStuff(){
        axios.get("https://sign-ai-service-x4uj6fmx2a-as.a.run.app/chats.json").then((res) => {setData(res.data); return});
        setDisplay(true)
    }

    React.useEffect(() =>{
        getDbStuff()
      },[]);

    const videoConstraints = {
        facingMode: "user"
        };
        return(
            <div>
                {data.length>2 ? <NestedList data={data}></NestedList> : "Error: Database Disconnected."}
                <Button 
                        className="NextHome" 
                        variant="contained"
                        onClick={goHome} 
                        style={{backgroundColor: '#2c7973', color: '#FFFFFF', borderRadius: '12px', margin: '2px', marginTop: '15px', width: '275px', height: '60px', position:'relative', fontFamily: 'Montserrat', textTransform: "None", fontSize: '20px'}}
                        >Home</Button>
            </div>
        )
}

export default ChatHistoryNestedList;