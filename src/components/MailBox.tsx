import { Box, Container, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, Typography } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const MailBox = () => {
    return (
        <Container maxWidth="md" sx={{ bgcolor: 'secondary.main', borderRadius: '8px' }}>
            <Box
                sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'secondary', padding: '50px', margin: '40px 0 70px 0' }} >
                <Typography variant="h4" color={"white"}>Lorem ipsum Lorem ipsum Lorem ipsum</Typography>
                <Box sx={{width:'60%',backgroundColor:'secondary.light', padding:'10px', borderRadius:'6px'}}>
                    <FormControl sx={{ width: '100%', mb: 0 }} variant="filled">
                        <InputLabel htmlFor="filled-adornment-password">Enter Your Email</InputLabel>
                        <FilledInput sx={{backgroundColor:'white', border:'none', borderRadius:'4px'}}
                            id="filled-adornment-password"
                            type={'email'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton>
                                        <ArrowForwardIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Box>
            </Box>
        </Container>
    )
}
export default MailBox;