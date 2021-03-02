import React from 'react';
import styled, { withTheme } from 'styled-components'

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 0.25em 30px 0.25em;
  background: ${(props) => props.theme.styles.colors.accent};
  text-align: right;
  opacity: 0.95;
  z-index: 9999999;
  color: #FFFFFF;
`;

const Link = styled.a`
  color: inherit;
  font-family: ${props => props.theme.styles.text.body.font};
  text-decoration: none;
  display: inline-block;
  margin 0 10px;
`;

const FooterText = styled.div`
  float: left;
`;


const Footer = (props) => {
  return (
    <FooterContainer>
      <FooterText>
        {props.footerText}
      </FooterText>
      <Link
        href="https://facttic.org.ar/fit"
        target="_blank"
        rel="noopener noreferrer"
      >
        Desarrollado por FACTTIC
            </Link>
    </FooterContainer>
  );
};

export default withTheme(Footer);