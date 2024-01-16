import React from 'react';
import { Box, Card, CardContent, Typography } from "@mui/material";

const Banner = () => {
    return (        
        <Box
            style={{
                backgroundImage: 'url("https://images.pexels.com/photos/3860805/pexels-photo-3860805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // url("../assets/banner.jpg")
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '500px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white', // Adjust text color based on your image
            }}
        >
        <Card sx={{}}>
            <CardContent>
                <Box sx={{display:'flex', flexDirection:'column'}}>
                    <Typography variant='h5'>
                        One of Saturn's largest rings may be newer than anyone
                    </Typography>
                    <Typography variant='body1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit bibendum vehicula. Donec urna lorem, tincidunt vel porttitor quis, viverra id eros. Aenean quis finibus lacus. Vivamus commodo massa quis urna dignissim placerat. Mauris vestibulum vestibulum quam a finibus. Suspendisse at viverra elit. Proin tortor ante, tempus in mollis sit amet, lacinia sit amet augue. Suspendisse ut rhoncus risus. Nulla eget sodales diam.

Suspendisse potenti. Nam auctor justo luctus risus eleifend varius. Nullam accumsan eget lacus eu pulvinar. Pellentesque pulvinar quis lorem non eleifend. Vestibulum vitae nibh orci. Mauris id enim at odio tempor imperdiet. Praesent eu purus sapien. Proin lorem velit, lacinia ac sodales at, commodo quis eros. Aliquam viverra, elit a vestibulum ornare, tellus turpis varius ex, eget facilisis nunc nisl interdum ex. Vestibulum aliquam accumsan leo, ac porttitor tellus tempus lacinia. Vestibulum porttitor finibus eros vitae consectetur.

Maecenas tellus purus, placerat eu rhoncus vitae, consequat at augue. Pellentesque sit amet orci eu velit venenatis tincidunt. Integer maximus lacus posuere enim lacinia facilisis. Quisque at metus laoreet, gravida nisl eu, commodo mi. Etiam mattis id odio id posuere. Aliquam lacus lorem, bibendum at fringilla et, molestie ac nulla. Quisque condimentum felis ex, sit amet feugiat turpis finibus vitae. Suspendisse tincidunt justo eu cursus semper. Integer vehicula sapien dui, ut ornare nulla accumsan nec. Vestibulum ultrices ex ac dolor feugiat, quis aliquet ex rutrum. Cras interdum sagittis augue sed aliquam.

Donec varius ante vulputate, sodales leo sed, luctus ex. Vivamus ante purus, consectetur at eleifend vel, congue et sapien. Duis ut tempus est. Aliquam et mattis ligula, id tempus augue. Curabitur nec elementum nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi cursus nunc non lectus ultrices, ac tincidunt nisl tincidunt.
                    </Typography>
                </Box>                    
            </CardContent>
        </Card>
        </Box> 
    );
};

export default Banner;
