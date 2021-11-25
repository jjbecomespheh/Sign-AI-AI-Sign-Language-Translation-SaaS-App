import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useHistory } from "react-router";

//Consent 
function Consent(){
    const history = useHistory()
    function onClick(){
        history.push('/tutorial')
    }
        return(
            <div>
                <h1>Consent </h1>
                <div style={{
                            position: 'relative', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)',
                            marginTop: '210px'}}>
                    
                    <Button
                        id="translated_text"
                        className="NextHome" 
                        variant="contained"
                        style={{width: 350, height: 220, backgroundColor: '#F49619', borderRadius: '12px', color: '#000000', textTransform: 'None', fontSize: '18px', textAlign: 'center'}}
                        >We will like to inform you that your statement will be recorded via the HomeTeam Officers camera. All recordings will be kept confidential and will solely be used for law and training purposes.
                    </Button>
                </div>

                <Button 
                    id="consent_next"
                    className="NextHome" 
                    variant="contained"
                    style={{backgroundColor: '#F49619', width: 130, color: '#FFFFFF', borderRadius: '12px', margin: '2px', marginTop: '10px'}}
                    onClick={()=> onClick()}>
                    Next
                </Button>                
            </div>
        )
}
export default Consent;