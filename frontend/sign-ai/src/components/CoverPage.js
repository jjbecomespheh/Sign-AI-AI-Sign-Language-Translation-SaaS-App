import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import logo from '../logo.png'
import { useHistory } from "react-router";
import "./coverPage.css";
import '@fontsource/montserrat';

console.log(logo); 

function CoverPage(){
    const history = useHistory()
    function onClick(){
        history.push('/tutorial')
    }
        return(
            <div>
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
                    <h4 style={{
                                position: 'absolute', left: '50%', top: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: '#26580F',
                                marginTop: '230px',
                                fontFamily: 'Montserrat',
                                fontSize: '20px',
                                }}>Nod to consent</h4>
                    <div>
                        <Button 
                        id = "cover_next"
                        className="NextHome" 
                        variant="contained"
                        style={{backgroundColor: '#F49619', width: "300px", color: '#FFFFFF', borderRadius: '12px', margin: '2px', marginTop: '25px', fontFamily: 'Montserrat'}}
                        onClick={()=> onClick()}> 
                            Next
                        </Button>
                    </div>
                </div>                
        </div>
        )
}
export default CoverPage;