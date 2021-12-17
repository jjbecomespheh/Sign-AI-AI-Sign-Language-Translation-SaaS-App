import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import {useParams} from 'react-router-dom';
import {MessageLeft} from './MessageTemp';
import {MessageRight} from './MessageTemp';
import ListSubheader from '@mui/material/ListSubheader';
import '@fontsource/montserrat';
import {useHistory} from 'react-router-dom';
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) =>
        createStyles({
            paper: {
            width: "80vw",
            height: "80vh",
            maxWidth: "500px",
            maxHeight: "700px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            position: "relative"
            },
            paper2: {
            width: "80vw",
            maxWidth: "500px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            position: "relative"
            },
            container: {
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            justifyContent: "center"
            },
            messagesBody: {
            width: "calc( 100% - 30px )",
            margin: 10,
            overflowY: "scroll",
            height: "calc( 100% - 100px )"
            },
            heading: {
                display: "flex",
                alignItems: "top",
                justifyContent: "center"
                },

        })
    );

export default function Message () {
    const history = useHistory()
    
    function goChatHistory(){
        history.push('/chat-history')
    }

    const {index, conv_id} = useParams()
    const [message, setMessage] = useState([])
    const [dateCur, setDateCur] = useState(null)
    const classes = useStyles();
    


    useEffect(()=> {
        axios.get(`https://sign-ai-service-x4uj6fmx2a-as.a.run.app/chats/${index}.json`, { crossdomain: true }).then((res) => {
            setDateCur(res.data.created_at.split('T')[0].toString()); return});    
        
        axios.get('https://sign-ai-service-x4uj6fmx2a-as.a.run.app/chats.json', { crossdomain: true }).then((res) => {
            const res_data = res.data
            var needed_messages = []
            for(var datapoint of res_data){
                if(datapoint.created_at.split('T')[0].toString() == dateCur && datapoint.conversation_id.toString() == conv_id.toString()){
                    needed_messages.push({sender: datapoint.sender, message: datapoint.message})
                }
            }
            setMessage(needed_messages);
            
            return;
        })
    
    },[dateCur])

    function allMessages(myMessages){
        return(
            myMessages.map((messageObj) => {
                return(<div>
                {(messageObj.sender == 'Police' || messageObj.sender.split()[0] == 'Officer') ? 
            <MessageRight
                message={messageObj.message}
                photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                displayName={messageObj.sender}
                avatarDisp={true}
            />
            : <MessageLeft
            message={messageObj.message}
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName={messageObj.sender}
            avatarDisp={true}/>
            }
        </div>)
        })
        )
            
    }
    
    return (
        <div className={classes.container}>
            <ListSubheader component="div" id="nested-list-subheader">
                <h2 className={classes.heading} styles={{color: '#26580F', fontFamily: 'Montserrat'}}>
                    Conversation
                </h2>
            </ListSubheader>
            <Paper className={classes.paper} zDepth={2}>
                <Paper id="style-1" className={classes.messagesBody} style={{ background: "#D3D3D3" }} >
                    <p>
                    {allMessages(message)}
                    </p>
                </Paper>
            </Paper>
            <Button 
                        className="NextHome" 
                        variant="contained"
                        onClick={goChatHistory} 
                        style={{backgroundColor: '#2c7973', color: '#FFFFFF', borderRadius: '12px', margin: '2px', marginTop: '15px', width: '275px', height: '60px', position:'relative', fontFamily: 'Montserrat', textTransform: "None", fontSize: '20px'}}
                        >Back</Button>
      </div>
    )

}