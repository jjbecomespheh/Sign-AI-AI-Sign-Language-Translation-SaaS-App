import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import logo from '../logo.png'
// import background from "../placeholder.png";
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
                <div style={{
                            position: 'relative', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)',
                            marginTop: '30px'}}>
                    <Button
                        id="translated_text"
                        style={{width: 300, height: 180, backgroundColor: '#f7b34d', borderRadius: '12px', color: '#000000'}}
                        >We will be using Sign.ai for effective communication between you and our HomeTeam Officer! After reading this Please show a thumbs up to go on to the tutorial</Button>
                </div>
                    <div>
                        <Button 
                        className="NextHome" 
                        variant="contained"
                        style={{backgroundColor: '#F49619', color: '#FFFFFF', borderRadius: '15px', margin: '2px', marginTop: '40px'}}
                        onClick={()=> onClick()}> 
                            Next
                        </Button>
                    </div>
                </div>                
        </div>
            
            
        )
}

export default CoverPage;