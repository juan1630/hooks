import { useMemo, useEffect } from "react";
import { useForm } from "../../hooks/useForm";

import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { GaleryImages } from "../components/";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSavingNote } from "../../store/journal/thunks";

export const NoteView = () => {
    
    const dispatch = useDispatch();

    const { activeNote } = useSelector( state => state.journal );
    const { title, body, date,  onInputChange, formState } = useForm( activeNote );

    const dateString = useMemo(()=> {
        const newDate = new Date( date );
        return newDate.toUTCString();

    }, [date]);
    

    useEffect(()=> {
        dispatch(setActiveNote( formState ));
    }, [formState]);

    const onSubmitNote = ()=> {
        dispatch( startSavingNote())
    }

    return (
        <Grid        
            className='animate__animated animate__fadeIn animate__faster'         
            width='80%'
            ml='240px' 
            container 
            direction='row' 
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb:1 }} 
            >
            
            <Grid   item>
                <Typography  fontSize={ 39 }  fontWeight='light'  >
                    {dateString}
                </Typography>
            </Grid>
            <Grid  item >
                <Button sx={{padding: 2}}
                    onClick={ onSubmitNote }
                >
                    <SaveOutlined  sx={{ fontSize:30, mr: 1 }}  />
                    Guardar 
                </Button>
            </Grid>

            <Grid  container >
                <TextField 
                    type='text'
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label='Titulo'
                    name='title'
                    value={ title }
                    onChange={ onInputChange }
                    sx={{ border: 'none', mb:1, mt:3 }}
                />
            </Grid>

            <Grid  container >
                <TextField 
                    type='text'
                    variant="filled"
                    multiline
                    fullWidth
                    name='body'
                    value={ body }
                    onChange={ onInputChange }
                    placeholder="Que sucedio hoy?"
                    minRows={5}
                />
            </Grid>

            <GaleryImages />

        </Grid>
    );
}