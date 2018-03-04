import React from 'react';
import PropTypes from 'prop-types';
import AddColorForm from "../ui/AddColorForm";
import ColorList from "../ui/ColorList";
import {addColor, rateColor, removeColor} from "../redux/actions";

export const NewColor = (props, {store}) =>
    <AddColorForm onNewColor={(title, color) => store.dispatch(addColor(title, color))} />

NewColor.contextTypes = {
    store: PropTypes.object
};

export const Colors = (props, {store}) =>
    <ColorList  colors={store.getState().colors}
                onRemove={id => store.dispatch(removeColor(id))}
                onRate={(id, rating) => store.dispatch(rateColor(id, rating))} />

Colors.contextTypes = {
    store: PropTypes.object
};