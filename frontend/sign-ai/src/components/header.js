import React from "react";
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

class Header extends React.Component{
    render(){
        return (
            
        <Box sx={{ flexGrow: 1 }}>
            
            <AppBar 
                position="static"
                style={{ background: '#4C7031'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="primary"
                        aria-label="menu"
                        sx={{ mr: 2 }}>
                        
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Sign.ai
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