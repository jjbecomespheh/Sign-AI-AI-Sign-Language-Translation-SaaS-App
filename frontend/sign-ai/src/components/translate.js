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
import {Camera} from "react-camera-pro";
import {useHistory} from 'react-router-dom';
import useCamera from "use-camera";
import { TextField } from "@mui/material";
import VideoRecorder from 'react-video-recorder'
import axios from "axios";
import {store, useGlobalState} from 'state-pool';
import '@fontsource/montserrat';

import * as tf from '@tensorflow/tfjs'
import { v4 as uuidv4 } from 'uuid';
import * as Holistic from '@mediapipe/holistic'
import * as camera_utils from '@mediapipe/camera_utils'
import * as control_utils from '@mediapipe/control_utils'
import * as drawing_utils from '@mediapipe/drawing_utils'
import MediapipeHolistic from "./mediapipe_holistic";

async function LoadModel(){
    try {
        // For layered model
        const model = await tf.loadLayersModel('/tfjs/model.json');
        await console.log("Load model success");
    } catch (err) {
        console.log("GGWP");
        console.log(err);
    }
}
LoadModel();

function Translate(){

    const history = useHistory()
    try{
        useGlobalState("conversation_id")
    }catch{
        var convo_id = uuidv4(); 
        store.setState("conversation_id", convo_id); 
    }
    const [conversation_id] = useGlobalState("conversation_id");
    const [question, setQuestion] = useState('');
    const translated_text = "Someone molested me";

    const videoConstraints = {
        facingMode: "user"
        };
    
    function activateYes(){
        axios.post('/chats.json',{"conversation_id": conversation_id, "sender": "Deaf", "message": translated_text});
    }

    function activateNo(){
        alert("Please Sign Again!");
    }

    function activateHome(){
        history.push('/')
    }
        return(
            <div>
                <MediapipeHolistic style={{
                            position: 'relative', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)',
                            marginTop: '90px'}}/>

                <div style={{
                            position: 'relative', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)',
                            marginTop: '90px'}}>
                    <Button
                        className="NextHome" 
                        variant="contained"
                        id="translated_text"
                        style={{width: 370, height: 150, backgroundColor: '#F8F4EC', borderRadius: '12px', color: '#002600', fontFamily: 'Montserrat', textTransform: "None", fontSize: '25px'}}
                        >Start signing ... <br/>nod when you're done.</Button>
                </div>
                
                <div>
                    <div>
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
                            onClick={activateHome} 
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