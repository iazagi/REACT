import React from 'react';
import { connect } from 'react-redux';
import MovieDetails from './MovieDetails';
import { selectMovie } from '../redux/action'

const MovieList = ({ movies, selectMovie }) => {
        const listItems = movies.map((movie) => {
            return (
                <div key={movie.title}>
                    <span>{movie.title}</span>
                    <button onClick={() => selectMovie(movie)}>details</button>
                </div>
            )
        })

        return (
            <div className="list-container">
                <h2>Movie List</h2>
                <ul>
                { listItems }
                </ul>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = {
    selectMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
