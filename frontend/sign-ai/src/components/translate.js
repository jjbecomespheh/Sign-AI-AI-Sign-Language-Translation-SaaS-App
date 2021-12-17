import React from "react";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import Webcam from "react-webcam";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CallEndIcon from '@mui/icons-material/CallEnd';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useRef , Fragment, capture} from "react";
import {useHistory} from 'react-router-dom';
import useCamera from "use-camera";
import { TextField } from "@mui/material";
import VideoRecorder from 'react-video-recorder';
import Grid from '@mui/material/Grid';
import axios from "axios";
import {store, useGlobalState} from 'state-pool';
import '@fontsource/montserrat';
import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';
import * as Holistic from '@mediapipe/holistic'
import * as camera_utils from '@mediapipe/camera_utils'
import * as control_utils from '@mediapipe/control_utils'
import * as drawing_utils from '@mediapipe/drawing_utils'
import MediapipeHolistic from "./mediapipe_holistic";
import StreamVideo from './streamVideo';

function Translate(){
    const history = useHistory()
    try{
        useGlobalState("conversation_id")
    }catch{
        var convo_id = uuidv4(); 
        store.setState("conversation_id", convo_id); 
    }
    const [conversation_id] = useGlobalState("conversation_id");
    const [translatedText, setTranslatedText] = useState([' '])
    const [question, setQuestion] = useState('');
    const [myarr, setMyArr] = useState([" "]);

    var wordArr = []
    const handleChange = (event) => {
        setTranslatedText(event.target.value);
      };

    const videoConstraints = {
        facingMode: "user"
        };
    
    function activateYes(){
        axios.post('https://sign-ai-service-x4uj6fmx2a-as.a.run.app/chats.json',{"conversation_id": conversation_id, "sender": "Deaf", "message": translatedText, crossdomain: true});
        setTranslatedText('')
    }

    const childToParent = (childdata) => {
        setTranslatedText(childdata);
        wordArr.push(childdata)
        
       
        setMyArr([...myarr, childdata])
        if(wordArr.length > 20){
            wordArr = [wordArr[wordArr.length -1]]
        }
      } 

    function activateNo(){
    }

    function activateHome(){
        history.push('/')
    }
        return(
            <div>
                <StreamVideo styles={{display:"none"}} childToParent={childToParent}/>
                <MediapipeHolistic />

                <div style={{
                            position: 'relative', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)',
                            marginTop: '50px'}}>

                        <TextField
                        id="outlined-name"
                        label="Translating Sign..."
                        multiline
                        rows={2}
                        placeholder="Please start signing ..."
                        style={{width: '370px', borderRadius: '20px', fontSize: 25, marginTop: '30px', position: 'relative'}}
                        color="warning"
                        variant="filled"
                        value={translatedText}
                        onChange={handleChange}
                        multiline InputProps={{style: {fontSize: 25}}} // font size of input text
                        InputLabelProps={{style: {fontSize: 20}}} // font size of input label
                        />
                </div>

                <div>
                    <div style={{marginTop: '1px'}}>
                        <Button 
                            id="sign_again_btn"
                            onClick={activateNo} 
                            startIcon={<ThumbDownIcon />} 
                            style={{backgroundColor: '#ff4747', width: '180px', height: '50px' , color: '#FFFFFF', borderRadius: '12px', position:'relative', marginRight: '10px', marginBottom:'10px'}}
                            >Sign again</Button>
                        <Button 
                            id="correct_btn"
                            onClick={activateYes} 
                            startIcon={<ThumbUpIcon />}
                            style={{backgroundColor: '#2c7973', width: '180px' , height: '50px', color: '#FFFFFF', borderRadius: '12px', position:'relative', marginBottom:'10px'}}
                            >Correct</Button>
                    </div>

                    <div>
                        <Link to='/home' style={{textDecoration: 'none'}}>
                            <Button 
                            id="home_btn"
                            onClick={activateHome} 
                            startIcon={<CallEndIcon />}
                            style={{backgroundColor: '#f7b34d', width: '180px' , height: '50px', color: '#FFFFFF', borderRadius: '12px', position:'relative',marginTop:'0px', marginRight:'10px', marginBottom:'10px'}}
                            >End Convo</Button>
                        </Link>
                        <Link to='/ask' style={{textDecoration: 'none'}}>
                            <Button 
                            id="ask_btn"
                            startIcon={<QuestionAnswerIcon />}
                            style={{backgroundColor: '#f7b34d', width: '180px' , height: '50px', color: '#FFFFFF', borderRadius: '12px', position:'relative',marginTop:'0px', marginBottom:'10px' }}
                            >Ask Question</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
}
export default Translate;