import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import logo from '../logo.png'
import { useHistory } from "react-router";
import "./coverPage.css";
import '@fontsource/montserrat';
import { useLocation } from 'react-router-dom'
import {bounce} from 'react-animations';
import styled, { keyframes } from 'styled-components';

function CoverPage(){
    const history = useHistory()
    const location = useLocation();
    const Bounce = styled.div`animation: 3s ${keyframes`${bounce}`} infinite`;
   
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
        window.navigator.vibrate(205);
    }
    var statee = 0
    
    function handleOrientationEvent(event) {

        event.stopPropagation();
        
        var B = event.beta;
        if (location.pathname === "/cover-page"){
            if (B > 150 && statee === 0) {
                statee = 1;
                
            }
            else if (B < 100 && statee === 1){

                vibrate();
                window.removeEventListener('deviceorientation', handleOrientationEvent);
                history.push('/tutorial');
            }
        }

    }
    
    if(window.DeviceOrientationEvent) {

        window.addEventListener('deviceorientation', handleOrientationEvent);
      }

    function onClick(){
        vibrate();
        history.push('/tutorial')
    }

        return(
            <div id="cover_page">
                <h1 
                style={{color: '#26580F', fontFamily: 'Montserrat', marginTop: "30px"}}>Let's talk<br/>using this App!</h1>
                <div className="intro">
                    <div style={{
                                position: 'relative', left: '50%', top: '50%',
                                transform: 'translate(-50%, -50%)',
                                marginTop: '120px'}}>
                        <Button
                            id="translated_text"
                            className="NextHome" 
                            variant="contained"
                            style={{width: 350, height: 350, backgroundColor: '#F8F4EC', borderRadius: '12px', color: '#002600', textTransform: "None", fontSize: "22px", fontFamily: 'Montserrat', textAlign: 'center'}}
                            >Your statement will be recorded with our camera, it will be kept confidential and will solely be used for law and training purposes.</Button>
                    </div>
                    <Bounce><h4 style={{
                            position: 'relative', left: '50%', top: '48%',
                            transform: 'translate(-50%, -50%)',
                            color: '#26580F',
                            marginTop: '25px',
                            fontFamily: 'Montserrat',
                            fontSize: '20px',
                            }}>Nod if you are ready</h4></Bounce>
                    <div>
                        <Button 
                        id = "cover_next"
                        className="NextHome" 
                        variant="contained"
                        style={{backgroundColor: '#F49619', width: "300px", color: '#FFFFFF', borderRadius: '12px', margin: '2px', marginTop: '0px', fontFamily: 'Montserrat'}}
                        onClick={()=> onClick()}> 
                            Next
                        </Button>
                    </div>
                </div>                
            </div>
        )
}
export default CoverPage;