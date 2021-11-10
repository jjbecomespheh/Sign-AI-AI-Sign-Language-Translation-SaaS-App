import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import { containerClasses, TextField } from "@mui/material";
import {useHistory} from 'react-router-dom';
import axios from "axios";


function Ask(){
    const history = useHistory()

    const [question, setQuestion] = useState('');

    const askButton = () => {
        axios.post('/chats.json',{Officer: question})
        alert("You submitted question!")

    }

    
    function activateHome(){
        //alert("You clicked Home!")
        history.push('/')
    }


    return(
        <div>


            <div>
                <TextField
                    id="asking"
                    label="Ask Away!!"
                    multiline
                    rows={4}
                    hintText="Enter Question Here..."
                    style={{width: 300, height: 50, alignContent: "center", margin: '15px'}}
                    value={question}
                    onChange={(event) => {setQuestion(event.target.value)}}
                    />
                
            </div>

            <div>
                <Button 
                    onClick={askButton} 
                    style={{backgroundColor: '#FF0000', color: '#FFFFFF', borderRadius: '15px', margin: '2px', marginTop: '70px'}}
                    >Submit</Button>
            </div>
                

            <div>
                <Link to='/home'>
                    <Button 
                    onClick={activateHome} 
                    style={{backgroundColor: '#67549c', color: '#FFFFFF',marginTop: '50px', borderRadius: '15px', margin: '10px'}}
                    >Back To Home</Button>
                </Link>

            </div>
        </div>
    )


}

export default Ask;