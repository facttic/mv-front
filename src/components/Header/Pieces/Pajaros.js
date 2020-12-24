import React from 'react';
import styled from 'styled-components'

import PajaroL from './PajaroL'
import PajaroR from './PajaroR'
import Panuelo from './Panuelo'

const PiecesContainer = styled.div`
    position: absolute;
    left:22.5%;
    width: 55%;
    height: 50%;
`

const PajaroIzquierda = styled(PajaroL)`
    width: 35%;
    left:0;
    top:30%;
`
const PanueloVerde = styled(Panuelo)`
    width: 37%;
    left:32.5%;
    top:32%;
`

const PajaroDerecha = styled(PajaroR)`
    width: 35%;
    right:0;
    top:20%;
`

const HeaderCollage = (props) => {
    return (
        <PiecesContainer className={props.className}>
            <PajaroIzquierda></PajaroIzquierda>
            <PanueloVerde></PanueloVerde>
            <PajaroDerecha></PajaroDerecha>
        </PiecesContainer>
    );
};

export default HeaderCollage;