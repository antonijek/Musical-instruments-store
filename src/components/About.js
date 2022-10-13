import React from 'react'
import { Typography, Grid, Box, TextField, Stack, Button } from "@mui/material";

const About = () => {
  return (
    <>
        <Grid sx={{backgroundImage:`url("../images/pianoBckgr.jpg")`, width:'100%', marginTop:'5%', height:'50vh', backgroundPositionX:'50%'}} />

        <Grid sx={{bgcolor:'primary.main', width:'100%', height:'8vh'}}>
            <Typography variant='h2' sx={{margin:'0 auto', marginTop:'2%', color:'white', textAlign:'center'}}>About us</Typography>
        </Grid>
        <Grid sx={{ width:'100%', height:'auto'}}>
            <Typography sx={{color:'text.secondary', fontSize:'1.2em', padding:'2%', letterSpacing: '', lineHeight:'160%'}}>Musical Instrument Store ltd is part of the Euro-Unit group, which is a leading company in the sale of musical instruments and professional audio equipment in this part of Europe. Our company started operating in Montenegro in 2007, and today we also operate in neighboring countries, Serbia, Macedonia, Bosnia and Herzegovina, Kosovo and Albania. <br /><br />
            Euro-Unit Montenegro sells, equips and maintains professional audio equipment and musical instruments, rents instruments and equipment for concerts, conferences and similar events, as well as designs, installs and maintains sound systems for all types of business premises, public institutions, schools, cafes, clubs, as well as conference systems.
            <br /><br />
            Euro Unit Montenegro develops its business through three main segments:<br />
            Retail - In our shop we have a constant offer of various equipment and musical instruments from a large number of manufacturers. Our products stand out on the Montenegrin market due to their selection and quality, and their prices are in the range of the lowest European standards.<br /><br />
            Design and installation - Through our independent projects and in cooperation with a list of partner architectural studios and contractors, we have so far implemented a large number of professional audio/conference and multimedia system projects. The success, quality and sustainability of our projects make design one of the most important segments of our business, with which we have earned the great trust of our clients.<br /><br />

            </Typography>
        </Grid>
        <Box sx={{ width:'100%', height:'auto'}}>
            <Typography variant='h3' sx={{margin:'0 auto', color:'text.secondary', textAlign:'center'}}>Our partners:</Typography>
            <Stack direction={{ xs:'column', sm:'row' }} justifyContent="space-around" alignItems="center" spacing={0} sx={{marginTop:'5%'}}>
                <Box sx={{marginBottom:{xs:'13%', sm:'0'}}}><img src='../images/logotype1.png' alt='logotype' width={100} height={80}></img></Box>
                <Box sx={{marginBottom:{xs:'13%', sm:'0'}}}><img src='../images/logotype2.png' alt='logotype' width={100} height={80}></img></Box>
                <Box sx={{marginBottom:{xs:'13%', sm:'0'}}}><img src='../images/logotype3.png' alt='logotype' width={100} height={70}></img></Box>
                <Box sx={{marginBottom:{xs:'13%', sm:'0'}}}><img src='../images/logotype4.png' alt='logotype' width={100} height={80}></img></Box>
            </Stack>
        </Box>
        <Box>

        </Box>

    </>
  )
}

export default About