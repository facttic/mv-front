import React from 'react';
import styled, { withTheme } from 'styled-components';
import Constants from '../../../constants'
import Image from './Image'

const Wrapper = styled.aside`
  text-align: center;
`;

const CounterIcon = styled(Image)`
  display: inline-block;
  height: auto;
  height: 16.5px;
  width: 18px;
  margin: 0 8px;
  position: relative;
  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    margin: 0 3px;    
  }
  display: none;
`;

const Text = styled.p`
  font-family: ${props => props.font || props.theme.styles.text.subtitle.font};
  color:${props => props.color ||  props.theme.styles.text.subtitle.color};
  font-size:1.25em;
  align-self: center;
  margin-bottom: 0;
  text-shadow:#818181 0px 0px 1px;

  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    font-size:1.25em;
  }

  @media (max-width: ${(props) => props.theme.pageWidth.s}px) {
    font-size:1em;
  }
`;


const Count = styled.span`
  color: ${ props => props.color || props.theme.styles.colors.accent};
  font-weight: 700;
`;

const UsersCounter = (props) => {
    const { minUsersCount } = Constants
    const areEnoughUsers = props.count >= minUsersCount;

    function renderCounter() {
        return (
          <Wrapper>
              <Text
                color={props.color}
                font={props.font}
                >
                <CounterIcon 
                  imgSrc={props.imgSrc}
                  imgAlt={props.countImgAlt}
                  imgHeight={props.countImgHeight}
                  imgWidth={props.countImgWidth}
                />
                Somos <Count color={props.color}>{props.count}</Count> personas marchando
                <CounterIcon 
                  imgSrc={props.imgSrc}
                  imgAlt={props.countImgAlt}
                  imgHeight={props.countImgHeight}
                  imgWidth={props.countImgWidth}
                />
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