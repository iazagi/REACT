import React from 'react';
import MovieList from './components/MovieList';
import './App.css';
import MovieDetails from './components/MovieDetails';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Redux Movies</h1>
        <h3>Movie List</h3>
          <MovieList />
          <h3>Movie details</h3>
          <MovieDetails />
      </div>
    );
  }
}

export default App;
