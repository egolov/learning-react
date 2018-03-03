import React from 'react'
import AddColorForm from './components/AddColorForm'
import ColorList from './components/ColorList'

const App = ({store}) =>
    <div>
        <AddColorForm store={store}/>
        <ColorList store={store}/>
    </div>;


export default App;
