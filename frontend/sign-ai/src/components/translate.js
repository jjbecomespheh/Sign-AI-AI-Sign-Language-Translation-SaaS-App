import React from "react";
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

export default class Translate extends React.Component{
    render(){
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
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar 
                        position="static"
                        style={{ background: '#2E3B55'}}>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="primary"
                                aria-label="menu"
                                sx={{ mr: 2 }}>
                                
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Sign.ai
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    </Box>
                </div>

                <div>
                    <Webcam videoConstraints={videoConstraints}
                        style={{borderRadius: '50px', margin: '5px', height: '500px'}}
                    />  
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
                        >Wrong</Button>
                </div>

                <div>
                <Button 
                        onClick={activateHome} 
                        style={{backgroundColor: '#67549c', color: '#FFFFFF', borderRadius: '15px', margin: '2px', justifyContent: 'left'}}
                        >Back To Home</Button>
                </div>
            </div>
        )
    }
    

    
}
