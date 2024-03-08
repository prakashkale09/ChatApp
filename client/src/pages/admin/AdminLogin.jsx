 
import React,{useState} from 'react'
import { Container,Paper, Typography,TextField,Button,Avatar,Stack,IconButton } from '@mui/material';
 
import { bgGradient } from '../../constants/color';
import { useInputValidation } from '6pp';

const isAdmin=false;
const AdminLogin = () => {
    const secretKey=useInputValidation("")
    const submitHandler=(e)=>
    {
        e.preventDefault();
        console.log("submit");
    }
    if (isAdmin) return <Navigate to="/admin/dashboard"/>
  return (
    <div style={{
        backgroundImage: bgGradient, height: "100vh",
        }}>
    
        
    <Container  component={"main"} maxWidth="xs" 
    sx={{height:"100vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
     }}>
        <Paper elevation={3} sx={{ padding:4, display: "flex", flexDirection:"column",alignItems: "center", position: "relative",
                }}>
        
         <Typography variant="h5">Admin Login</Typography>
         <form style={{
            width:"100%",
            marginTop:"1rem",
         }}
         onSubmit={submitHandler}>
    

            <TextField required fullWidth
            label="Secret Key"
            type = "password"
            margin="normal"
            variant = "outlined"
            value = {secretKey.value}
            onChange = {secretKey.changeHandler}/>

            <Button sx={{marginTop: "1rem",}}varint="contained" color = "primary" type = "submit">Login</Button>
        
         </form>
         
         
        

        </Paper>
    </Container>
    </div>
  )
}

export default AdminLogin
