const movies = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_MOVIES':
            return action.movies;
        case 'EDIT_MOVIE':
            return updateMovies(state, action.movie);
        case 'DELETE_MOVIE':
            return deleteMovie(state, action.id);
        case 'ADD_MOVIE':
            return addMovie(state, action.movie);
        default:
            return state
    }
};

const updateMovies = (movies, movie) => {
    return movies.map(item => item.id === movie.id ? movie : item)
}

const deleteMovie = (movies, id) => {
    const deleteInd = movies.findIndex(movie => movie.id === id)
    const newMovies = [...movies];
    newMovies.splice(deleteInd, 1);
    return deleteInd > -1 ? newMovies : movies
}

const addMovie = (movies, movie) => {
    return [...movies, movie]
}



export default movies;