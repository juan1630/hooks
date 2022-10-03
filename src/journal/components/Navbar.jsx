import { LoginOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";

export const Navbar = ({ drawerWidth = 240}) => {
    
    return (
         <AppBar
            position="fixed"
            sx={{
                
                width: { sm:"calc( 100% - 240px)"} ,
                ml: { sm: drawerWidth+'px' }
             }}
         >
            <Toolbar>
                <IconButton  color='inherit' edge='start' sx={{ mr: 2, display: { sm: 'none' } }}  >
                    <MenuOutlined />
                </IconButton>
                <Grid container justifyContent='space-between' alignItems='center' >
                    <Typography variant="h6"  noWrap component='div'  > Journal App </Typography>

                    <IconButton color='error' >
                        <LoginOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
         </AppBar>
    );
}