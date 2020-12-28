import React from 'react';
import styled from 'styled-components'
import CollagePiece from './CollagePiece'
import { wingWithSwinging, withSwinging, withBeat } from '../hoc/motion'

const PiecesContainer = styled.div`
    position: absolute;
    max-width: 350px;
    min-width: 100px;
    height: 100%;
`

const Bird = styled(CollagePiece)`

`


const Wing = styled(wingWithSwinging(CollagePiece, { duration: '1s', swinging: '3' }))`
    position: absolute;
    width: 40%;
    top: -17%;
    left: 30%;
    

    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
         top:-12%;
     }

    @media (max-width: ${(props) => props.theme.pageWidth.s}px) {
        top:-9%;
     }
`

const PajaroL = (props) => {
    return (
        <PiecesContainer className={props.className}>
            <Wing src={require('../../../assets/imgs/pajaro1_ala.jpg')}></Wing>
            <Bird src={require('../../../assets/imgs/pajaro1.jpg')}></Bird>
        </PiecesContainer>
    );
};

export default withBeat(withSwinging(PajaroL));