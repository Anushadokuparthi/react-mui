import React from 'react';
import { Box } from "@mui/material";
import Card from '@mui/material/Card';

const Banner = () => {
    return (
        <Card>
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
            ></Box>
            <h1>hello</h1>
        </Card>

    );
};

export default Banner;
