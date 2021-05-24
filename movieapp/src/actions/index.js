

export const receiveMovies = (data) => ({
    type: 'RECEIVE_MOVIES',
    movies: data
});

export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    filter: filter
});

export const setSortBy = (item) => ({
    type: 'SORT_BY',
    sortBy: item
});

export const editMovie = (movie) => ({
    type: 'EDIT_MOVIE',
    movie: movie
});

export const deleteMovie = (id) => ({
    type: 'DELETE_MOVIE',
    id: id
});

export const addMovie = (movie) => ({
    type: 'ADD_MOVIE',
    movie: movie
});


