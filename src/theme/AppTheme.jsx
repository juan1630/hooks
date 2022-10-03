import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { purpleThem } from "./";

export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider  theme={ purpleThem } >
            <CssBaseline />
            { children }
        </ThemeProvider>
    );
}