import A from './constants';
import { v4 } from 'uuid'

export const addColor = (title, color) =>
    ({
        type: A.ADD_COLOR,
        id: v4(),
        title,
        color,
        timestamp: new Date().toString()
    });

export const removeColor = id =>
    ({
        type: A.REMOVE_COLOR,
        id
    });

export const rateColor = (id, rating) =>
    ({
        type: A.RATE_COLOR,
        id,
        rating
    });

export const sortColors = sortedBy =>
    (sortedBy === "rating") ?
        ({
            type: A.SORT_COLORS,
            sortBy: "SORTED_BY_RATING"
        }) :
        (sortedBy === "title") ?
            ({
                type: A.SORT_COLORS,
                sortBy: "SORTED_BY_TITLE"
            }) :
            ({
                type: A.SORT_COLORS,
                sortBy: "SORTED_BY_DATE"
            });