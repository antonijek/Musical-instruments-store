import React from 'react'
import { Typography, Grid, Box, TextField, Stack, Button } from "@mui/material";
import { Link } from 'react-router-dom';
const Page404 = () => {
  return (
    <>
    
        <Box sx={{width:'100%', height:'80vh', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column' }}>
            <Typography variant='h1' sx={{fontSize:'12em', color:'text.secondary' }}>404</Typography>
            <Typography sx={{fontSize:'1.8em' }}>Page not found</Typography>
            <Typography variant='h1' sx={{fontSize:'1.2em', color:'text.secondary' }}>The page you are looking for doesn't exist or an other error occurred</Typography>
            <Typography  sx={{fontSize:'1.2em', padding:'2px'}}><Link to='/'>Go back</Link></Typography>
        </Box>

    </>
  )
}

export default Page404