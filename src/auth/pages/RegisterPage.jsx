import { Grid, TextField , Button, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

import {  Link as RouterLink } from 'react-router-dom'
import {useForm} from "../../hooks/useForm";
export const RegisterPage = ( ) => {

    const initial = {
        nombre:'juan',
        email:'juan@gmail.oom',
        password: '123456'
    }

    const validationForms = {
        email: [ (value) => value.includes('@'), 'El correo debe ser valido'  ],
        password: [ (value) => value.length  >= 4, 'La contraseña debe de tener más de 6 letras' ],
        nombre: [ (value) => value.length >= 1 , 'El nombre es requerido' ]
    }

    const { onInputChange, nombre, email, password, formState,
            nombreValid, emailValid, passwordValid
        }  = useForm( initial, validationForms);


    console.log( passwordValid );

    const onSubmitInput = (e) => {
            e.preventDefault();
    }

    return(
    <AuthLayout >
        <form onSubmit={onSubmitInput} >
              <Grid container >
                    <Grid  item  xs={12} sx={{mt: 2}}  >
                      <TextField placeholder="Juan Patrón" name='nombre'
                                 value={nombre}  onChange={onInputChange}
                                 type='text' label="Nombre" fullWidth
                                 error
                                 helperText='El nombre es obligatorio'
                                />
                  </Grid>
                  <Grid  item  xs={12} sx={{mt: 2}}  >
                      <TextField placeholder="email" name='email'  value={email}  onChange={onInputChange}  type='email' label="correo" fullWidth />
                  </Grid>

                  <Grid  item  xs={12} sx={{mt: 2}}  >
                      <TextField placeholder="password"  name='password'  value={password}  onChange={onInputChange} type='password' label="password" fullWidth />
                  </Grid>
                  <Grid container spacing={2} sx={{ mb:2, mt: 1 }}  >
                      <Grid item xs={ 12 }  sm={ 6 } >
                          <Button
                                type='submit'
                                variant='contained'
                                fullWidth>  Crear cuenta  </Button>
                      </Grid>
                  </Grid>
                  <Grid container direction='row' justifyContent='end' >
                        <Typography> ¿Ya tienes una cuenta ?  </Typography>
                      <Link color="inherit" to="/auth/register" component={ RouterLink }  >
                          Crear una cuenta 
                      </Link>
                  </Grid>
              </Grid>
          </form>
  </AuthLayout>
    );
}