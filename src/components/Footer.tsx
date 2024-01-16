import { Box, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';

const Footer = () => {
    const greyBg = grey[900];
    return(
      <Box sx={{backgroundColor: grey[900], display:'flex',justifyContent:'space-between',padding: '4rem 8rem'}}>
        <Box>
            <Typography variant="h3" color={"white"} sx={{maxWidth:"60%",lineHeight: '1.5',marginBottom:'20px'}}>Stay Updated With Our App!!</Typography>
            <Box sx={{display:'flex', columnGap:'20px'}}>
              <Typography variant="h6" color="secondary">
                Download Now
              </Typography>
              <Box sx={{display:'flex', columnGap:'14px',backgroundColor:grey[700],color:'white',padding:'6px',borderRadius:'4px'}}>
                <AppleIcon/>
                <ShopIcon/>
              </Box>
            </Box>
        </Box>
        <Box sx={{marginTop:'-8rem'}}>
          <img height={'420px'}  src="https://static.wixstatic.com/media/ce438b_4935441bf21740b09ce2993e06544ec0~mv2.webp" alt="Mobile app"/>
        </Box>
      </Box>  
    )
}
export default Footer