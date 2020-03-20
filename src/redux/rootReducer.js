import {CHANGE_THEME, DECREMENT, DISABLED_BTN, ENABLED_BTN, INCREMENT} from '../types';
import {combineReducers} from 'redux';

function counterReducer(state = 0, action) {
    if (action.type === INCREMENT) {
        return state + 1
    } else if (action.type === DECREMENT) {
        return state - 1
    }
    return state
}

const initialThemeState = {
    type: 'light'
}

function themeReducer(state = initialThemeState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return {...state, value: action.payload}
        // case ENABLED_BTN:
        //     return {...state, disabled: false}
        // case DISABLED_BTN:
        //     return {...state, disabled: true}
        default:
            return state
    }
}

const initialDisable = {
    disabled: false
}

function disableReducer(state = initialDisable, action) {
    switch (action.type) {
        case ENABLED_BTN:
            return {...state, disabled: false}
        case DISABLED_BTN:
            return {...state, disabled: true}
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
    buttons: disableReducer
})
