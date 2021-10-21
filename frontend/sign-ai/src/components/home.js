import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function Home(){
    
        return(
            <div>
                <h1>HELLO </h1>
                <h3>We will be using SignOn.ai for effective communication between you and our HomeTeam Officer!</h3>
                <h3>This will be done via a transcription service through the recording of your signing.</h3>
                <h3>After reading this Please show a thumbs up to go on to the tutorial</h3>
                <Button variant="contained" href="/consent">
                Next
      </Button>
            </div>
            
        )
}

export default Home;