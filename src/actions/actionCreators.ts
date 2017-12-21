import { REMOVE_FILTER, CHANGE_FILTER } from './actionTypes';

export function removeFilter(filterId: string) {
    return {
        type: REMOVE_FILTER,
        payload: {
            filterId
        }
    };
}

export function changeFilter(filterId: string, changes: object) {
    return {
        type: CHANGE_FILTER,
        payload: {
            filterId,
            changes
        }
    };
}
