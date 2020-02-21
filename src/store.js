import { createStore, applyMiddleware, compose } from 'redux'

// reducers
import initReducers from './reducers'

//midware
import middlewares from './middleware'

export default function initStore () {
    
    let initialStore = {}

    return createStore (
        initReducers, 
        initialStore,
        applyMiddleware (...middlewares),
        //window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {}
        )
}