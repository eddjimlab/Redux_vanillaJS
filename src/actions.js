import {CHANGE_THEME, DECREMENT, DISABLED_BTN, ENABLED_BTN, INCREMENT} from './types';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}

export function disableBtn() {
    return {
        type: DISABLED_BTN
    }
}

export function enableBtn() {
    return {
        type: ENABLED_BTN
    }
}


//мое решение для disabled
// export function disabled(boolean) {
//     document.getElementById('sub').disabled = boolean
//     document.getElementById('add').disabled = boolean
//     document.getElementById('theme').disabled = boolean
// }
// disabled(true)
// disabled(false)


export function asyncIncrement() {
    return function (dispatch) {
        dispatch(disableBtn())
        setTimeout(() => {
            dispatch(enableBtn())
            dispatch({type: INCREMENT})
        }, 1500)
    }
}

