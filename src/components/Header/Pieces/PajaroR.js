import React from 'react';
import styled from 'styled-components'
import CollagePiece from './CollagePiece'
import { withSwinging, withBeat2 } from '../hoc/motion'

const PiecesContainer = styled.div`
    position: absolute;
    max-width: 400px;
    min-width: 100px;
    height: 50%;
`

const Bird = styled(CollagePiece)`

`


const Wing = styled(withSwinging(CollagePiece))`
    width: 40%;
    left: 27%;
    top:-50%;
    z-index: 10;
`

const PajaroR = (props) => {
    return (
        <PiecesContainer className={props.className}>
            <Wing src={require('../../../assets/imgs/pajaro2_ala.jpg')}></Wing>
            <Bird src={require('../../../assets/imgs/pajaro2.jpg')}></Bird>
        </PiecesContainer>
    );
};

export default withBeat2(withSwinging(PajaroR));