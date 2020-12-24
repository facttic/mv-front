import React from 'react';
import styled from 'styled-components'
import AMImage from './AlphaMatteImg'

const PieceContainer = styled.div`
    position: absolute;
    width: 100%;
    height:100%;
`
const Image = styled(AMImage)`
    width: 100%;
`

const CollagePiece = (props) => {
    return (
        <PieceContainer className={props.className}>
            <Image src={props.src}></Image>
        </PieceContainer>
    );
};

export default CollagePiece;