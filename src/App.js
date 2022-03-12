import Header from './pages/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import { Container } from '@mui/material';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Container sx={{ marginTop : 10 }}>
          <Switch>
            <Route exact path="/" component={Home}  />
            <Route path="/checkout/:id" component={Checkout}  />
            <Route>404 Not Found !</Route>
          </Switch>
        </Container>
      </Router>        
    </div>
  );
}

export default App;
