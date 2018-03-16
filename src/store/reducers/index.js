import { combineReducers } from 'redux';

import search from './search';
import result from './result';
import source from './source';

const rootReducer = combineReducers({
    search: search,
    result: result,
    source: source,
});

export default rootReducer;