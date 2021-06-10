import React from 'react';
import logo from '../logo.png';
import '../App.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



class Login extends React.Component {
  render() {
    const classes = useStyles;
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography component="h1" variant="h5" color="primary">
          Sign in
            </Typography>
        <Container component="main" maxWidth="xs">
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required="true"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <Link to="/dashboard">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
            </Button>
            </Link>
          </form>
        </Container>
      </header>
    );
  }
}

export default Login;