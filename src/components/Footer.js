import React from 'react'
import { Typography, Box, Grid, Container, Stack } from '@mui/material';
import { NavLink } from "react-router-dom";

function Footer() {



    const headingStackStyle = {
        marginBottom:{xs:'15%', sm:'3%'},
    }
    const headingStyle = {
        fontSize:{xs:'1.45em', sm:'2.5em', md:'3em'}
    }
    const navLinkStyle = {
        color:'#FFF',
        textDecoration:'none'
    }

  return (
    <footer>
        <Box
            mt={{xs:'3%', sm:'5%'}}
            px={{xs: 3, sm: 5}}
            py={{ xs: 3, sm: 5}}
            bgcolor="primary.main"
            color="#FFF"
        >
            <Stack justifyContent="center" alignItems="center" sx={headingStackStyle}>
                <Typography variant='h3' sx={headingStyle} >Musical Instruments Store</Typography>
            </Stack>
            <Stack sx={{}} direction={{xs:'column', sm:'row'}} spacing={{ xs: 1, sm: 11, md: 20 }}  justifyContent="center" alignItems="center">
                <NavLink to='/' style={navLinkStyle}><Typography>Home</Typography></NavLink>
                <NavLink to='/home' style={navLinkStyle}><Typography>Menu</Typography></NavLink>
                <NavLink to='/about' style={navLinkStyle}><Typography>About us</Typography></NavLink>
                <NavLink to='/contact' style={navLinkStyle}><Typography>Contact</Typography></NavLink>
            </Stack>
            <Stack justifyContent="center" alignItems="center" sx={{mt:'5%', fontSize:'0.7em'}}>
                <Typography > &copy; 2022 Copyright - DevelopersLab</Typography>
            </Stack>
        </Box>
    </footer>
  )
}

export default Footer