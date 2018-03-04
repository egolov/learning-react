import React from 'react'
import PropTypes from 'prop-types'
import {addColor} from "../redux/actions";

class AddColorForm extends React.Component {

    constructor(props) {
        super(props);
    }

    static contextTypes = {
        store: PropTypes.object
    };

    submit = (e) => {
        const {_title, _color} = this.refs;
        e.preventDefault();
        this.context.store.dispatch(addColor(_title.value, _color.value));
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    };

    render() {
        return (
            <form onSubmit={this.submit}>
                <input ref="_title"
                       type="text"
                       placeholder="color title..."
                       required/>
                <input ref="_color"
                       type="color"
                       required/>
                <button>ADD</button>
            </form>
        )
    }
}

export default AddColorForm;
