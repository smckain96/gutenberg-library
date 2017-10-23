import library from './library';
import gutenberg from './gutenberg';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    'library': library,
    'gutenberg': gutenberg,
    'form': formReducer
});

export default rootReducer;
