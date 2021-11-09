import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Consent(){
    
        return(
            <div>
                <h1>Consent </h1>
                <h3>We will like to inform you that your statement will be recorded via the HomeTeam Officers camera.</h3>
                <h3>All recordings will be kept confidential and will solely be used for law and training purposes.</h3>
                <h3>Show a THUMBS UP if you consent</h3>
                <h3>Show a THUMBS DOWN if you do not consent</h3>
                <Button variant="contained" href="/tutorial">
                    Next
                </Button>
            </div>
            
        )
}

export default Consent;