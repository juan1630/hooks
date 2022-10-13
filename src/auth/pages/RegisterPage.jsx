import {Grid, TextField, Button, Typography, Alert} from "@mui/material";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

import {  Link as RouterLink } from 'react-router-dom'
import {useForm} from "../../hooks/useForm";
import {useState, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {startCreatingUserWithEmailPassword} from "../../store/auth/thunks.js";


export const RegisterPage = ( ) => {

    const initial = {
        nombre:'juan',
        email:'juan@gmail.oom',
        password: '123456'
    }

    const [ formSubmited, setFormSubmited ] = useState(false);
    const dispatch = useDispatch();

    const { status, errorMessage } = useSelector( state =>  state.auth );

    //memorizamos el valor de la depencia status, para no disparar el render
    const isCheckingAuthentication = useMemo( ()=> status === 'checking', [status] );

    const validationForms = {
        email: [ (value) => value.includes('@'), 'El correo debe ser valido'  ],
        password: [ (value) => value.length  >= 4, 'La contraseña debe de tener más de 6 letras' ],
        nombre: [ (value) => value.length >= 1 , 'El nombre es requerido' ]
    }

    const { onInputChange, nombre, email, password, formState,
            nombreValid, emailValid, passwordValid, isFormValid
        }  = useForm( initial, validationForms);

    const onSubmitInput = (e) => {
            e.preventDefault();
            setFormSubmited(true)

            if( !isFormValid ) return
            dispatch( startCreatingUserWithEmailPassword( formState ));
    }

    return(
    <AuthLayout >
        <form onSubmit={onSubmitInput} >
            <h1> Form Valid { (isFormValid) ? 'Valido' : 'Not valid ' } </h1>
              <Grid container >
                    <Grid  item  xs={12} sx={{mt: 2}}  >
                      <TextField placeholder="Juan Patrón" name='nombre'
                                 value={nombre}  onChange={onInputChange}
                                 type='text' label="Nombre" fullWidth
                                 error={ !!nombreValid && formSubmited }
                                 helperText={ nombreValid  }
                                />
                  </Grid>
                  <Grid  item  xs={12} sx={{mt: 2}}  >
                      <TextField placeholder="email" name='email'  value={email}  onChange={onInputChange}  type='email' label="correo" error={!!emailValid && formSubmited}  helperText={ emailValid }  fullWidth />
                  </Grid>

                  <Grid  item  xs={12} sx={{mt: 2}}  >
                      <TextField placeholder="password"  name='password'  value={password}  onChange={onInputChange} type='password' label="password"  error={ !!passwordValid && formSubmited }  helperText={passwordValid} fullWidth />
                  </Grid>
                  <Grid container spacing={2} sx={{ mb:2, mt: 1 }}  >
                      <Grid item display={ !!errorMessage ? '': 'none' } xs={12} >
                          <Alert severity='error'>
                              { !!errorMessage ? errorMessage.code : '' }
                          </Alert>
                      </Grid>
                      <Grid item xs={ 12 }  sm={ 6 } >
                          <Button
                                disabled={ isCheckingAuthentication }
                              type='submit'
                                variant='contained'
                                fullWidth>  Crear cuenta
                          </Button>
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