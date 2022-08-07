import React from 'react'
import { Typography, Grid, Box, TextField, Stack, Button } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {


    const textFieldStyle = {
        width:'70%',
    }

  return (
    <>
    <Grid container xs={12}>
        <Typography variant='h1' sx={{margin:'0 auto', marginTop:'  5%'}}>Contact Us</Typography>
    </Grid>
    <Grid container xs={12} sx={{ marginTop:'5%', height:'40vh'}}>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.952650431829!2d19.25227401574981!3d42.42874273875333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deb15a367d2cd%3A0xb09e9947caeea0d7!2sDevelopers%20Lab!5e0!3m2!1sbs!2s!4v1659729445112!5m2!1sbs!2s"
            title='gglmaps' 
            style={{width:'100%', height:'100%', border:'0'}}
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </Grid>
    <Grid container sx={{marginTop:'5%'}}>
        <Grid item xs={12} md={6} sx={{backgroundColor:'', height:'60vh'}}>


                <Typography sx={{textAlign:'center', fontSize:'2.0em', padding:'5%'}}>Send your comments</Typography>
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Name"
                    variant="filled"
                    sx={textFieldStyle}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Email"
                    variant="filled"
                    sx={textFieldStyle}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Subject"
                    variant="filled"
                    sx={textFieldStyle}
                />
                <TextField
                    id="filled-multiline-flexible"
                    label="Multiline"
                    multiline
                    rows={4}
                    value='textfield'
                    variant="filled"
                    sx={textFieldStyle}
                />
                <Button variant="outlined" sx={{width:'40%', padding:'10px', borderRadius:'0'}}>Send</Button>
            </Stack>

        </Grid>
        <Grid item xs={12} md={6} sx={{backgroundColor:'', height:'60vh'}}>
        <Typography sx={{textAlign:'center', fontSize:'2.0em', padding:'5%'}}>Information</Typography>
        <Typography sx={{textAlign:'center', fontSize:'1.3em', padding:'2px', marginBottom:'10%'}}><b>Musical Instruments Store</b></Typography>
        <Stack
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            spacing={6}
        >
            <Stack direction='row' alignItems="flex-start"><LocationOnIcon fontSize='large'/><Typography sx={{fontSize:'1.2em', fontStyle:'italic', marginLeft:'5px', width:'15vw'}}> Radosava Burica, Podgorica</Typography></Stack>
            <Stack direction='row' alignItems="flex-start"><PhoneIcon fontSize='large'/><Typography sx={{fontSize:'1.2em', fontStyle:'italic', marginLeft:'5px', width:'15vw'}}> +382 67 236 178</Typography></Stack>
            <Stack direction='row' alignItems="flex-start"><AccessTimeFilledIcon fontSize='large'/><Typography sx={{fontSize:'1.2em', fontStyle:'italic', marginLeft:'5px', width:'15vw'}}> 09:00h - 20:00h</Typography></Stack>
            <Stack direction='row' alignItems="flex-start"><EmailIcon fontSize='large'/><Typography sx={{fontSize:'1.2em', fontStyle:'italic', marginLeft:'5px', width:'15vw'}}> mus.instruments@store.me</Typography></Stack>
            
        </Stack>

        </Grid>
    </Grid>
    </>
  )
}

export default Contact