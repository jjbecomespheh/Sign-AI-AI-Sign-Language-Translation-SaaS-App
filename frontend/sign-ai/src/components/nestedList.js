import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import TodayIcon from '@mui/icons-material/Today';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import {Button} from '@material-ui/core';

export default function NestedList(props) {
  const [openLayer1, setOpenLayer1] = React.useState(true);
  const [openLayer2, setOpenLayer2] = React.useState(true);
  const [dataDict, setDataDict] = React.useState(false)

  React.useEffect(() =>{
    dataDict == false ? createDataDict(props.data) : console.log("DATA DICT IS SET LOL");
    console.log("stuff is ",props.data); 
  },[dataDict]);


  function createDataDict(propsList){
      console.log("this is propslist", propsList)
      if(propsList.length<2){
          return {lol:"what"}
      }
      var mydict = {}
      for(var datapoint of propsList){
          console.log("datapoint is ", datapoint)
          var created_at = datapoint.created_at.toString()
          var conversation_id = datapoint.conversation_id.toString() 
          if(mydict[created_at] === undefined){
              mydict[created_at][conversation_id] = [datapoint.message]
              console.log("added ", mydict[created_at])
          }
          else{
            if(mydict[created_at][conversation_id] === undefined){
              mydict[created_at][conversation_id] = [datapoint.message]
            }
            else{
              mydict[created_at][conversation_id].push(datapoint.message)
            }
              
          }
      }
      setDataDict(mydict)
      console.log("mydict is ", mydict)
  }
  console.log("datadict is ",dataDict);

  const handleClick = () => {
    setOpenLayer1(!openLayer1);
  };

  const handleClick2 = () => {
    setOpenLayer2(!openLayer2);
  };

  function CreateNestedList(args){
    const dataList = args.dataList
    const scam = ["hello", "hi", "lmaoo", "why will this work"]
    {console.log("Please work I will give you 2 dollars", dataList)}
    if(dataList.length <2){
        return <div>Lol length is lesser than one</div>
    }

    return(
      Object.entries(dataList).map( ([key,value]) =>{
        
      return <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Chat History
        </ListSubheader>
      }
    >
        {console.log(key,"is key and value is ",value)}
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <TodayIcon />
          </ListItemIcon>
          <ListItemText primary={key.toString()} />
          {openLayer1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {Object.entries(value).map(([conv_id,messages]) => {

          return <Collapse in={openLayer1} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton onClick={handleClick2}>
                      <ListItemIcon>
                        <QuestionAnswerIcon />
                      </ListItemIcon>
                      <ListItemText primary={conv_id.toString()} />
                      {openLayer2 ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
            {messages.map((message) => {
              return <Collapse in={openLayer2} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <MessageIcon />
                          </ListItemIcon>
                          <ListItemText primary={message.toString()} />
                        </ListItemButton>
                        </List>
                    </Collapse>
                      })}
                  </List>
                </Collapse>
          })}
    </List>
     })
  )}
 

  return (
    <>
      {dataDict ? <CreateNestedList dataList={dataDict} /> : "Lol what is going on"}
    </>
  );
}
