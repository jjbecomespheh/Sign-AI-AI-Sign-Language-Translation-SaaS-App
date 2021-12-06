import React from "react";
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import logo2 from '../icon_latest.png'
import "./header.css";

console.log(logo2); // /logo.84287d09.png
class Header extends React.Component{
    render(){
        return (
            
        <Box sx={{ flexGrow: 1 }}>
            
            <AppBar 
                position="static"
                style={{ background: '#2c7973'}}>
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="primary"
                        aria-label="menu"
                        sx={{ mr: 2 }}>
                        
                        <MenuIcon />
                    </IconButton> */}
                    
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} position='relative'>
                    <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
                        <img className="photo2" src={logo2} alt="Logo" style={{margin: 'auto',textAlign: 'center', width:'120px'}}/>
                    </div>
                    
                    </Typography>
                </Toolbar>
            </AppBar>
            <div
      style={{
        backgroundColor: 'blue',
        
      }}
    />
            </Box>
            )
    }
}
export default Header;