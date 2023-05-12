import React,{useState} from 'react'
import { Typography,TextField,Button,Box,Container } from '@mui/material'

const RegistrationForm = ()=>{
    const [ UserDetails,setRegistrationData] = useState({
        Name:'',
        Email:'',
        Phone:'',
    });

    const handleChange = (event) =>{
        const {name,value}=event.target;
        setRegistrationData((prevData)=>({
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
                   Registration Form
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField 
                    id="name" 
                    label="Your Name" 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    value={UserDetails.name}
                    onChange={handleChange} 
                    />
                    <TextField 
                    id="Email Id" 
                    label="Email Id" 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    value={UserDetails.EmailId}
                    onChange={handleChange} 
                    />
                    <TextField
                    id="password" 
                    label="password" 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    value={UserDetails.password}
                    onChange={handleChange} 
                    />
                    <TextField 
                    id="Phone Number" 
                    label="Phone Number" 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    value={UserDetails.Phonenumber}
                    onChange={handleChange} 
                    />
                    <Button type="submit" variant="container">
                        Register</Button>
                    <Typography variant="body2" align="left">
                        if you are Registered Click on Login button
                        </Typography>
                    <Button type="submit" variant="container">
                        Login</Button>
                </form>
            </Container>
        </Box>
    )
}
export default RegistrationForm;