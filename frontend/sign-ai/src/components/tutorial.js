import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useHistory} from 'react-router-dom';

function Tutorial(){
    const history = useHistory()
    function onClick(){
        history.push('/translate')
    }
        return(
            <div>
                <h1>Tutorial </h1>
               
                

                <div style={{
                            position: 'relative', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)',
                            marginTop: '110px'}}>
                    <Button
                        id="translated_text"
                        style={{width: 300, height: 180, backgroundColor: '#f7b34d', borderRadius: '12px', color: '#000000'}}
                        >To use Sign.ai, start signing when the HomeTeam Officer shows a thumbs up. Once done, Show a thumbs up and hold for 3 seconds to mark the end of the signing</Button>
                </div>
                
                <h4>Show thumbs up once ready!</h4>
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