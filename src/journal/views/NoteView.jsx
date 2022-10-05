import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { GaleryImages } from "../components/";

export const NoteView = () => {
    return (
        <Grid                 
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
                    04 de octubre de 2022
                </Typography>
            </Grid>
            <Grid  item >
                <Button sx={{padding: 2}}  >
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
                    sx={{ border: 'none', mb:1, mt:3 }}
                />
            </Grid>

            <Grid  container >
                <TextField 
                    type='text'
                    variant="filled"
                    multiline
                    fullWidth
                    placeholder="Que sucedio hoy?"
                    minRows={5}
                />
            </Grid>

            <GaleryImages />

        </Grid>
    );
}