import Navbar from './components/layout/Navbar';
import MovieDetails from './components/movies/MovieDetails';
import './App.css';
import Movies from './components/movies/Movies';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route exact path="/movie/:id" component={MovieDetails} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
