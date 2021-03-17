import React from "react";
import axios from "axios";
import styled, { withTheme } from "styled-components";
import { withRouter } from "react-router-dom";
import Preloader from "../snippets/body/Preloader";

const { REACT_APP_API_URL: API_URL } = process.env;

const Wrapper = styled.div`
  width: 300px;
  max-width: calc(100% - 30px);
  background-color: #fff;
  position: absolute;
  z-index: 100;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.45);
  top: 20px;
  left: 0;
  right: 0;
  margin: 0 auto 20px auto;
  padding: 1em 15px;
`;

const Manifestations = (props) => {
  const [manifestationState, setManifestationState] = React.useState({
    manifestations: [],
    loading: true,
    fetch: false,
  });

  React.useEffect(() => {
    if(!manifestationState.fetch){
        getManifestations();
    }
  });

  async function getManifestations() {
    await axios
      .get(API_URL + "/manifestations")
      .then((res) => {
        if (!res.data.data) {
          setManifestationState({ ...manifestationState, loading: false, manifestations: [], fetch: true  });
        } else {
            console.log(res.data.data);
            setManifestationState({ ...manifestationState, loading: false, manifestations: res.data.data, fetch: true  });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (manifestationState.loading) {
    return <Preloader />;
  }

  return (
      <Wrapper>
          <h1>Marchas</h1>
      </Wrapper>
  )

};

export default withRouter(withTheme(React.memo(Manifestations)));
