import React from "react";
import styled, { withTheme } from "styled-components";
import Api from "../../api";
import { withRouter } from "react-router-dom";

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

const Title = styled.h2`
  font-size: 1em;
  color: ${(props) => props.theme.styles.colors.accent};
  text-align: center;
  margin-bottom: 1.5em;
`;

const Label = styled.label`
  font-size: 0.75em;
  display: block;
  margin-bottom: 0.25em;
`;

const Input = styled.input`
  display: block;
  font-size: 1.25em;
  background-color: #eee;
  border: 0;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  width: 100%;
  padding: 0.5em 10px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  border: 0;
  padding: 1em 10px;
  margin-bottom: 1em;

  background-color: #2a2;
  color: #fff;
  cursor: pointer;

  :hover {
    background-color: #080;
  }
`;

const Login = (props) => {
  const [userState, setUserState] = React.useState({
    username: "",
    password: "",
  });

  React.useEffect(() => {});

  function login() {
    const { username, password } = userState;
    Api.users
      .login(username, password)
      .then((res) => {
        console.log(props);
        props.history.push({
          pathname: "/",
          state: { isAuthenticated: true, res },
        });
      })
      .catch((error) => {
        //show login error
        console.log(error.response);
      });
  }

  function handleOnChange(prop, value) {
    setUserState({ ...userState, [prop]: value });
  }

  return (
    <Wrapper className="Login" onMouseLeave={props.close}>
      <Title>Ingreso de moderadorxs</Title>
      <Label htmlFor="user">Usuario</Label>
      <Input
        type="text"
        value={userState.username}
        onChange={(e) => handleOnChange("username", e.target.value)}
        id="user"
      />
      <Label htmlFor="password">Contraseña</Label>
      <Input
        type="password"
        value={userState.password}
        onChange={(e) => handleOnChange("password", e.target.value)}
        id="password"
      />
      <Button onClick={login}>Ingresar</Button>
    </Wrapper>
  );
};

export default withRouter(withTheme(React.memo(Login)));
