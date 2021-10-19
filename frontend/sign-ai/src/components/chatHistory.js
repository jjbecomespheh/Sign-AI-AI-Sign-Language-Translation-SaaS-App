import React, {Component} from 'react';
import axios from 'axios';
import './chatHistory.css';
import MessageDeaf from './messageDeaf';
import MessageOfficer from './MessageOfficer';

export default class ChatHistory extends Component {
    state = {
        error:null,
        isLoaded: false,
        items: []
    }

    componentDidMount(){
        axios.get('/chats.json') //to be edited
        .then(res => res.json())
        .then(result => {
            this.setState({
                isLoaded: true,
                items: result.data
            });
        });
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return(            
            <div>
                console.log(items)
                <MessageOfficer message={"Hello How are you today"}/>
                <MessageDeaf message={"Hi Iam fine thank you"}/>
            </div>)
        }


    };
}