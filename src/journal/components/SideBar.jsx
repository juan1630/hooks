import { TurnedInNot } from "@mui/icons-material";
import { Drawer, Box, Toolbar, Typography, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from "@mui/material";
import {useSelector} from "react-redux";

export const SideBar = ({drawerWith}) => {
    const { displayName  } = useSelector( state => state.auth );
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWith }, flexShrink:{ sm:0 }  }}
        >
            <Drawer
                variant="permanent" //temporary si es de manera condicional
                open
                sx={{ display: { xs: 'block' }, 
                 '& .MuiDrawe-paper': { boxSizing: 'border-box' , width: drawerWith }}}
            >   

                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>  { displayName.toUpperCase() } </Typography>
                </Toolbar>

                    <List>
                        {
                            ['enero', 'febrero'].map( text => (<ListItem key={ text } >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <TurnedInNot />
                                        </ListItemIcon>
                                        <Grid container>
                                            <ListItemText primary={text}   />
                                            <ListItemText secondary='Hola mundo'   />
                                        </Grid>
                                    </ListItemButton>
                                </ListItem>) )
                        }
                    </List>

            </Drawer>
        </Box>
    );
};