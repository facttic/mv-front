import React from 'react';
import styled, { withTheme } from 'styled-components';
import Api from "../api";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  self-align: center;
`;

const Image = styled.img`
  display: block;
  width: 100px;
  height: 60px;
  border-radius: 50%;
  margin: 0;
  position: relative;
  top: 8px;
`;

const Name = styled.h3`
  font-size: 0.9em;
  align-self: center;
`;

const Count = styled.div`
  display: flex;
  flex-direction: columns;
  align-items: center;
`;

const NamePart = styled.span`
  display: inline-block;
  color: white;
  background-color: #243243;
  font-family: 'Roboto',sans-serif;
  border-radius: 10%;
  padding: 5px;
  margin-right: 15px;
  margin-left: 15px;
`;

const UsersCounter = (props) => {

    let usersAreEnought = props.count > 100;

      function renderCounter() {
          return (
            <Wrapper>
                <div><Image src="/24.png" alt="" /></div>
                <Count>
                <Name>  
                    Somos 
                    <NamePart>{props.count}</NamePart> 
                    pañuelos marchando
                </Name>
                </Count>
            </Wrapper> 
          )
      }

    return (
        <div>
            { usersAreEnought &&
                renderCounter()
            }   
        </div>
    ); 
}

export default withTheme(React.memo(UsersCounter));