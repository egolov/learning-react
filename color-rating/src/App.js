import React from 'react'
import { v4 } from 'uuid'
import AddColorForm from './components/AddColorForm'
import ColorList from './components/ColorList'
import colors from './data/colors'
import storeFactory from './redux/store'
import {addColor} from "./redux/actions";

/*
    Container component.

    Denotes the behavior of component.
    May contain both presentational and container components,
    but shouldn't have any DOM markup of its own.
    Provides data and behavior (callbacks) to presentational ot other container components.
 */
class App extends React.Component {

    constructor(props) {
        super(props);
        this.store = storeFactory(true);
        this.state = {
            colors
        }
    }

    addColor = (title, color) => {
        console.log(`New color: ${title} | ${color}`);
        const colors = [
            ...this.state.colors,
            {
                id: v4(),
                title,
                color,
                rating: 0
            }
        ];
        this.setState({ colors });
        this.store.dispatch(addColor(title, color))
    };

    removeColor = (id) => {
        const colors = this.state.colors.filter(c => c.id !== id);
        this.setState({ colors });
    };

    rateColor = (id, rating) => {
        const colors = this.state.colors.map(color =>
            (color.id !== id) ?
                color :
                {
                    ...color,
                    rating
                }
        );
        this.setState({ colors });
    };

    render() {
        const store = storeFactory(true);
        console.log(store.getState());
        return (
            <div>
                <AddColorForm onNewColor={this.addColor}/>
                <ColorList colors={this.state.colors}
                           onRemove={this.removeColor}
                           onRate={this.rateColor}/>
            </div>
        );
    }
}

export default App;
