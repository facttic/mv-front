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
  font-family: ${props => props.theme.styles.text.subtitle.font};
  color:${props => props.theme.styles.text.subtitle.color};
  font-size: 1rem;
  align-self: center;
  margin-bottom: 0;

  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    font-size: 0.975rem;
  }

  @media (min-width: 340px) and (max-width: 380px) {
    max-width: 315px;
    margin-left: auto;
    margin-right: auto;
  }
`;


const Count = styled.span`
  color: ${props => props.theme.styles.colors.accent};
  font-weight: 700;
`;

const UsersCounter = (props) => {
    const { minUsersCount } = Constants
    const areEnoughUsers = props.count >= minUsersCount;

    function renderCounter() {
        return (
          <Wrapper>
              <Text>
                <CounterIcon 
                  imgSrc={props.imgSrc}
                  imgAlt={props.countImgAlt}
                  imgHeight={props.countImgHeight}
                  imgWidth={props.countImgWidth}
                />
                Somos más de <Count>{(Math.floor(props.count/100)*100).toLocaleString("es")}</Count> personas marchando
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