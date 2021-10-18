import React, {useState} from "react";
import axios from "axios"
import { Button } from '@material-ui/core'
import IconButton from '@mui/material/IconButton';
import Webcam from "react-webcam";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from "@mui/material/styles";

function Chat(){

    const [data, setData] = useState([{something:"something"}])

    function getDbStuff(){
        axios.get("/chats.json").then((res) => {console.log(res); setData(res.data); return});
    }
        
    const videoConstraints = {
        facingMode: "user"
        };
    
        return(
            <div>
                <div>
                    <Webcam videoConstraints={videoConstraints}
                        style={{borderRadius: '50px', margin: '5px', height: '500px'}}
                    />  
                </div>
                <div>{JSON.stringify(data)}</div>
                <div>
                    <Button onClick={getDbStuff}>Get Stuff</Button>
                </div>
            </div>
        )
}

export default Chat;