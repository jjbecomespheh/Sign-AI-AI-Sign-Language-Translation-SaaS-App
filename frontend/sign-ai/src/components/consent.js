import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useHistory } from "react-router";

function Consent(){
    const history = useHistory()
    function onClick(){
        history.push('/tutorial')
    }
    
        return(
            <div>
                <h1>Consent </h1>
                {/* <h3>We will like to inform you that your statement will be recorded via the HomeTeam Officers camera.</h3>
                <h3>All recordings will be kept confidential and will solely be used for law and training purposes.</h3>
                <h3>Show a THUMBS UP if you consent</h3>
                <h3>Show a THUMBS DOWN if you do not consent</h3> */}
                <div style={{
                            position: 'relative', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)',
                            marginTop: '150px'}}>
                    <Button
                        id="translated_text"
                        className="NextHome" 
                        variant="contained"
                        style={{width: 350, height: 250, backgroundColor: '#f7b34d', borderRadius: '12px', color: '#000000'}}
                        
                        >We will like to inform you that your statement will be recorded via the HomeTeam Officers camera. All recordings will be kept confidential and will solely be used for law and training purposes.</Button>
                </div>
                <h3>Show a thumbs up if you consent</h3>
                <h3>Show a thumbs down if you do not consent</h3>

                <Button className="NextHome" 
                    variant="contained"
                    style={{backgroundColor: '#F49619', color: '#FFFFFF', borderRadius: '15px', margin: '2px', marginTop: '10px'}}
                    onClick={()=> onClick()}>
                    Next
                </Button>
            </div>
            
        )
}

export default Consent;