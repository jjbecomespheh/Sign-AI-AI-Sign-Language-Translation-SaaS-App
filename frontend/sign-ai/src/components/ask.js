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


    return(
        <div>

            <div style={{marginTop: '10px'}}>
                Thumbs up if you understand the question!
            </div>
            <div>
                <TextField
                    id="asking"
                    label="Questions to ask Deaf/Mute Person:"
                    multiline = {true}
                    rows={8}
                    hintText="Enter Question Here..."
                    style={{width: 350, height: 500, alignContent: "center", margin: '15px', fontSize: 50}}
                    value={question}
                    onChange={(event) => {setQuestion(event.target.value)}}
                    multiline InputProps={{style: {fontSize: 50}}} // font size of input text
                    InputLabelProps={{style: {fontSize: 20}}} // font size of input label
                    />
                
            </div>

            <div>
                <Link to='/translate'>
                    <Button 
                        onClick={askButton} 
                        style={{backgroundColor: '#ff4747', width: 200, color: '#000000', borderRadius: '12px', margin: '2px', marginTop: '60px', height: '50px'}}
                        >Submit</Button>
                </Link>
            </div>


        </div>
    )


}

export default Ask;