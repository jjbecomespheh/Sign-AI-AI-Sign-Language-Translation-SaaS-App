import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import TodayIcon from '@mui/icons-material/Today';
import ExpandLess from '@mui/icons-material/ExpandLess';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import '@fontsource/montserrat';

const useStyles = makeStyles((theme) =>
        createStyles({
            chatList: {
            width: "80vw",
            height: "80vh",
            marginLeft: "10%",
            marginRight: "10%",
            maxWidth: "500px",
            maxHeight: "700px",
            alignItems: "center",
            },
        })
    );
export default function NestedList(props) {
  const [openLayer1, setOpenLayer1] = React.useState(true);
  const [dataDict, setDataDict] = React.useState(false)
  const classes = useStyles();

  React.useEffect(() =>{
    dataDict == false ? createDataDict(props.data): console.log("");

  },[dataDict]);

  function createDataDict(propsList){
      if(propsList.length<1){
          return {ERROR:"No entries"}
      }
      var mydict = {}
      for(var datapoint of propsList){
          var created_at = datapoint.created_at.split('T')[0];
          var conversation_time = datapoint.created_at.split('T')[1].split(".")[0];
          var conversation_id = datapoint.conversation_id.toString() 
          if(mydict[created_at] === undefined){
            mydict[created_at] = {}
              mydict[created_at][conversation_id] = {index: datapoint.id, conv_time:conversation_time }
          }
          else{
            if(mydict[created_at][conversation_id] === undefined){
              mydict[created_at][conversation_id] = {index: datapoint.id, conv_time:conversation_time }
            }
          }
      }
      setDataDict(mydict)
  }
  const handleClick = () => {
    setOpenLayer1(!openLayer1);
  };
  const history = useHistory();
  const handleClick2 = (index,conv_id) => {
    history.push(`/messages/${index}/${conv_id}`);
}
  function CreateNestedList(args){
    const dataList = args.dataList
    if(dataList.length <1){
        return <div>No entries</div>
    }
    return(
      Object.entries(dataList).map( ([key,value]) =>{
      return (
        <div>
        <Card style={{alignContent: 'left'}}>
          <CardContent style={{backgroundColor: "#42B3AA", fontFamily: 'Montserrat', color: "#404040", alignContent: 'left'}}>
            <ListItemButton size="medium"
                      sx={{
                        '& svg': {
                          color: 'black',
                          transition: '0.2s',
                          transform: 'translateX(0) rotate(0)'
  
                        },
                        '&:hover, &:focus': {
                          bgcolor: 'unset',
                          '& svg:first-of-type': {
                            transform: 'translateX(-4px) rotate(-20deg)',
                          },
                          '& svg:last-of-type': {
                            right: 0,
                            opacity: 1,
                          },
                        },
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          height: '80%',
                          display: 'block',
                          left: 0,
                          width: '1px',
                          bgcolor: 'divider',
                        },
                      }} onClick={handleClick}>
              <ListItemIcon>
                <TodayIcon style={{ color: "#404040" }}/>
              </ListItemIcon>
              <ListItemText primary={key.toString()} id="chat-history-date" style={{fontFamily: 'Montserrat', color: "#404040", alignContent: 'left'}}/>
              {openLayer1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </CardContent >
          {Object.entries(value).map(([conv_id,indices]) => {
            return <Collapse in={openLayer1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding style={{backgroundColor:"#f8f4ec"}}>
                  <ListItemButton size="medium"
                    sx={{
                      '& svg': {
                        color: '#424242',
                        transition: '0.2s',
                        transform: 'translateX(0) rotate(0)',
                      },
                      '&:hover, &:focus': {
                        bgcolor: 'grey',
                        '& svg:first-of-type': {
                          transform: 'translateX(-4px) rotate(-20deg)',
                        },
                        '& svg:last-of-type': {
                          right: 0,
                          opacity: 1,
                        },
                      },
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        height: '80%',
                        display: 'block',
                        left: 0,
                        width: '1px',
                        bgcolor: 'divider',
                      },
                  }}
                onClick={() => handleClick2(indices.index, conv_id)}>
                    <ListItemIcon>
                      <QuestionAnswerIcon />
                    </ListItemIcon>
                    <ListItemText primary={indices.conv_time.toString()} id={conv_id}/>
                </ListItemButton>
              </List>
            </Collapse>
          })}
      </Card>
    </div>
      )})
  )}
 
  return (
    <div className={classes.chatList}>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.radio' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <h2 style={{color: '#26580F', fontFamily: 'Montserrat', marginTop: '50px'}}>
              Chat History
            </h2>
          </ListSubheader>
        }
        >
        <>
          {dataDict ? <CreateNestedList dataList={dataDict} /> : "Lol what is going on"}
        </>
      </List>
    </div>
  );
}
