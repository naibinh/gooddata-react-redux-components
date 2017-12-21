import { CHANGE_FILTER, REMOVE_FILTER } from '../actions/actionTypes';

const REDUX_STATE_PATH = '@gooddata/react-components';

export interface IReduxAction {
    type: string;
    payload?: any;
}

// We don't want lodash in dependencies for just one function
function omit(object: object, keyToOmit: string) {
    return Object.keys(object).reduce((memo, objKey) => {
        if (objKey === keyToOmit) {
            return memo;
        }
        return {
            ...memo,
            [objKey]: object[objKey]
        };
    }, {});
}

function filtersReducer(state = {}, action: IReduxAction) {
    switch (action.type) {
        case REMOVE_FILTER: {
            const { filterId } = action.payload;
            if (!state[filterId]) {
                return state;
            }
            return omit(state, filterId);
        }

        case CHANGE_FILTER: {
            const { filterId, changes } = action.payload;
            return {
                ...state,
                [filterId]: changes
            };
        }

        default:
            return state;
    }
}

export {
    filtersReducer,
    REDUX_STATE_PATH
};
