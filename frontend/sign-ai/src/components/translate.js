import React from "react";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Webcam from "react-webcam";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
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
                <div width={'300px'} height={'300px'}
                    style={{borderRadius: '25px', marginTop: '20px', alignContent: 'center'}}>
                    <VideoRecorder
                        onRecordingComplete={videoBlob => {
                        // Do something with the video...
                        console.log('videoBlob', videoBlob)
                        }}
                    />
                </div>

                <div>
                    <TextField
                        id="translation"
                        label="Translating.."
                        multiline
                        rows={4}
                        hintText="Translating Sign language to Text..."
                        style={{width: 300, height: 50, alignContent: "center", margin: '15px'}}
                        />
                </div>

                <div>
                    <Button 
                        id="correct_btn"
                        onClick={activateNo} 
                        startIcon={<ThumbDownIcon />} 
                        style={{backgroundColor: '#FF0000', color: '#FFFFFF', borderRadius: '15px', margin: '2px', marginTop: '70px'}}
                        >Sign again</Button>
                    <Button 
                        id="sign_again_btn"
                        onClick={activateYes} 
                        startIcon={<ThumbUpIcon />}
                        style={{backgroundColor: '#008000', color: '#FFFFFF', borderRadius: '15px', margin: '2px', marginTop: '70px'}}
                        >Correct</Button>
                </div>

                <div>
                    <Link to='/home'>
                        <Button 
                        id="home_btn"
                        onClick={activateHome} 
                        style={{backgroundColor: '#67549c', color: '#FFFFFF',marginTop: '50px', borderRadius: '15px', margin: '10px'}}
                        >Back To Home</Button>
                    </Link>
                </div>
            </div>
        )
}
export default Translate;