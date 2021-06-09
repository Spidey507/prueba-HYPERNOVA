import './App.css';
import Login from './components/Login';
import Chart from './components/dashboard';
import Form from './components/form';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="componentes">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/dashboard">
              <Chart />
            </Route>
            <Route exact path="/form">
              <Form />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
