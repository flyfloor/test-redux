import { DECREASE_COUNT, INCREASE_COUNT } from '../common/contentType';

const initState = {
    count: 0,
}

export default (state=initState, action) => {
    switch (action.type) {
        case DECREASE_COUNT:
            return { count: state.count - 1 }
        case INCREASE_COUNT:
            return { count: state.count + 1 }
        default:
            return state
    }
}