import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Header from './Header'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { DummyData } from '../data'


function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: "1rem",
        textAlign: "center",
    },

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
                <Table size="small" className={classes.tablePosition}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Posicion</TableCell>
                            <TableCell>Departamento</TableCell>
                            <TableCell>Supervisor</TableCell>
                            <TableCell align="right">Ver reporte</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {DummyData.map((row) => (
                            <TableRow>
                                <TableCell>{row.nombre}</TableCell>
                                <TableCell>{row.posicion}</TableCell>
                                <TableCell>{row.departamento}</TableCell>
                                <TableCell>{row.supervisor}</TableCell>
                                <TableCell align="right"><Link to={`/show/${row.id}`}><AddCircleIcon /></Link></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>
            <div className={classes.seeMore}>
                <Link color="primary" to="/form">
                    <Button variant="contained" color="primary">Crear reporte</Button>
                </Link>
            </div>
        </React.Fragment>
    );
}