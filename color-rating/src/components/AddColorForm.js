import React from 'react'
import PropTypes from 'prop-types'

class AddColorForm extends React.Component {

    static propTypes = {
        onNewColor: PropTypes.func.isRequired
    };

    submit = () => {
        const {_title, _color} = this.refs;
        this.props.onNewColor(_title.value, _color.value);
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    };

    render() {
        return (
            <form onSubmit={this.submit}>
                <input type="text"
                       placeholder="color title..." required/>
                <input type="color" required/>
                <button>ADD</button>
            </form>
        )
    }
}

export default AddColorForm;
