// Banner.jsx
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';


const useStyles = makeStyles((theme) => ({
    banner: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    container: {
        padding: theme.spacing(2),
    },
}));

const Banner = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            {/* Adjust the number of columns and breakpoints based on your design */}
            <Grid item xs={12} sm={6} md={8} lg={10}>
                <img
                    src="../assets/banner.jpg"
                    alt="Banner"
                    className={classes.banner}
                />
            </Grid>
        </Grid>
    );
};

export default Banner;
