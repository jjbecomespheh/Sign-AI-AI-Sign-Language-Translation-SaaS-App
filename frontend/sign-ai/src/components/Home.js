import React from "react";
import { Button } from '@material-ui/core'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import {useHistory} from 'react-router-dom';
import HistoryIcon from '@mui/icons-material/History';
import TranslateIcon from '@mui/icons-material/Translate';
import HelpIcon from '@mui/icons-material/Help';
//import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';

function Home(){
    const history = useHistory()
    
    function goChatHistory(){
        history.push('/chat-history')
    }

    function goTranslate(){
        history.push('/translate')
    }

    function goCoverPage(){
        //alert("You clicked Home!")
        history.push('/cover-page')
    }
   
        return(
            <div>
                <Button 
                    onClick={goChatHistory} 
                    startIcon={<HistoryIcon />}
                    style={{backgroundColor: '#008000', color: '#FFFFFF', borderRadius: '15px', margin: '2px', marginTop: '10px'}}
                    >Chat History</Button>
                <Button 
                    onClick={goTranslate} 
                    startIcon={<TranslateIcon />} 
                    style={{backgroundColor: '#FF0000', color: '#FFFFFF', borderRadius: '15px', margin: '2px', marginTop: '10px'}}
                    >Translate</Button>
                <Button 
                onClick={goCoverPage} 
                tartIcon={<HelpIcon />} 
                style={{backgroundColor: '#67549c', color: '#FFFFFF',marginTop: '10px', borderRadius: '15px', margin: '2px'}}
                >Cover Page</Button>
            </div>
        )
}



export default Home;