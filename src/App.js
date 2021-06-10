import './App.css';
import Login from './components/Login';
import Chart from './components/dashboard';
import Form from './components/form';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Show from './components/show';
import NotFound from './components/NotFound'

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
            <Route exact path="/show/:id" render={(props) => (
                <Show id={props.match.params.id}/>
            )} />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
