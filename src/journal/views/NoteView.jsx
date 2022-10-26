import { useMemo, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";

import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";

import { GaleryImages } from "../components/";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startLoadingThnukns, startSavingNote } from "../../store/journal/thunks";
import { useRef } from "react";
import { startDeletingNote } from "../../store/auth/thunks";

export const NoteView = () => {
    
    const dispatch = useDispatch();
    const fileInputRef = useRef();

    const { activeNote, messageSaved, isSaving } = useSelector( state => state.journal );
    const { title, body, date,  onInputChange, formState } = useForm( activeNote );


    const dateString = useMemo(()=> {
        const newDate = new Date( date );
        return newDate.toUTCString();

    }, [date]);
    

    useEffect(()=> {
        dispatch(setActiveNote( formState ));
    }, [formState]);

    useEffect( ()=> {
        
        if( messageSaved.length > 0 ){
            Swal.fire('Note actualizado', '', 'success');
        }
        
    }, [messageSaved]);

    const onSubmitNote = ()=> {
        dispatch( startSavingNote())
    }

    const onInputFileChange  = ({ target }) => {
        
        if( target.files.length === 0  ) return;

        dispatch( startLoadingThnukns( target.files ));

    };

    const onDelete = () => {
        dispatch( startDeletingNote());
    };

    return (
        <Grid        
            className='animate__animated animate__fadeIn animate__faster container_main'         
            width='80%'
            ml='240px' 
            container 
            direction='row' 
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb:1 }} 
            >
            
            <Grid   item>

                <input type='file'  
                        multiple 
                        onChange={onInputFileChange} 
                        disabled={ isSaving }
                        style={{  display: 'none' }}
                        ref={ fileInputRef }
                        />

                <IconButton
                    color='primary'
                    onClick={()=>  fileInputRef.current.click()  }

                >
                    <UploadOutlined />
                </IconButton>

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

            <Grid container justifyContent='end'  >
                <Button
                    onClick={onDelete}
                    sx={{ mt: 2 }}
                    color='primary'
                >
                    <DeleteOutline />
                    Borrar
                </Button>
            </Grid>

            <GaleryImages images={ activeNote.imagesUrl } />

        </Grid>
    );
}