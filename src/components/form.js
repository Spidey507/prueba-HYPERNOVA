import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header'

const useStyles = makeStyles((theme) => ({
    root: {
        background: "white",
        color: "black",
        height: "100%",
        margin:'auto',
    },
    formContainer: {
        display: 'block',
        width: '70%',
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        margin: "2rem",
    },
}));

export default function Form() {
    const classes = useStyles();

    return (
        <div>
            <Header />
        <div className={classes.root}>
            <div className={classes.formContainer}>
                <Typography variant="h3" gutterBottom>
                    Crear reporte
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="Nombre"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Apellido"
                            fullWidth
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="Position"
                            name="Position"
                            label="Posicion"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="Department"
                            name="Department"
                            label="Departamento"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="Supervisor"
                            name="Supervisor"
                            label="Supervisor"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            required
                            id="From" 
                            name="From" 
                            label="Fecha desde" 
                            fullWidth 
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <TextField
                            required
                            id="To"
                            name="To"
                            label="Fecha hasta"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            required
                            id="Description"
                            name="Description"
                            label="Descripcion"
                            multiline
                            rows={2}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            required
                            id="Concept"
                            name="Concept"
                            label="Concepto"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="Cuenta"
                            name="Cuenta"
                            label="Cuenta"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="Total"
                            name="Total"
                            label="Total"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="Amount"
                            name="Amount"
                            label="Amount"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="ApprovedBy"
                            name="ApprovedBy"
                            label="Aprobado por"
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
        </div>
    );
}