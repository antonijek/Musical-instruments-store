import { React }from 'react'
import { Typography, Box, Grid, Container, Stack } from '@mui/material';
import { NavLink } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from '@mui/material/Link';

function Footer() {

    const headingStackStyle = {
        marginBottom:{xs:'15%', sm:'3%'},
    }
    const headingStyle = {
        fontSize:{xs:'1.45em', sm:'2.5em', md:'3em'},
        marginTop:{xs:'5%', sm:'2%'}
    }
    const navLinkStyle = {
        color:'#FFF',
        textDecoration:'none',
    }

    const navTextStyle = {
        fontSize:{xs:'1.3em', sm:'1.2em'}
    }

    const socialStackStyle = {
        width:'100%',
        marginTop:{xs:'15%', sm:'3%'},
        marginBottom:{xs:'15%', sm:'3%'}
    }

    const socialIconStyle = {
        fontSize:{xs:'1.5em', sm:'2em'}
    }

    const copyrightStackStyle = {
        marginTop:'4%',
        paddingBottom:'5px',
        fontSize:'0.7em'
    }

  return (
    <footer>
        <Box
            mt={{xs:'3%', sm:'5%'}}
            bgcolor="primary.main"
            color="#FFF"
        >
            <Stack justifyContent="center" alignItems="center" sx={headingStackStyle}>
                <Typography variant='h3' sx={headingStyle} >Musical Instruments Store</Typography>
            </Stack>
            <Stack direction={{xs:'column', sm:'row'}} spacing={{ xs: 1, sm: 11, md: 20 }}  justifyContent="center" alignItems="center">
                <NavLink to='/' style={navLinkStyle}><Typography sx={navTextStyle}>Home</Typography></NavLink>
                <NavLink to='/home' style={navLinkStyle}><Typography sx={navTextStyle}>Menu</Typography></NavLink>
                <NavLink to='/about' style={navLinkStyle}><Typography sx={navTextStyle}>About us</Typography></NavLink>
                <NavLink to='/contact' style={navLinkStyle}><Typography sx={navTextStyle}>Contact</Typography></NavLink>
            </Stack>
            <Stack direction='row' spacing={8} justifyContent={{xs:"space-around", sm:"center"}} alignItems="center" sx={socialStackStyle}>
                <Link href='#' sx={{color:'#FFF'}}><FacebookIcon sx={socialIconStyle}/></Link>
                <Link href='#' sx={{color:'#FFF'}}><InstagramIcon sx={socialIconStyle} /></Link>
                <Link href='#' sx={{color:'#FFF'}}><TwitterIcon sx={socialIconStyle} /></Link>
                <Link href='#' sx={{color:'#FFF'}}><YouTubeIcon sx={socialIconStyle} /></Link>
            </Stack>
            <Stack justifyContent="center" alignItems="center" sx={copyrightStackStyle}>
                <Typography > &copy; 2022 Copyright - DevelopersLab</Typography>
            </Stack>
        </Box>
    </footer>
  )
}

export default Footer