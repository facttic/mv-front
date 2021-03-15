import React from 'react';
import { useHistory } from 'react-router';
import styled, { withTheme } from 'styled-components'


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
        <div style={{ textAlign: "center" }}>
            <div style={{ position: "relative", marginTop: "24px" }}>
            <h1> No encontramos ninguna marcha con ese nombre</h1>
            <Button href="#" onClick={() => history.push("/")}>
                Volver a Marchas Virtuales
            </Button>
            </div>
            <img src={notfoundBackground} />
        </div>
    );
};

export default NotFound;