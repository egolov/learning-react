import React from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'

const Color = ({ title, color, rating, onRemove, onRate }) =>
    <section className="color">
        <h1>{title}</h1>
        <button onClick={onRemove}>X</button>
        <div className="color"
             style={{ backgroundColor: color }}>
        </div>
        <div>
            <StarRating starsSelected={rating} totalStars={5} onRate={onRate}/>
        </div>
    </section>

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
    onRate: PropTypes.func.isRequired
};

const ColorList = ({ colors, onRemove, onRate }) =>
    <div className="color-list">
        {(colors.length === 0) ?
            <p>No Colors Listed. (Add a Color)</p> :
            colors.map(color => {
                console.log(color);
                    return <Color key={color.id}
                           {...color}
                           onRemove={() => onRemove(color.id)}
                           onRate={(rating) => onRate(color.id, rating)}/>
                }
            )
        }
    </div>

ColorList.propTypes = {
    colors: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired,
    onRate: PropTypes.func.isRequired
}

export default ColorList