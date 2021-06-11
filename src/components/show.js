import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Header from './Header'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "white",
        color: "black",
        height: "100%",
        margin: 'auto',
    },
    formContainer: {
        display: 'block',
        width: '70%',
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        margin: "2rem",
    },
}));

class Show extends React.Component {
    state = {
        report: {},
        employee: {}
    }

    componentDidMount() {
        var id = this.props.id
        fetch(`http://localhost:3002/api/reports/${id}`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                this.setState({
                    report: json,
                    employee: json.employee
                })
            })
    }

    render() {

        return (

            <React.Fragment>
                <Header />
                <div>

                    <h1>Reporte</h1>
                    <div>
                        <Grid container spacing={1} className={useStyles.formContainer}>
                            <Grid item xs={12} sm={6}>
                                <p>Concepto: {this.state.report.concepto}</p>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <p>Desde: {this.state.report.fecha_desde}</p>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <p>Hasta: {this.state.report.fecha_hasta}</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <p>Nombre: {this.state.employee.nombre}</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <p>Posicion: {this.state.employee.posicion}</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <p>Aprobado por: {this.state.report.aprobado_por}</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <p>Firma: {this.state.report.firma}</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <p>Supervisor: {this.state.employee.supervisor}</p>
                            </Grid>
                        </Grid>
                        <Link color="primary" to="/dashboard">
                            <Button variant="contained" color="primary">Volver</Button>
                        </Link>
                    </div>
                </div>
            </React.Fragment>

        );
    }

}

export default Show