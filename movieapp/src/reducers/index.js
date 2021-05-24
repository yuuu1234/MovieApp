import { combineReducers } from 'redux';
import movies from './movies';
import visibleFilter from './visibleFilter';
import sortByFilter from './sortByFilter';
export default combineReducers({
    movies,
    visibleFilter,
    sortByFilter
})