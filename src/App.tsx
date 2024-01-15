import { CssBaseline, ThemeProvider,Typography } from "@mui/material";
import { appTheme } from "./themes/theme";
import Breadcrumb from "./components/Breadcrumb";
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import MailBox from "./components/MailBox";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
       <CssBaseline enableColorScheme />
       <>
        <Navbar></Navbar>
        <Typography variant="body1">
          <Breadcrumb/>
        </Typography>
        <BlogList/>
        <MailBox/>
        <Footer/>
       </>      
    </ThemeProvider>
  );
}
 
export default App;