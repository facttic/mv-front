import React from 'react';
import styled from 'styled-components'
import CollagePiece from './CollagePiece'


const FloresA = (props) => {
    return (
        <CollagePiece className={props.className} src={require('../../../assets/imgs/flores1.jpg')}></CollagePiece>
    );
};

export default FloresA;