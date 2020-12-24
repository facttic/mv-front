import React from 'react';
import styled from 'styled-components'
import AMImage from './AlphaMatteImg'
import { withBeat2 } from '../hoc/motion'

const PieceContainer = styled.div`
    position: absolute;
    max-width: 400px;
    min-width: 100px;
`
const Image = styled(withBeat2(AMImage))`
    width: 100%;
    z-index:2;
`


const Panuelo = (props) => {
    return (
        <PieceContainer className={props.className}>
            <Image src={require('../../../assets/imgs/panuelo.jpg')}></Image>
        </PieceContainer>
    );
};

export default Panuelo;