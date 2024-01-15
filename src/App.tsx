import { CssBaseline, ThemeProvider,Typography } from "@mui/material";
import { appTheme } from "./themes/theme";
import Breadcrumb from "./components/Breadcrumb";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
       <CssBaseline enableColorScheme />
       <>
        <Navbar></Navbar>
        <Typography variant="body1">
          <Breadcrumb/>
        </Typography>
        
       </>      
    </ThemeProvider>
  );
}
 
export default App;