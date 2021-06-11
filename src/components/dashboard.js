import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from './Header'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Table from './table'

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    tableWidth: {
        width: '70%',
        display: "flex",
        alignItems: "center",
    },

    tablePosition: {
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
    }
}));

export default function dashboard() {
    
    const classes = useStyles;
    
    return (
        <React.Fragment>
            <Header />

            <Container component="main" className={classes.tableWidth} mb={2}>
                <Table />
            </Container>
            <div className={classes.seeMore}>
                <Link color="primary" to="/form">
                    <Button variant="contained" color="primary">Crear reporte</Button>
                </Link>
            </div>
        </React.Fragment>
    );
}