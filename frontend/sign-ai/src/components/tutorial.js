import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useHistory} from 'react-router-dom';
import '@fontsource/montserrat';

function Tutorial(){
    const history = useHistory()
    function onClick(){
        history.push('/translate')
    }
        return(
            <div>
                <h1 
                
                style={{color: '#26580F', fontFamily: 'Montserrat'}}>Tutorial </h1>
               
                <div style={{
                            position: 'relative', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)',
                            marginTop: '200px'}}>
                    <Button
                        id="tutorial info"
                        
                        className="NextHome" 
                        variant="contained"
                        style={{width: 350, height: 300, backgroundColor: '#F8F4EC', borderRadius: '12px', color: '#002600', textTransform: "None", fontSize: "22px", fontFamily: 'Montserrat', textAlign: 'center'}}
                        >Start signing when the Officer turns the phone screen to you. Nod when you are done signing</Button>
                </div>
                
                <h4 style={{
                            position: 'relative', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)',
                            marginTop: '0px', 
                            color: '#26580F',
                            fontFamily: 'Montserrat',
                            fontSize: '20px'
                            }}>Nod if you are ready!</h4>
                <Button 
                    id="tutorial_next"
                    className="NextHome" 
                    variant="contained"
                    style={{backgroundColor: '#F49619', width: "300px", color: '#FFFFFF', borderRadius: '12px', margin: '2px', marginTop: '5px', fontFamily: 'Montserrat'}}
                    onClick={()=> onClick()}>
                Next
                </Button>
            </div>
            
        )
}

export default Tutorial;