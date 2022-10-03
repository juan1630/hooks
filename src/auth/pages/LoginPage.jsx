import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
    return(
        <AuthLayout>
              <form>
                    <Grid container >
                        <Grid  item  xs={12} sx={{mt: 2}}  >
                            <TextField placeholder="email"  type='email' label="correo" fullWidth />
                        </Grid>

                        <Grid  item  xs={12} sx={{mt: 2}}  >
                            <TextField placeholder="password"  type='password' label="password" fullWidth /> 
                        </Grid>
                        <Grid container spacing={2} sx={{ mb:2, mt: 1 }}  >
                            <Grid item xs={ 12 }  sm={ 6 } >
                                <Button variant='contained' fullWidth   > Log in</Button>
                            </Grid>
                            <Grid item xs={ 12 } sm={ 6 }  >
                                <Button variant='contained' fullWidth >
                                    <Google />
                                    <Typography sx={{ml:1}} >
                                        Log in

                                    </Typography>
                                </Button>
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