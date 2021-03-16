import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components'


const Button = styled.a`
    display: block;
    text-decoration:none;
    border-radius: 8px;
    padding: 10px;
    width: 250px;
    background-color: orange;
    color: black;
    margin: 50px auto 0px;
    transition: all ease-in .3s;

    &:hover{
        opacity:.9;
        text-decoration:none;
        box-shadow: #848484 0px 0px 2px;
    }
`;

const Container = styled.div`   
    text-align: center; 
    position: relative;
    width:100vw;
    height: 100vh;
    background-image: url(${require('../../assets/imgs/notfound.jpg')});
    background-position: bottom;
    background-repeat:repeat-x;
    background-size:80%;
`

const NotFound = () => {
    const history = useHistory()

    return (
        <Container>
            <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <h1> No encontramos ninguna marcha con ese nombre</h1>
            <Button href="#" onClick={() => history.push("/")}>
                Volver a Marchas Virtuales
            </Button>
            </div>
        </Container>
    );
};

export default NotFound;