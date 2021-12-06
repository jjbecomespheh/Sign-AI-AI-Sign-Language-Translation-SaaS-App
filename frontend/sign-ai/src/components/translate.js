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
import * as tf from '@tensorflow/tfjs'
import { v4 as uuidv4 } from 'uuid';
import * as Holistic from '@mediapipe/holistic'
import * as camera_utils from '@mediapipe/camera_utils'
import * as control_utils from '@mediapipe/control_utils'
import * as drawing_utils from '@mediapipe/drawing_utils'
import MediapipeHolistic from "./mediapipe_holistic";
import VideoStreamPlsWork from "./videoStreamPlsWork";

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
    const [translatedText, setTranslatedText] = useState('')
    const translated_text = "Someone molested me";
    const handleChange = (event) => {
        setTranslatedText(event.target.value);
      };
    var socket = io('http://localhost:5000');

    socket.on('connect', function(){
        console.log("Connected...!", socket.connected)
    });

    const videoConstraints = {
        facingMode: "user"
        };
    
    function activateYes(){
        axios.post('https://sign-ai-service-x4uj6fmx2a-as.a.run.app/chats.json',{"conversation_id": conversation_id, "sender": "Deaf", "message": translatedText, crossdomain: true});
        setTranslatedText('')
    }

    function activateNo(){
        //ttText = "Please re-sign your message"
        //Instead of throwing an alert, it should change/refresh the text in text box to -> "Please re-sign your message!"
    }
    socket.on('prediction', function(pred){
        console.log("FUCKKK", pred)
        if(pred == translatedText.split().pop()){
          console.log("same shit ", pred, translatedText)
        }else{
          setTranslatedText(translatedText + " " + pred)
        }
      })
    function activateHome(){
        history.push('/')
    }
        return(
            <div>

                <MediapipeHolistic style={{
                            position: 'relative', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)',
                            marginTop: '90px'}}/>

                <VideoStreamPlsWork socket={socket} style={{
                            position: 'relative', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)',
                            marginTop: '90px'}}/>
                            
                <div style={{
                            position:'relative', bottom:'50%', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)',
                            marginTop: '90px'}}>
                    {/* <Grid columnSpacing={3}>
                        <Grid> */}
                        {/* <Button
                            className="NextHome" 
                            variant="contained"
                            id="translated_text"
                            disabled={true}
                            style={{width: 370, height: 150, backgroundColor: '#F8F4EC', borderRadius: '12px', color: '#002600', fontFamily: 'Montserrat', textTransform: "None", fontSize: '25px'}}
                            >Start signing ... <br/>nod when you're done.</Button> */}
                            {/* Translation: */}
                            {/* <p /> */}
                        {/* </Grid>
                        <Grid> */}

                        <TextField
                        id="outlined-name"
                        label="Translating Sign..."
                        multiline
                        rows={3}
                        placeholder="Please type your message"
                        style={{width: '370px', borderRadius: '20px', fontSize: 25, marginTop: '30px', position: 'relative'}}
                        color="warning"
                        variant="filled"
                        value={translatedText}
                        onChange={handleChange}
                        multiline InputProps={{style: {fontSize: 25}}} // font size of input text
                        InputLabelProps={{style: {fontSize: 20}}} // font size of input label
                        />


                        {/* </Grid>
                    </Grid> */}
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
                            //onClick={activateHome} 
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