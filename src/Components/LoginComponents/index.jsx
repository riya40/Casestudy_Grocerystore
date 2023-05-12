import React,{useState} from 'react'
import { Typography,TextField,Button,Box,Container } from '@mui/material'

const LoginForm = ()=>{
    const [ LoginDetails,SetLoginDetails] = useState({
        Email:'',
        Password:'',
    });

    const handleChange = (event) =>{
        const {name,value}=event.target;
        SetLoginDetails((prevData)=>({
            ...prevData,
            [name]:value,
        }));
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
    };

    return(
        <Box py={3} bgcolor="grey.200">
            <Container maxWidth="md">
                <Typography variant="h6" align="center" gutterBottom>
                    Login Form
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField 
                    id="Email Id" 
                    label="Email Id" 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    value={LoginDetails.name}
                    onChange={handleChange} 
                    />
                    <TextField 
                    id="Password" 
                    label="Password" 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    value={LoginDetails.password}
                    onChange={handleChange} 
                    />
                    <Button type="submit" variant="container">
                    Login
                    </Button>

                </form>

            </Container>
        </Box>
    )
}
export default LoginForm;