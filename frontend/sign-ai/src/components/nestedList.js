import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function NestedList(props) {
  const [open, setOpen] = React.useState(true);
  const [dataDict, setDataDict] = React.useState(props.data)

React.useEffect(() =>
 {  createDataDict(props.data);console.log("stuff is ",props.data) },[dataDict]);

  function createDataDict(propsList){
      console.log("this is propslist", propsList)
      if(propsList.length<2){
          return
      }
      var mydict = {}
      for(var datapoint of propsList){
          console.log("datapoint is ", datapoint)
          if(mydict.datapoint.created_at === undefined){
              mydict[datapoint.created_at] = [datapoint.conversation_id]
          }
          else{
              mydict[datapoint.created_at] = mydict[datapoint.created_at].push(datapoint.conversation_id)
          }
      }
      setDataDict(mydict)
  }
  const handleClick = () => {
    setOpen(!open);
  };

  function CreateNestedList(dataList){
      if(dataList.length <2){
          return <div>Lol length is lesser than one</div>
      }
      return(
      Object.keys(dataList).map((data,datapoints) =>{
      <div> 
      <ListItemButton onClick={handleClick}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary={data} />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    {dataList[data].map((datapoint) => {
        <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={datapoint} />
          </ListItemButton>
        </List>
      </Collapse>
        })}
    </div>
    })
      )}
 

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Chat History
        </ListSubheader>
      }
    >
      <CreateNestedList dataList={dataDict} />
    </List>
  );
}
