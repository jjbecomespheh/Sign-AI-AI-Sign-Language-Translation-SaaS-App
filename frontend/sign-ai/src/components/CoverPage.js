import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import logo from '../logo.png'
import { useHistory } from "react-router";
import "./coverPage.css";

console.log(logo); // /logo.84287d09.png

function CoverPage(){
    const history = useHistory()
    function onClick(){
        history.push('/consent')
    }
        return(
            
            <div>
                <div className="intro">
                <img className="photo" src={logo} alt="Logo"/>
                    <h2>HELLO! </h2>
                    <h3>We will be using SignOn.ai for effective communication between you and our HomeTeam Officer!</h3>
                    <h3>This will be done via a transcription service through the recording of your signing.</h3>
                    <h3>After reading this Please show a thumbs up to go on to the tutorial</h3>
                    <Button 
                    className="NextHome" 
                    variant="contained" 
                    onClick={()=> onClick()}
                    size="small" >
                        Next
                    </Button>
                </div>
                
                
        </div>
            
            
        )
}

export default CoverPage;