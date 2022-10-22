import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarList = ({title, id,  body, date, imgUrls }) =>{


    const dispatch = useDispatch();

    const newTitle = useMemo( ()=> {
        return title.length > 17
        ? title.substring(0,17) + '...'
        : title
    }, []);

    const onSelectNote = () => {

        dispatch( setActiveNote( { title, id, body, date, imgUrls}  ));
    }


    return(
        <ListItem key={ id } >
        <ListItemButton onClick={onSelectNote} >
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={newTitle}   />
                <ListItemText secondary={ body }   />
            </Grid>
        </ListItemButton>
        </ListItem>)
}