import React from "react";
import { Button } from '@material-ui/core'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import {useHistory} from 'react-router-dom';
import HistoryIcon from '@mui/icons-material/History';
import TranslateIcon from '@mui/icons-material/Translate';
import HelpIcon from '@mui/icons-material/Help';
import { v4 as uuidv4 } from 'uuid';
import {store, useGlobalState} from 'state-pool';
//import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';

function Home(){
    const history = useHistory()
    
    function goChatHistory(){
        history.push('/chat-history')
    }

    function goTranslate(){
        var convo_id = uuidv4(); 
        store.setState("conversation_id", convo_id); 
        history.push('/translate')
  
    }

    function goCoverPage(){
        //alert("You clicked Home!")
        history.push('/cover-page')
    }
   
        return(
            <div style={{marginTop: '150px'}}>
                {/* <h3> Welcome to Sign.ai!</h3>
                <h3>To start using Sign.ai</h3>
                <h3>Click on Cover page button</h3> */}
                <Button 
                onClick={goCoverPage} 
                tartIcon={<HelpIcon />} 
                style={{backgroundColor: '#4C7031', color: '#FFFFFF', borderRadius: '12px', margin: '2px',marginTop: '10px', width: '275px', height: '60px', position:'relative'}}
                >Cover Page</Button>
                
                <Button 
                    onClick={goTranslate} 
                    startIcon={<TranslateIcon />} 
                    style={{backgroundColor: '#4C7031', color: '#FFFFFF', borderRadius: '12px', margin: '2px', marginTop: '15px', width: '275px', height: '60px', position:'relative'}}
                    >Translate</Button>
                
                <Button 
                    onClick={goChatHistory} 
                    startIcon={<HistoryIcon />}
                    style={{backgroundColor: '#4C7031', color: '#FFFFFF', borderRadius: '12px', margin: '2px', marginTop: '15px', width: '275px', height: '60px', position:'relative'}}
                    >Chat History</Button>
            </div>
        )
}



export default Home;