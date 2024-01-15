import { Box, Container, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, Typography } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const MailBox = () => {
    return(
        <Container maxWidth="md" sx={{bgcolor:'secondary.main'}}>
            <Box 
            sx={{display: 'flex',justifyContent:'space-between', backgroundColor:'secondary', padding: '50px', margin: '40px 0'}} 
            borderRadius={12}>
                <Typography variant="h4" color={"white"}>Lorem ipsum Lorem ipsum Lorem ipsum</Typography>
                <FormControl sx={{ m: 1, width: '60%' }} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">Enter Your Email</InputLabel>
                <FilledInput
                    id="filled-adornment-password"
                    type={'email'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton>
                        <ArrowForwardIcon/>
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
            </Box>
        </Container>
    )}
export default MailBox;