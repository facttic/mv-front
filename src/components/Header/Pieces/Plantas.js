import React from 'react';
import styled from 'styled-components'
import CollagePiece from './CollagePiece'
import { withWind } from '../hoc/motion'

const Piece = styled(CollagePiece)`
    transform-origin: center bottom;
`

const Plantas = (props) => {
    return (
        <Piece className={props.className} src={require('../../../assets/imgs/plantas.jpg')}></Piece>
    );
};

export default withWind(Plantas);