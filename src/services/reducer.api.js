const reducer = (state, action) => {
    if (action.obj === 1 && action.act === '+'){
        return {...state, a: state.a++}
    } else if (action.obj === 1 && action.act === '-'){
        return {...state, a: state.a--}
    } else if (action.obj === 2 && action.act === '+'){
        return {...state, b: state.b++}
    } else if (action.obj === 2 && action.act === '-'){
        return {...state, b: state.b--}
    } else if (action.obj === 3 && action.act === '+'){
        return {...state, c: state.c++}
    } else if (action.obj === 3 && action.act === '-'){
        return {...state, c: state.c--}
    }
    return {...state}
};

export {reducer}