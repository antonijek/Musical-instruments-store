import { React, useContext } from 'react'
import axios from "axios";
import { Typography, Box, Grid, Container, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { CartContext } from '../CartContext';
import DeleteIcon from '@mui/icons-material/Delete';


const Cart = () => {

  const {addToCart, setAddToCart} = useContext(CartContext); 

  const totalPrice = addToCart.reduce((price, item) => price + item.quantity * item.price, 0);
  const totalQuantity = addToCart.length;

  const buyHandler = async () => {
    // let instId;
    // let quant;
    // addToCart.map(elem => (

    //     const res = await axios.post(
    //       'http://localhost:8000/api/buy',
    //       {
    //         items: {
    //           elem.id : elem.quantity,
    //         },
    //       },
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       }
    //     );
    //     console.log(res);
    // ))
  }

  const handleDelete = (instId) => {
    const deleteInst = addToCart.filter((elem) => elem.id !== instId)
    setAddToCart(deleteInst);
  }


  return (
    <>
      <Grid container sx={{width:'100%', height:'30vh', marginTop:'5%', marginBottom:'40%'}}>
        <Grid item xs={12} sm={8} sx={{}}>
          { addToCart.length ? (<Typography sx={{fontSize:'1.4em', textAlign:'center', color:'primary.main'}}>Your shopping card items:</Typography>) : <Typography sx={{fontSize:'1.4em', textAlign:'center', color:'primary.main'}}>There is no instruments in card</Typography> }
          
          { addToCart.map((elem) =>(
            <Box sx={{margin:'3%'}} key={elem.id}>
              <Stack  direction='row' justifyContent="space-around" alignItems="center" sx={{width:'100%', height:'20vh', padding:'0%', border:'1px solid black', marginBottom:'2%'}}>
              <img src='#' alt='img'></img>
              <Typography>{elem.name}</Typography>
              <Typography>{elem.price}$</Typography>
              <Typography>X{elem.quantity}</Typography>
              <Button onClick={() => handleDelete(elem.id)}><DeleteIcon /></Button>
            </Stack>
          </Box>
         ))}

        </Grid>
        <Grid item xs={12} sm={4} sx={{}}>
          <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'35%', padding:'20%'}}>
          <Typography sx={{textAlign:'center', fontSize:'1.9em', marginBottom:'15%'}}>Quantity: <b>{totalQuantity}</b></Typography>
            <Typography sx={{textAlign:'center', fontSize:'1.9em', marginBottom:'15%'}}>Total: <b>{totalPrice}$</b></Typography>
            <Button  onClick={buyHandler} variant="contained" sx={{width:'80%', padding:'4%'}}>BUY</Button>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Cart