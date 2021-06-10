import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Header from './Header'
import { Link } from 'react-router-dom';
import { DummyData } from '../data'

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
    render() {
        
        return (

            <React.Fragment>
                <Header />
                <div>
                    <h1>{ /*this.props.id*/ }</h1>
                    <h1>Hola</h1>
                    <div>
                        {DummyData.map((data, key) => {
                        return (
                            <div key={key}>

                                {
                                    data.id +
                                    " , " +
                                    data.Nombre +                                    
                                    " ," +
                                    data.Apellido +
                                    ", " +
                                    data.Posicion +
                                    " , " +
                                    data.Departamento +                                    
                                    " ," +
                                    data.Supervisor +
                                    ", " +
                                    data.FechaDesde +
                                    " , " +
                                    data.FechaHasta +                                    
                                    " ," +
                                    data.Descripcion +
                                    ", " +
                                    data.Concepto +
                                    " , " +
                                    data.Cuenta +                                    
                                    " ," +
                                    data.Total +
                                    ", " +
                                    data.AprobadoPor
                                }
                            </div>
                        );
                        })}

                    </div>
                </div>
            </React.Fragment>

        );  
    }

}

export default Show