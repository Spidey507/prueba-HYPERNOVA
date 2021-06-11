import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
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
                        <Grid >
                            <h3>Concepto: </h3>{ this.state.report.concepto }   
                            <h3>Desde: </h3>{ this.state.report.fecha_desde }
                            <h3>Hasta: </h3>{ this.state.report.fecha_hasta }
                            <h3>Aprobado por: </h3>{ this.state.report.aprobado_por }
                            <h3>Firma: </h3>{ this.state.report.firma }
                            <h3>Nombre: </h3>{ this.state.employee.nombre }
                            <h3>Posicion: </h3>{ this.state.employee.posicion }
                            <h3>Supervisor: </h3>{ this.state.employee.supervisor }
                        </Grid>          

                    </div>
                </div>
            </React.Fragment>

        );  
    }

}

export default Show