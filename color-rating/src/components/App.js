import React from 'react'
import {NewColor, Colors} from './containers'

export default class App extends React.Component {

    render() {
        return (
            <div>
                <NewColor />
                <Colors />
            </div>
        );
    }
}
