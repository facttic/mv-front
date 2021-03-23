import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';

const Options = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-colum-gap: 5px;
`;

const Button = styled.button`
  display: block;
  border: 0;
  padding: 1em 10px;

  background-color: #a22;
  color: #fff;
  cursor: pointer;

  :hover {
    background-color: #800;
  }
`;

const CancelButton = styled.button`
  display: block;
  margin: 0.75em auto;
  border: 0;
  padding: 0.75em 30px;
  font-size: 0.875em;

  background-color: #2a2;
  color: #fff;
  cursor: pointer;

  :hover {
    background-color: #080;
  }
`;

const ConfirmButton = styled.button`
  display: block;
  margin: 0.75em auto;
  border: 0;
  padding: 0.75em 10px;

  background-color: transparent;
  color: #fff;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const Confirm = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,.75);
  animation: in 300ms ease-in-out;
  padding: 1em 15px;
  color: #fff;
  font-size: 1.25em;
  text-align: center;
`;

class CardModeration extends Component {

  state = {
    confirm: false,
    action: 'delete'
  }

  clickDeleteHandler = () => {
    this.setState({confirm: true, action: 'delete'})
  }

  clickBlockHandler = () => {
    this.setState({confirm: true, action: 'block'})
  }

  clickCancelHandler = () => {
    this.setState({confirm: false})
  }

  render() {

    let confirmQuestion = this.state.action === 'delete' ? <p>¿Eliminar este tweet?</p> : <p>¿Bloquear al usuario <a href={'https://twitter.com/' + this.props.user} target="_blank" rel="noopener noreferrer">@{this.props.user}</a>?</p>
    let confirm = this.state.confirm ? <Confirm>
      {confirmQuestion}
      <CancelButton onClick={this.clickCancelHandler}>Cancelar</CancelButton>
      {this.state.action === 'delete' ? 
        <ConfirmButton onClick={this.props.delete}>Si, eliminar tweet.</ConfirmButton> :
        <ConfirmButton onClick={this.props.block}>Si, bloquear usuario.</ConfirmButton>
      }
    </Confirm> : null;

    return (
      <div className="CardModeration">
        <Options className="CardModeration">
          {/* <Button onClick={this.clickDeleteHandler}><span role="img" aria-label="">🗑️</span> Eliminar tweet</Button> */}
          <Button onClick={this.clickBlockHandler}><span role="img" aria-label="">🚫</span> Bloquear usuario</Button>
        </Options>
        {confirm}
      </div>
    );
  }
}

export default withTheme(React.memo(CardModeration));