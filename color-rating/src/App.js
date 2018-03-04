import React from 'react'
import PropTypes from 'prop-types'
import AddColorForm from './components/AddColorForm'
import ColorList from './components/ColorList'

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
        const { colors, sort } = this.props.store.getState();
        return (
            <div>
                <AddColorForm />
                <ColorList colors={colors}/>
            </div>
        );
    }
}
