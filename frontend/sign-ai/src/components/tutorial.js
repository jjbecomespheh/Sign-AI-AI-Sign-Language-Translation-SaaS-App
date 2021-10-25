import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useHistory} from 'react-router-dom'; 
function Tutorial(){
    const history = useHistory()
    
        return(
            <div>
                <h1>Tutorial </h1>
                <h3>To use SignOn.ai, start signing when the HomeTeam Officer shows a thumbs up.</h3>
                <h3>Once done, Show a thumbs up and hold for 3 seconds to mark the end of the signing</h3>
                <h3>Show THUMBS UP once ready!</h3>
                <Button onClick={() => history.push('/')} variant="contained" href="/translate">
                Next
                </Button>
            </div>
            
        )
}

export default Tutorial;