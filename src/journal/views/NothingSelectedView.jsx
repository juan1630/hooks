import { StarOutline, StartOutlined } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material"

export const NothingSelectView = () => {
    return(
        <Grid 
                width='80%'
                ml='240px'
                container 
                spacing={0} 
                direction="column" 
                alignItems="center" 
                justifyContent="center" 
                sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', padding:4, borderRadius: 5  }} 
            >

            <Grid  item  xs={12} >
                <StarOutline sx={{ fontSize: 100, color: 'white' }} />
            </Grid>

            <Grid  item  xs={12} >
               <Typography color='white' variant="h5" > Selcciona una entrada... </Typography>
            </Grid>


        </Grid>
    )
};