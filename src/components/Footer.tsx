import { Box, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
const Footer = () => {
    const greyBg = grey[900];
    return(
      <Box sx={{bgColor: greyBg, display:'flex',justifyContent:'space-between',padding: '4rem 8rem'}}>
        <Box>
            <Typography variant="h4" color={"white"}>Stay Updated with our App</Typography>
        </Box>
        <img src="" alt="Mobile app"/>
      </Box>  
    )
}
export default Footer