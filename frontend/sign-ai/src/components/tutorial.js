import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useHistory} from 'react-router-dom';
import '@fontsource/montserrat';
import { useLocation } from 'react-router-dom'
import {bounce} from 'react-animations';
import styled, { keyframes } from 'styled-components';


function Tutorial(){
    const history = useHistory()
    const Bounce = styled.div`animation: 3s ${keyframes`${bounce}`} infinite`;

    const location = useLocation();

    function vibrate() {
        if (!window) {
            return;
        }
        if (!window.navigator) {
            return;
        }
        if (!window.navigator.vibrate) {
            return;
        }
        window.navigator.vibrate(250);
    }

    var statee = 0

    function handleOrientationEvent(event) {

        event.stopPropagation();
        
        var B = event.beta;
        if (location.pathname === "/tutorial"){
            if (B > 150 && statee === 0) {
                statee = 1;
                
            }
            else if (B < 100 && statee === 1){
                vibrate();
                window.removeEventListener('deviceorientation', handleOrientationEvent);
                history.push('/translate');
            }
        }

    }
    
    if(window.DeviceOrientationEvent) {

        window.addEventListener('deviceorientation', handleOrientationEvent);
      }

    function onClick(){
        vibrate();
        history.push('/translate')
    }
        return(
            <div>
                <h1 
                style={{color: '#26580F', fontFamily: 'Montserrat', marginTop: '50px'}}>Tutorial </h1>
                <div style={{
                            position: 'relative', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)',
                            marginTop: '215px'}}>
                    <Button
                        id="tutorial info"
                        className="NextHome" 
                        variant="contained"
                        style={{width: 350, height: 300, backgroundColor: '#F8F4EC', borderRadius: '12px', color: '#002600', textTransform: "None", fontSize: "22px", fontFamily: 'Montserrat', textAlign: 'center'}}
                        >Start signing when the Officer turns the phone screen to you. Nod when you are done signing</Button>
                </div>
                <Bounce><h4 style={{
                            position: 'relative', left: '50%', top: '48%',
                            transform: 'translate(-50%, -50%)',
                            color: '#26580F',
                            marginTop: '0px',
                            fontFamily: 'Montserrat',
                            fontSize: '20px',
                            }}>Nod if you are ready</h4></Bounce>
                <div>
                    <Button 
                        id="tutorial_next"
                        className="NextHome" 
                        variant="contained"
                        style={{backgroundColor: '#F49619', width: "300px", color: '#FFFFFF', borderRadius: '12px', margin: '2px', marginTop: '0px', fontFamily: 'Montserrat'}}
                        onClick={()=> onClick()}>
                    Next
                    </Button>
                </div>
            </div>
        )
}
export default Tutorial;