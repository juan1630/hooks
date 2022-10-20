import { Google } from "@mui/icons-material";
import {Alert, Button, Grid, Link, TextField, Typography} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout";
import {useForm} from "../../hooks/useForm.js";

import {checkingAutentication, startLoginCrendetials, startLoginWithEmailPassword} from "../../store/auth/thunks.js";
import {useDispatch, useSelector} from "react-redux";
import {useMemo} from "react";


const formData = {
    email: '',
    password: ''
}

export const LoginPage = () => {

    const {  status,errorMessage  } = useSelector( state =>state.auth );
    const dispatch = useDispatch();

    const { email, password, onInputChange, formState } = useForm(formData);


    const isauthenticating = useMemo( () => status ===  'checking' ,[status] );

    const onSubmit = ( event ) =>{
        event.preventDefault();
        dispatch(checkingAutentication());
        dispatch(startLoginWithEmailPassword({ email, password }));
    }


    const onGoogleSignIn = () => {

        dispatch(startLoginCrendetials());
    }

    return(
        <AuthLayout>
              <form onSubmit={onSubmit}   className='animate__animated animate__fadeIn animate__faster' >
                    <Grid container >
                        <Grid  item  xs={12} sx={{mt: 2}}  >
                            <TextField placeholder="email"  type='email' label="correo" fullWidth name='email'  onChange={onInputChange} value={ email } />
                        </Grid>

                        <Grid  item  xs={12} sx={{mt: 2}}  >
                            <TextField placeholder="password"  type='password' label="password" fullWidth name='password' onChange={onInputChange}  value={ password } />
                        </Grid>
                        <Grid container spacing={2} sx={{ mb:2, mt: 1 }}  >
                            <Grid item xs={ 12 }  sm={ 6 } >
                                <Button variant='contained' fullWidth  type='submit' disabled={isauthenticating} > Log in</Button>
                            </Grid>

                            <Grid item xs={ 12 } sm={ 6 }  >
                                <Button variant='contained' fullWidth onClick={onGoogleSignIn} disabled={isauthenticating}  onSubmit={ onSubmit }  >
                                    <Google />
                                    <Typography sx={{ml:1}} >
                                        Log in

                                    </Typography>
                                </Button>
                            </Grid>

                            <Grid item xs={12}  display={ (!!errorMessage) ? '' : 'none' } >
                                <Alert severity='error' > { errorMessage ? errorMessage.code : ''  } </Alert>
                            </Grid>
                        </Grid>
                        <Grid container direction='row' justifyContent='end' >
                            <Link color="inherit" to="/auth/register" component={ RouterLink }  >
                                Crear una cuenta 
                            </Link>
                        </Grid>
                    </Grid>
                </form>
        </AuthLayout>
    );
}