import React from 'react';
import styled from 'styled-components'

const Link = styled.a`
  color: inherit;
  font-family: ${props => props.theme.styles.colors.accent};
  text-decoration: none;
  display: inline-block;
  margin 0 10px;
`;

const SponsorsContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 60px;
`;

const Image = styled.img`
max-width: 250px;
`;

const Sponsors = (props) => {
    return (
        <SponsorsContainer>
            {props.sponsors.map(sponsor => <Link
                href={sponsor.pageUri}
                target="_blank"
                rel="noopener noreferrer">
                <Image alt={sponsor.name} src={sponsor.logoUri}></Image>
            </Link>)}

        </SponsorsContainer>
    );
};

export default Sponsors;