import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default class table extends React.Component {

    state = {
        is_loaded: false,
        reports: []
      }

    componentDidMount() {

        fetch('http://localhost:3002/api/reports/all')
        .then(res => res.json())
        .then(json => {
            this.setState({
                is_loaded: true,
                reports: json,
            })
        })
    }
    
    render() {

        var reports = this.state.reports

        var reports_lists = reports.map(function(report){
            return (<TableRow key={report.id}>
                        <TableCell>{report.nombre}</TableCell>
                        <TableCell>{report.concepto}</TableCell>
                        <TableCell>{report.departamento}</TableCell>
                        <TableCell>{report.supervisor}</TableCell>
                        <TableCell align="right"><Link to={`/show/${report.id}`}><AddCircleIcon /></Link></TableCell>
                    </TableRow>)
          })

        return (
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>concepto</TableCell>
                        <TableCell>Departamento</TableCell>
                        <TableCell>Supervisor</TableCell>
                        <TableCell align="right">Ver reporte</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { reports_lists }
                </TableBody>
            </Table>
        )
    }
}