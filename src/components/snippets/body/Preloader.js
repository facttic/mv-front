import React from "react";
import styled from "styled-components";

const Center = styled.div`
  text-align: center;
  padding: 3em;
`;

export default function Preloader({
    url
}) {
    return <Center>
        <img src={url || require("../../../assets/imgs/spinner.gif")} alt="Cargando" />
    </Center>
}

