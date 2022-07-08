import useRegister from './useRegister.js';
import { React, useState } from "react";
import Paper from '@mui/material/Paper';
import { Typography, Grid } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Register = () => {

  const 
  {        
      initialValues,
      formValues,
      formErrors,
      isSubmit,
      validate,
      handleChange,
      handleSubmit} = useRegister();

  return (

      <Grid sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:'column', minHeight: '100vh'}}>
        <Typography variant='h3' color='primary' sx={{padding:'3px'}} >Sign up</Typography>
        <Paper
          variant="outlined"   
          sx={{
          width: { xs:'90%', sm:'70%', md:'60%', lg:'40%' },
          height: 'auto',
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
        }}>
        <Avatar sx={{marginTop:'10px', width:60, height:60}} src="/broken-image.jpg" />
          <form style={{ width:'100%', display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center' }} onSubmit={handleSubmit}>

            <TextField type='text' name='firstName' label="First Name" variant="standard" value={formValues.firstName} onChange={(e) => handleChange(e)} sx={{marginTop:'5%', width:'60%'}} />

            <Typography color='red'> {formErrors.firstName} </Typography>
            <TextField type='text' name='lastName' label="Last Name" variant="standard" value={formValues.lastName} onChange={handleChange} sx={{marginTop:'5%', width:'60%'}} />

            <Typography color='red'> {formErrors.lastName} </Typography>
            <TextField type='text' name='username' label="Username" variant="standard" value={formValues.username} onChange={handleChange} sx={{marginTop:'5%', width:'60%'}} />

            <Typography color='red'> {formErrors.username} </Typography>
            <TextField type='text' name='email' label="Email" variant="standard" value={formValues.email} onChange={handleChange} sx={{marginTop:'5%', width:'60%'}} />

            <Typography color='red'> {formErrors.email} </Typography>
            <TextField type='password' name='password' label="Password" variant="standard" value={formValues.password} onChange={handleChange} sx={{marginTop:'5%', width:'60%'}} />

            <Typography color='red'> {formErrors.password} </Typography>
            <TextField type='password' name='confirmPassword' label="Confirm password" variant="standard" value={formValues.confirmPassword} onChange={handleChange} sx={{marginTop:'5%', width:'60%'}} />

            <Typography color='red'> {formErrors.confirmPassword} </Typography>
            <Button variant="contained" type='submit' sx={{margin:'6% 10% 3% 10%', width:'30%'}} >Sign in</Button>
          </form>
          <Typography variant='p' sx={{padding:'3px'}} >Already have an account? <Link to='/login'>Sign in</Link></Typography>
        </Paper>
      </Grid>


  );
};

export default Register;
