import React from 'react'
import PropTypes from 'prop-types'
import {NewColor, Colors} from './containers/containers'

export default class App extends React.Component {

    static propTypes = {
        store: PropTypes.object.isRequired
    };

    static childContextTypes = {
        store: PropTypes.object.isRequired
    };

    getChildContext() {
        return { store: this.props.store }
    }

    componentWillMount() {
        this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div>
                <NewColor />
                <Colors />
            </div>
        );
    }
}
