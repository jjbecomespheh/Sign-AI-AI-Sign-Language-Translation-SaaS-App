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
import '@fontsource/montserrat';

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
        var convo_id = uuidv4(); 
        store.setState("conversation_id", convo_id); 
        history.push('/cover-page')
    }
        return(
            <div style={{marginTop: '150px'}}>
                <div>
                    <Button
                    id = "cover_page"
                    className="NextHome" 
                    variant="contained"
                    onClick={goCoverPage} 
                    startIcon={<HelpIcon />} 
                    style={{backgroundColor: '#2c7973', color: '#FFFFFF', borderRadius: '12px', margin: '2px',marginTop: '15px', width: '275px', height: '60px', position:'relative', fontFamily: 'Montserrat', textTransform: "None", fontSize: '20px'}}
                    >Cover Page</Button>
                </div>
                <div>
                    <Button 
                        id = "newconv"
                        className="NextHome" 
                        variant="contained"
                        onClick={goTranslate} 
                        startIcon={<TranslateIcon />} 
                        style={{backgroundColor: '#f7b34d', color: '#FFFFFF', borderRadius: '12px', margin: '2px', marginTop: '15px', width: '275px', height: '60px', position:'relative', fontFamily: 'Montserrat', textTransform: "None", fontSize: '20px'}}
                        >New Conversation</Button>
                </div>
                <div>
                    <Button 
                        className="NextHome" 
                        variant="contained"
                        onClick={goChatHistory} 
                        startIcon={<HistoryIcon />}
                        style={{backgroundColor: '#2c7973', color: '#FFFFFF', borderRadius: '12px', margin: '2px', marginTop: '15px', width: '275px', height: '60px', position:'relative', fontFamily: 'Montserrat', textTransform: "None", fontSize: '20px'}}
                        >Chat History</Button>
                        </div>
            </div>
        )
}
export default Home;