import React from 'react'
import Star from './Star'
import PropTypes from 'prop-types';

/*
    Presentational component.

    Is concerned with how things look.
    May contain both presentational and container components
    and usually has DOM markup.

    All data is sent to these components via properties.
    Doesn't have state (usually).

 */
export default class StarRating extends React.Component {

    static propTypes = {
        totalStars: PropTypes.number.isRequired,
        starsSelected: PropTypes.number.isRequired,
        onRate: PropTypes.func.isRequired
    };

    render() {
        const { totalStars, starsSelected, onRate } = this.props;
        return (
            <div className="star-rating">
                {[...Array(totalStars)].map((n, i) =>
                    <Star key={i}
                          selected={i < starsSelected}
                          onClick={() => onRate(i + 1)}
                    />
                )}
                <p>{starsSelected} of {totalStars} stars</p>
            </div>
        )
    }
}