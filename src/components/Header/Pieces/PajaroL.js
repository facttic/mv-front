import React from 'react';
import styled from 'styled-components'
import CollagePiece from './CollagePiece'
import { withSwinging } from '../hoc/motion'

const PiecesContainer = styled.div`
    position: absolute;
    max-width: 350px;
    min-width: 100px;
    height: 100%;
`

const Bird = styled(CollagePiece)`

`


const Wing = styled(withSwinging(CollagePiece))`
    position: absolute;
    width: 40%;
    top: -17%;
    left: 30%;
    
`

const PajaroL = (props) => {
    return (
        <PiecesContainer className={props.className}>
            <Wing src={require('../../../assets/imgs/pajaro1_ala.jpg')}></Wing>
            <Bird src={require('../../../assets/imgs/pajaro1.jpg')}></Bird>
        </PiecesContainer>
    );
};

export default PajaroL;