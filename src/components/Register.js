import { React, useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import { Typography, Grid } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Register = () => {

  const initialValues = { firstName:'', lastName:'', username:'',  email:'',  password:'', confirmPassword:'' }

  const [ formValues, setFormValues ] = useState(initialValues);
  const [ formErrors, setFormErrors ] = useState({});
  const [ errorForm, setErrorForm ] = useState(false);
  const [ errorText, setErrorText ] = useState('');
  const [ isSubmit, setIsSubmit ] = useState(false);



  useEffect(() => {
    setErrorForm(false);
    setErrorText('');
  }, [formValues.firstName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = 'First name is required';
      setErrorForm(true);
      setErrorText(errors.firstName);
    }
    if (!values.lastName) {
      errors.lastName = 'Last name is required!';
      setErrorForm(true);
      setErrorText('Last name is required!');
    }
    if (!values.username) {
      errors.username = 'Username is required!';
      setErrorForm(true);
      setErrorText('Username is required!');
    }
    if (!values.email) {
      errors.email = 'Email is required!';
      setErrorForm(true);
      setErrorText('Email is required!');
    } else if(!regex.test(values.email)) {
      errors.email = 'Invalid email format';
      setErrorForm(true);
      setErrorText('Invalid email format');
    }
    if (!values.password) {
      errors.password = 'Password is required!';
      setErrorForm(true);
      setErrorText('Password is required');
    } else if (values.password.length < 6 || values.password.length > 14 ) {
      errors.password = "Password must be between 6 and 14 charaters!";
      setErrorForm(true);
      setErrorText('Password must be between 6 and 14 charaters!');
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm password is required!';
      setErrorForm(true);
      setErrorText('Confirm password is required!');
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Password does not match!'
      setErrorForm(true);
      setErrorText('Password does not match!');
    }
    return errors;
  }

  return (

      <Grid sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:'column', minHeight: '100vh'}}>
        <Typography variant='h3' color='primary' sx={{padding:'3px'}} >Sign up</Typography>
        <Paper
          variant="outlined"   
          sx={{
          width: { xs:'90%', sm:'70%', md:'60%', lg:'30%' },
          height: 'auto',
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
        }}>
        <Avatar sx={{marginTop:'10px', width:60, height:60}} src="/broken-image.jpg" />
          <form style={{ width:'100%' }} onSubmit={handleSubmit}>
            <TextField  type='text' name='firstName' label="First Name" variant="standard" value={formValues.firstName} onChange={handleChange} sx={{marginTop:'5%', width:'60%'}} />
            <Typography color='red'> {formErrors.firstName} </Typography>
            <TextField  type='text' name='lastName' label="Last Name" variant="standard" value={formValues.lastName} onChange={handleChange} sx={{marginTop:'5%', width:'60%'}} />
            <Typography color='red'> {formErrors.lastName} </Typography>
            <TextField  type='text' name='username' label="Username" variant="standard" value={formValues.username} onChange={handleChange} sx={{marginTop:'5%', width:'60%'}} />
            <Typography color='red'> {formErrors.username} </Typography>
            <TextField  type='text' name='email' label="Email" variant="standard" value={formValues.email} onChange={handleChange} sx={{marginTop:'5%', width:'60%'}} />
            <Typography color='red'> {formErrors.email} </Typography>
            <TextField  type='password' name='password' label="Password" variant="standard" value={formValues.password} onChange={handleChange} sx={{marginTop:'5%', width:'60%'}} />
            <Typography color='red'> {formErrors.password} </Typography>
            <TextField  type='password' name='confirmPassword' label="Confirm password" variant="standard" value={formValues.confirmPassword} onChange={handleChange} sx={{marginTop:'5%', width:'60%'}} />
            <Typography color='red'> {formErrors.confirmPassword} </Typography>
            <Button variant="contained" type='submit' sx={{margin:'6% 10% 3% 10%', width:'30%'}} >Sign in</Button>
          </form>
          <Typography variant='p' sx={{padding:'3px'}} >Already have an account? <Link to='/login'>Sign in</Link></Typography>
        </Paper>
      </Grid>


  );
};

export default Register;
