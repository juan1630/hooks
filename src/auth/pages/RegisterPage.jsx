import { Grid, TextField , Button, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

import {  Link as RouterLink } from 'react-router-dom'

export const RegisterPage = ( ) => {
    return(
    <AuthLayout >
        <form>
              <Grid container >
                    <Grid  item  xs={12} sx={{mt: 2}}  >
                      <TextField placeholder="Juan Patrón"  type='text' label="Nombre" fullWidth />
                  </Grid>
                  <Grid  item  xs={12} sx={{mt: 2}}  >
                      <TextField placeholder="email"  type='email' label="correo" fullWidth />
                  </Grid>

                  <Grid  item  xs={12} sx={{mt: 2}}  >
                      <TextField placeholder="password"  type='password' label="password" fullWidth /> 
                  </Grid>
                  <Grid container spacing={2} sx={{ mb:2, mt: 1 }}  >
                      <Grid item xs={ 12 }  sm={ 6 } >
                          <Button variant='contained' fullWidth>  Crear cuenta  </Button>
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