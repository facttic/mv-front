import React from 'react';
import styled from 'styled-components'
import CollagePiece from './CollagePiece'
import { wingWithSwinging, withSwinging, withBeat2 } from '../hoc/motion'

const PiecesContainer = styled.div`
    position: absolute;
    max-width: 400px;
    min-width: 100px;
    height: 50%;
`

const Bird = styled(CollagePiece)`

`


const Wing = styled(wingWithSwinging(CollagePiece, { duration: '.3s', swinging: '1' }))`
    width: 40%;
    left: 27%;
    top:-50%;
    z-index: 10;
    transform-origin: center bottom;

    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        top:-43%;
     }

    @media (max-width: ${(props) => props.theme.pageWidth.s}px) {
        top:-26%;
     }
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