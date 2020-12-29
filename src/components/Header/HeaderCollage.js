import React from 'react';
import styled from 'styled-components'
import { withFloat, withWind, withBeat2 } from './hoc/motion'

import Pajaros from './Pieces/Pajaros'
import FloresA from './Pieces/FloresA'
import FloresB from './Pieces/FloresB'
import Plantas from './Pieces/Plantas'

const Wrapper = styled.div`
    position: absolute;    
    height: 100%;
    width: 100%;
`
const CollageContainer = styled.div`
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    min-height: 505px;
    //background-color: pink;
`
const Flores1Left = styled(withBeat2(FloresA, { duration: '11s', delay: '.5s' }))`
    position: absolute;
    width: 17%;
    z-index: 10;
    
    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        left: -10%;
     }

    @media (max-width: ${(props) => props.theme.pageWidth.s}px) {
        width: 25%;
     }
`
const Flores2Left = styled(withBeat2(FloresB, { duration: '9s' }))`
    position: absolute;
    width: 17%;
    left: 10%;

    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        left: -7%;
        width: 20%;
     }

    @media (max-width: ${(props) => props.theme.pageWidth.s}px) {
        width: 35%;
     }
`

const Flores2Right = styled(withBeat2(FloresB, { duration: '12s' }))`
    position: absolute;
    width: 20%;
    right: 5%;
    z-index: 1;

    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        right: -5%;
        width: 25%;
     }

    @media (max-width: ${(props) => props.theme.pageWidth.s}px) {
        width: 30%;
     }
`

const Flores2RightB = styled(withBeat2(FloresB, { duration: '7s' }))`
    position: absolute;
    width: 12%;
    right: 15%;
    z-index: 1;
    transform: rotateY(180deg);

    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        right: -5%;
        width: 15%;
     }

    @media (max-width: ${(props) => props.theme.pageWidth.s}px) {
        width: 25%;
     }
`

const PlantasLeft = styled(withBeat2(Plantas, { duration: '10s' }))`
    position: absolute;
    padding-top: 23%;
    width: 23%;
    left: -3%;
    z-index:0;
    @media (max-width: ${(props) => props.theme.pageWidth.xl}px) {
        padding-top: 25%;
        left: -5%;
        width: 25%;
  }

    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        padding-top: 40%;
        left: -40%;
        width: 45%;
  }

    @media (max-width: ${(props) => props.theme.pageWidth.s}px) {
        padding-top: 80%;
        left: -35%;
        width: 55%;
  }

`

const PlantasRight = styled(withBeat2(Plantas, { duration: '15s' }))`
    position: absolute;
    padding-top: 17%;
    height: 100%;
    width: 30%;
    right:-9%;
    z-index:0;

    @media (max-width: ${(props) => props.theme.pageWidth.xl}px) {
        padding-top: 22%;
        right: -7%;
        width: 28%;
    }

      @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        padding-top: 20%;
        right: -45%;
        width: 55%;
    }

    @media (max-width: ${(props) => props.theme.pageWidth.s}px) {
        padding-top: 40%;
        right: -45%;
        width: 55%;
  }
`

const PlantasRightB = styled(withBeat2(Plantas, { duration: '12s' }))`
    position: absolute;
    padding-top: 28%;
    width: 17%;
    right:-3%;
    z-index:0;
    
    @media (max-width: ${(props) => props.theme.pageWidth.xl}px) {
        padding-top: 28%;
        right: -5%;
        width: 20%;
  }

    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        padding-top: 48%;
        right: -14%;
        width: 60%;
  }

    @media (max-width: ${(props) => props.theme.pageWidth.s}px) {
        padding-top: 70%;
        right: -42%;
  }
`
const PajarosContainer = styled(withFloat(Wrapper))`
`

const PajarosVolando = styled(withWind(Pajaros))`
    
    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        width: 90%;
        left: 5%;
     }

`

const HeaderCollage = () => {
    return (
        <CollageContainer>
            <PajarosContainer>
                <PajarosVolando></PajarosVolando>
            </PajarosContainer>
            <Flores1Left></Flores1Left>
            <Flores2Left></Flores2Left>
            <Flores2Right></Flores2Right>
            <Flores2RightB></Flores2RightB>
            <PlantasLeft></PlantasLeft>
            <PlantasRight></PlantasRight>
            <PlantasRightB></PlantasRightB>
        </CollageContainer>
    );
};

export default HeaderCollage;