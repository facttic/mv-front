import React from 'react';
import styled, {withTheme} from 'styled-components'

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 0.25em 30px 0.25em;
  background: ${(props) => props.theme.colors.primary};
  text-align: right;
  opacity: 0.95;
  z-index: 9999999;
  color: #FFFFFF;
`;

const Link = styled.a`
  color: inherit;
  font-family: ${props => props.theme.fonts.text};
  text-decoration: none;
  font-size: 0.625rem;
  display: inline-block;
  margin 0 10px;
`;


const Footer = () => {
    return (
        <FooterContainer>
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