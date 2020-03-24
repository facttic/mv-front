import React from 'react';
import styled, { withTheme } from 'styled-components';
import Api from '../api';
import Constants from '../constants'

const Wrapper = styled.aside`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // self-align: center;
  text-align: center;
`;

const Image = styled.img`
  display: inline-block;
  width: 36px;
  height: auto;
  // border-radius: 50%;
  margin: 0;
  position: relative;
  top: 6px;
`;

const Text = styled.p`
  font-size: 0.75em;
  align-self: center;
  margin-bottom: 0;

  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    font-size: 0.6875em;
  }
`;

// const Count = styled.div`
//   display: flex;
//   flex-direction: columns;
//   align-items: center;
// `;

const Count = styled.span`
  // display: inline-block;
  // color: white;
  // background-color: #243243;
  // font-family: 'Roboto',sans-serif;
  // border-radius: 10%;
  // padding: 5px;
  // margin-right: 15px;
  // margin-left: 15px;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
`;

const UsersCounter = (props) => {
    const { minUsersCount } = Constants
    const areEnoughUsers = props.count >= minUsersCount;

    function renderCounter() {
        return (
          <Wrapper>
              <Text>
                <Image src='/24.png' alt='' width="360" height="230" />
                Somos más de <Count>{Math.floor(props.count/100)*100}</Count> pañuelos marchando
              </Text>
          </Wrapper> 
        )
    }

    return (
        <div>
            { areEnoughUsers &&
                renderCounter()
            }   
        </div>
    ); 
}

export default withTheme(React.memo(UsersCounter));