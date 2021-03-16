import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components'


const notfoundBackground = require('../../assets/imgs/notfound.jpg')

const Button = styled.a`
  border-radius: 8px;
  padding: 10px;
  width: 11rem;
  background-color: orange;
  color: black;
`;


const NotFound = () => {
    const history = useHistory()

    return (
        <div style={{ textAlign: "center", position: "relative" }}>
            <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <h1> No encontramos ninguna marcha con ese nombre</h1>
            <Button href="#" onClick={() => history.push("/")}>
                Volver a Marchas Virtuales
            </Button>
            </div>
            <img src={notfoundBackground} alt="Página no encontrada" style={{width:"100%"}} />
        </div>
    );
};

export default NotFound;