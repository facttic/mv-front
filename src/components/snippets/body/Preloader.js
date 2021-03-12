import React from "react";
import styled from "styled-components";

const Center = styled.div`
  text-align: center;
  padding: 3em;
  width:50px;
`;

export default function Preloader({
    url
}) {
    return <Center>
        <img src={url || require("../../../assets/imgs/loading.gif")} alt="Cargando" />
    </Center>
}

