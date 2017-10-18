import library from './library';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
    library,
    form: formReducer
});
export default rootReducer;
