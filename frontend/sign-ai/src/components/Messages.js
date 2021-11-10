import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import {useParams} from 'react-router-dom';
import {MessageLeft} from './MessageTemp';
import {MessageRight} from './MessageTemp';

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
            alignItems: "center",
            justifyContent: "center"
            },
            messagesBody: {
            width: "calc( 100% - 20px )",
            margin: 10,
            overflowY: "scroll",
            height: "calc( 100% - 80px )"
            }
        })
    );

export default function Message () {

    const {index, conv_id} = useParams()
    const [message, setMessage] = useState([])
    const [dateCur, setDateCur] = useState(null)
    const classes = useStyles();
    


    useEffect(()=> {
        axios.get(`/chats/${index}.json`).then((res) => {
            console.log(res.data.created_at.split('T'));
            setDateCur(res.data.created_at.split('T')[0].toString()); return});    
        
        axios.get('/chats.json').then((res) => {
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
                {messageObj.sender == 'Me' ? 
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
        <Paper className={classes.paper} zDepth={2}>
          <Paper id="style-1" className={classes.messagesBody}>
           {allMessages(message)}
          </Paper>
        </Paper>
      </div>
    )

}