import React from 'react';
import CollagePiece from './CollagePiece'

import { withWind } from '../hoc/motion'


const FloresB = (props) => {
    return (
        <CollagePiece className={props.className} src={require('../../../assets/imgs/flores2.jpg')}></CollagePiece>
    );
};

export default withWind(FloresB);