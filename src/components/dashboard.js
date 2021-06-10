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

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

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
                            <TableCell>Fecha</TableCell>
                            <TableCell>Cuenta</TableCell>
                            <TableCell>Descripcion</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell align="right">Ver</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.shipTo}</TableCell>
                                <TableCell>{row.paymentMethod}</TableCell>
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