import {
    changeFilter,
    removeFilter
} from '../actionCreators';
import {
    CHANGE_FILTER,
    REMOVE_FILTER
} from '../actionTypes';

describe('actionCreators', () => {
    it('should create changeFilter action', () => {
        expect(
            changeFilter('filterId', { foo: 'bar' })
        ).toEqual({
            type: CHANGE_FILTER,
            payload: {
                filterId: 'filterId',
                changes: {
                    foo: 'bar'
                }
            }
        });
    });

    it('should create remove filter action', () => {
        expect(
            removeFilter('filterId')
        ).toEqual({
            type: REMOVE_FILTER,
            payload: {
                filterId: 'filterId'
            }
        });
    });
});
