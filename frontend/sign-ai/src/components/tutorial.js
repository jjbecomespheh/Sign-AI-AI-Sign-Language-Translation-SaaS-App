import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useHistory} from 'react-router-dom';
import background from "../placeholder.png";

function Tutorial(){
    const history = useHistory()
    function onClick(){
        history.push('/translate')
    }
        return(
            <div style={{ backgroundImage: `url(${background})` }}>
                <h1>Tutorial </h1>
                <h3>To use SignOn.ai, start signing when the HomeTeam Officer shows a thumbs up.</h3>
                <h3>Once done, Show a thumbs up and hold for 3 seconds to mark the end of the signing</h3>
                <h3>Show THUMBS UP once ready!</h3>
                <Button className="NextHome" 
                    variant="contained"
                    style={{backgroundColor: '#F49619', color: '#FFFFFF', borderRadius: '15px', margin: '2px', marginTop: '10px'}}
                    onClick={()=> onClick()}>
                Next
                </Button>
            </div>
            
        )
}

export default Tutorial;