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
        axios.get("https://sign-ai-service-x4uj6fmx2a-as.a.run.app/chats.json", { crossdomain: true }).then((res) => {setData(res.data); return});
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

            </div>
        )
}

export default ChatHistoryNestedList;