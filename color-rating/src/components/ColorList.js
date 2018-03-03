import React from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import {rateColor, removeColor} from "../redux/actions";

class Color extends React.Component {

    componentWillMount() {
        this.style = { backgroundColor: "#CCC" }
    }

    componentWillUpdate(nextProps) {
        const { title, rating } = this.props
        this.style = null
        this.refs.title.style.backgroundColor = "red"
        this.refs.title.style.color = "white"
        alert(`${title}: rating ${rating} -> ${nextProps.rating}`)
    }

    shouldComponentUpdate(nextProps) {
        const { rating } = this.props
        return rating !== nextProps.rating
    }

    componentDidUpdate(prevProps) {
        const { title, rating } = this.props
        const status = (rating > prevProps.rating) ? 'better' : 'worse'
        console.log(`${title} is getting ${status}`)
        this.refs.title.style.backgroundColor = ""
        this.refs.title.style.color = "black"
    }

    render() {
        const { id, title, rating, color, onRate, onRemove } = this.props
        return (
            <section className="color" style={this.style}>
                <h1 ref="title">{title}</h1>
                <button onClick={() => onRemove(id)}>X</button>
                <div className="color"
                     style={{ backgroundColor: color }}>
                    {title}
                </div>
                <div>
                    <StarRating starsSelected={rating} totalStars={5} onRate={onRate}/>
                </div>
            </section>
        );
    }
}

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
    onRate: PropTypes.func.isRequired
};

Color.defaultProps = {
    title: undefined,
    rating: 0,
    color: "#000000",
    onRate: f=>f
};

const ColorList = ({ store }) => {
    const {colors} = store.getState();
    return (
        <div className="color-list">
            {(colors.length === 0) ?
                <p>No Colors Listed. (Add a Color)</p> :
                colors.map(color =>
                    <Color key={color.id}
                           {...color}
                           onRate={rating => store.dispatch(rateColor(color.id, rating))}
                           onRemove={id => store.dispatch(removeColor(id))}
                    />
                )
            }
        </div>
    );
}

ColorList.propTypes = {
    store: PropTypes.object.isRequired
};

export default ColorList