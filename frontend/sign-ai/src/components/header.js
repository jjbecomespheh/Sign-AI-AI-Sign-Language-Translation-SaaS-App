import React, { useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import logo2 from '../icon_latest2.png'
import "./header.css";
import { MenuItems } from './MenuItems';
import { Button } from "@material-ui/core";
import { Alert } from "@mui/material";

class Header extends React.Component{
     
    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
    
    


    render(){
        return (
            
        <Box sx={{ flexGrow: 1 }}>
            
            <AppBar 
                position="static"
                style={{ background: '#2c7973'}}>
                <Toolbar>
                    {/*  */}
                    
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} position='relative'>
                    <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
                        <img className="photo2" src={logo2} alt="Logo" style={{margin: 'auto',textAlign: 'center', width:'55px', height: '55px'}}/>
                        
                    </div>
            
                    </Typography>
                </Toolbar>
                
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
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