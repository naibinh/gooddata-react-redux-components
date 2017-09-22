import * as React from 'react';
import { connect } from 'react-redux';
import { Afm } from '@gooddata/data-layer';
import { REDUX_STATE_PATH } from '../../reducers/filtersReducer';

const { PropTypes } = React;

export interface IFilterSubscriberProps {
    ids: string[];
    children?: any;
}

export interface IPureFilterSubscriberProps {
    filters: Afm.IFilter[];
    children?: any;
}

export class PureFilterSubscriber extends React.PureComponent<IPureFilterSubscriberProps, null> {
    public static propTypes = {
        filters: PropTypes.array.isRequired,
        children: PropTypes.node.isRequired
    };

    public render() {
        const { filters } = this.props;
        const childrenProps = {
            filters
        };

        return (
            <div>
                {React.Children.map(this.props.children, (child: React.ReactElement<any>) => {
                    if (typeof child.type === 'string') { // div, span etc can't accept props
                        return React.cloneElement(child);
                    }
                    return React.cloneElement(child, childrenProps);
                })}
            </div>
        );
    }
}

export const mapStateToProps = (state: any, ownProps: IFilterSubscriberProps) => {
    return {
        filters: ownProps.ids
            .map((id: string) => state[REDUX_STATE_PATH][id])
            .filter(f => f)
    };
};

export const FilterSubscriber = connect(mapStateToProps)(PureFilterSubscriber);
