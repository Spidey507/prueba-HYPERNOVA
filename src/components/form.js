import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Header from './Header'
import { Link } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "white",
        color: "black",
        height: "100%",
        margin: 'auto',
    },
    formContainer: {
        display: 'block',
        width:'70%',
        margin: "2rem",
    },
}));
    
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    handleSubmit(event) {
        //alert('Reporte creado');
        event.preventDefault();
        const params = this.state
        let report_params = {
            concepto: params.concepto,
            fecha_desde: params.fecha_desde,
            fecha_hasta: params.fecha_hasta,
            aprobado_por: params.aprobado_por,
            firma: params.firma,
            employee: {
                nombre: params.nombre,
                posicion: params.posicion,
                departamento: params.departamento,
                supervisor: params.supervisor
            },
            transactions: [{
                fecha: params.fecha,
                cuenta: params.cuenta,
                descripcion: params.descripcion,
                total: params.total
            }]
        }
        console.log(report_params)
        axios.post('http://localhost:3002/api/reports', report_params)
        .then(response => {
            if(response.status == 201){
                alert('Reporte creado')
            } else {
                alert('Error en la creacion')
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className={useStyles.root}>
                    <div className={useStyles.formContainer} >
                        <Typography variant="h3" gutterBottom>
                            Crear reporte
                        </Typography>
                        <form onSubmit={this.handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="Name"
                                        name="nombre"
                                        label="Nombre"
                                        onChange={this.handleChange}
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                            
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="Position"
                                        name="posicion"
                                        label="Posicion"
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="Department"
                                        name="departamento"
                                        label="Departamento"
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="Supervisor"
                                        name="supervisor"
                                        label="Supervisor"
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="From"
                                        name="fecha_desde"
                                        label="Fecha desde"
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField
                                        required
                                        id="To"
                                        name="fecha_hasta"
                                        label="Fecha hasta"
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        required
                                        id="Description"
                                        name="descripcion"
                                        label="Descripcion"
                                        multiline
                                        rows={2}
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        required
                                        id="Concept"
                                        name="concepto"
                                        label="Concepto"
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="Cuenta"
                                        name="cuenta"
                                        label="Cuenta"
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="Total"
                                        name="total"
                                        label="Total"
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="ApprovedBy"
                                        name="aprobado_por"
                                        label="Aprobado por"
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firma"
                                        name="firma"
                                        label="Firma"
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="fecha"
                                        name="fecha"
                                        label="Fecha"
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <input type="submit" value="Submit"/>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Form
