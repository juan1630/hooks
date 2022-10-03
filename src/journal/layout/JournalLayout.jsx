import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { Navbar } from "../components/Navbar"
import { SideBar } from "../components/SideBar";

export const JournalLayout = ({ children }) =>{

    const drawerWidth = 240;

    return (
        <Box>
            
            <Navbar drawerWidth={drawerWidth} />

            {/* Side bar */}
            <SideBar drawerWidth={drawerWidth} />

            {/* // le decimos a matrials UI que es una etiqueta main */}
            <Box
                component='main'
                sx={{ flexGrow: 1, p:3 }}
            >
                <Toolbar/>
                {/* Toolbar */}

                { children }
            </Box>
        </Box>
    )
}