import React from "react";
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
import { useState, useRef , Fragment, capture} from "react";
import {Camera} from "react-camera-pro";

import useCamera from "use-camera";

//import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';

function Translate(){
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
        alert("You clicked Home!")
    }
    
    const camera = useRef(null);
    const [image, setImage] = useState(null);

    const ref = useCamera({ audio: false });
   
        return(
            <div>

                {/* <div>
                    <Webcam videoConstraints={videoConstraints}
                        style={{borderRadius: '50px', margin: '5px', height: '500px', width:'300px'}}
                    /> 
                </div> */}

                <div>
                    <video ref={ref} autoPlay width={'300px'} height={'300px'}/>
                </div>

                <div>
                    <Box
                        border={2}
                        borderRadius={2}
                        bheight={300}
                        height={100}
                        width={300}
                        marginLeft={5}
                        width={300}
                        display="flex"
                        order={1}
                        borderColor="black"
                        justifyContent="center"
                        alignItems="center"
                        bgcolor="white"
                        color="black"
                        fontSize={15}
                        >
                        Translating Sign language to Text...
                    </Box>
                </div>

                <div>
                    <Button 
                        onClick={activateYes} 
                        startIcon={<ThumbUpIcon />}
                        style={{backgroundColor: '#008000', color: '#FFFFFF', borderRadius: '15px', margin: '2px', marginTop: '10px'}}
                        >Correct</Button>
                    <Button 
                        onClick={activateNo} 
                        startIcon={<ThumbDownIcon />} 
                        style={{backgroundColor: '#FF0000', color: '#FFFFFF', borderRadius: '15px', margin: '2px', marginTop: '10px'}}
                        >Sign again</Button>
                </div>

                <div>
                <Button 
                        onClick={activateHome} 
                        style={{backgroundColor: '#67549c', color: '#FFFFFF',marginTop: '70px', borderRadius: '15px', margin: '10px', justifyContent: 'left', display: 'flex', justifyContent: 'flex-end'}}
                        >Back To Home</Button>
                </div>
            </div>
        )
}



export default Translate;