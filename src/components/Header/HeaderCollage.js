import React from 'react';
import styled from 'styled-components'
import { withFloat, withWind } from './hoc/motion'

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
const Flores1Left = styled(FloresA)`
    position: absolute;
    width: 17%;
    z-index: 10;
`
const Flores2Left = styled(FloresB)`
    position: absolute;
    width: 17%;
    left: 10%;
`

const Flores2Right = styled(FloresB)`
    position: absolute;
    width: 20%;
    right: 5%;
     z-index: 1;
`

const Flores2RightB = styled(FloresB)`
    position: absolute;
    width: 12%;
    right: 15%;
    z-index: 1;
    transform: rotateY(180deg);
`

const PlantasLeft = styled(Plantas)`
    position: absolute;
    padding-top: 21%;
    width: 23%;
    left: -3%;
     z-index:0;
`

const PlantasRight = styled(Plantas)`
    position: absolute;
    padding-top: 12%;
    height: 100%;
    width: 30%;
    right:-9%;
    z-index:0;

`

const PlantasRightB = styled(Plantas)`
    position: absolute;
    padding-top: 25%;
    width: 17%;
    right:-3%;
     z-index:0;
`
const PajarosContainer = styled(withFloat(Wrapper))`

`

const PajarosVolando = styled(withWind(Pajaros))`

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