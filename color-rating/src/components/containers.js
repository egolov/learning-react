import React from 'react';
import {connect} from 'react-redux';
import AddColorForm from "./ui/AddColorForm";
import ColorList from "./ui/ColorList";
import {addColor, rateColor, removeColor} from "../redux/actions";

export const NewColor = connect(
    null,
    dispatch =>
        ({
            onNewColor(title, color) {
                dispatch(addColor(title, color))
            }
        })
)(AddColorForm);


export const Colors = connect(
    state =>
        ({
            colors: [...state.colors]
        }),
    dispatch =>
        ({
            onRemove(id) {
                dispatch(removeColor(id))
            },
            onRate(id, rating) {
                dispatch(rateColor(id, rating))
            }
        })
)(ColorList);