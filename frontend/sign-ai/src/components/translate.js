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

function Translate(){
        
    const videoConstraints = {
        facingMode: "user"
        };
    
    function activateYes(){
        alert("You clicked Correct!")
    }

    function activateNo(){
        alert("You clicked Wrong!")
    }

    function activateHome(){
        alert("You clicked Home!")
    }
    
        return(
            <div>

                <div>
                    <Webcam videoConstraints={videoConstraints}
                        style={{borderRadius: '50px', margin: '5px', height: '500px', width:'300px'}}
                    />  
                </div>
                
                <div>
                    <Typography
                        style={{borderRadius: '20px', margin: '5px', height: '50px', width:'400px'}}
                    >Translating...Translating...Translating...Translating</Typography>
                </div>

                <div>
                    <Button 
                        onClick={activateYes} 
                        startIcon={<ThumbUpIcon />}
                        style={{backgroundColor: '#008000', color: '#FFFFFF', borderRadius: '15px', margin: '2px'}}
                        >Correct</Button>
                    <Button 
                        onClick={activateNo} 
                        startIcon={<ThumbDownIcon />} 
                        style={{backgroundColor: '#FF0000', color: '#FFFFFF', borderRadius: '15px', margin: '2px'}}
                        >Sign again</Button>
                </div>

                <div>
                <Button 
                        onClick={activateHome} 
                        style={{backgroundColor: '#67549c', color: '#FFFFFF', borderRadius: '15px', margin: '2px', justifyContent: 'left', display: 'flex', justifyContent: 'flex-end'}}
                        >Back To Home</Button>
                </div>
            </div>
        )
}

export default Translate;