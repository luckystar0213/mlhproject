export const createStore = (reducers) => {
    //你要保证这个state第一次的时候是undefined
    let state = {};

    let eventList = [];

    let initAction = {
        type: "@@redux/init"
    }

    let dispatch = (action) => {
        state = reducers(state, action);
        //通知所有组件数据更新了
        eventList.forEach(cb => {
            cb();
        })
    }

    dispatch(initAction);

    let getState = () => {
        return state;
    }
    let subscribe = (callback) => {
        eventList.push(callback);
    }
    return {
        dispatch,
        getState,
        subscribe
    }
}

export const combineReducers = (reducers) => {
    var newState = {}

    return (state,action)=>{
        for(var key in reducers){
            newState[key] = reducers[key](state[key],action);
        }

        return newState;
    }
}





