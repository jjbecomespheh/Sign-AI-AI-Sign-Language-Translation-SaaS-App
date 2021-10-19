import React, {useState} from "react";
import axios from "axios"
import { Button } from '@material-ui/core'
import Webcam from "react-webcam";
import NestedList from "./nestedList";

function ChatHistoryNestedList(){

    const [data, setData] = useState([])
    const [display, setDisplay] = useState(false)

    function getDbStuff(){
        axios.get("/chats.json").then((res) => {console.log(res); setData(res.data); return});
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
                {data.length>2 ? <NestedList data={data}></NestedList> : "Display is false lol"}
            </div>
        )
}

export default ChatHistoryNestedList;