import { Drawer, Box, Toolbar, Typography, List } from "@mui/material";
import {useSelector} from "react-redux";
import { SideBarList } from "./SideBarList";

export const SideBar = ({drawerWith}) => {
    const { displayName  } = useSelector( state => state.auth );
    const {  notes} = useSelector( state => state.journal );
    
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
                            notes.map( note => ( <SideBarList key={ note.id }  { ...note }  /> ) )
                        }
                    </List>

            </Drawer>
        </Box>
    );
};