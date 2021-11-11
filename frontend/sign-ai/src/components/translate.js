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
// import { TextField } from "@mui/material";
//import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import VideoRecorder from 'react-video-recorder'



function Translate(){

    const history = useHistory()
    const videoConstraints = {
        facingMode: "user"
        };
    
    function activateYes(){
        alert("You clicked Correct!")
    }

    function activateNo(){
        alert("You clicked Sign Again!")
    }

    function activateHome(){
        //alert("You clicked Home!")
        history.push('/')
    }
    const camera = useRef(null);
    const [image, setImage] = useState(null);
    const ref = useCamera({ audio: false });
   
        return(
            <div>
                <div width={'300px'} height={'900px'}
                    style={{borderRadius: '25px', marginTop: '20px', alignContent: 'center'}}>
                    
                    <VideoRecorder
                        isFlipped={false}
                        //isOnInitially
                        countdownTime={0}
                        mimeType="video/webm;codecs=vp8,opus"
                        // constraints={{
                        //     audio: true,
                        //     video: {
                        //     width: { exact: 480, ideal: 480 },
                        //     height: { exact: 940, ideal: 940 },
                        //     aspectRatio: { exact: 0.900000001, ideal: 0.900000001 },
                        //     }
                        //}}
                        onRecordingComplete={(videoBlob) => {
                            // Do something with the video...
                            console.log("videoBlob", videoBlob);
                            //push("/videoPreview", { videoBlob });
                        
                        }}
                        style={{width: 300}}
                        />
                </div>
                
                <div style={{
                            position: 'relative', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)',
                            marginTop: '130px'}}>
                    <Button
                        id="translated_text"
                        style={{width: 363, height: 150, backgroundColor: '#f7b34d', borderRadius: '12px'}}
                        
                        >Translating...</Button>
                </div>
                
                <div>
                <div>
                    
                    <Button 
                        id="sign_again_btn"
                        onClick={activateNo} 
                        startIcon={<ThumbDownIcon />} 
                        style={{backgroundColor: '#ff4747', width: '180px', height: '50px' , color: '#FFFFFF', borderRadius: '12px', position:'relative', marginRight: '10px',}}
                        >Sign again</Button>
                    <Button 
                        id="correct_btn"
                        onClick={activateYes} 
                        startIcon={<ThumbUpIcon />}
                        style={{backgroundColor: '#2c7973', width: '180px' , height: '50px', color: '#FFFFFF', borderRadius: '12px', position:'relative', marginLeft:'10px'}}
                        >Correct</Button>
                </div>

                <div>
                    <Link to='/home'>
                        <Button 
                        id="home_btn"
                        onClick={activateHome} 
                        startIcon={<CallEndIcon />}
                        style={{backgroundColor: '#f7b34d', width: '180px' , height: '50px', color: '#000000', borderRadius: '12px', position:'relative',marginTop:'10px', marginRight:'10px'}}
                        >End Convo</Button>
                    </Link>
                    <Link to='/ask'>
                        <Button 
                        id="ask_btn"
                        onClick={activateHome} 
                        startIcon={<QuestionAnswerIcon />}
                        style={{backgroundColor: '#f7b34d', width: '180px' , height: '50px', color: '#000000', borderRadius: '12px', position:'relative',marginTop:'10px', marginLeft:'10px' }}
                        >Ask Question</Button>
                    </Link>
                </div>
                </div>
            </div>
        )
}
export default Translate;