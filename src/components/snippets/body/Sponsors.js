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

const TextContainer = styled.p`
font-family: ${props => props.theme.styles.colors.accent};
justify-content: center;
display: flex;
`;

const ImagesContainer = styled.div`
justify-content: center;
display: flex;
margin-top: 24px;
`;

const Image = styled.img`
max-height: 100px;
`;

const Sponsors = (props) => {
    return (
        <SponsorsContainer>
            <div>
                <TextContainer> Nos acompañan en esta marcha </TextContainer>
                <ImagesContainer>
                    {props.sponsors.map(sponsor => <Link
                        href={sponsor.pageUri}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image alt={sponsor.name} src={sponsor.logoUri}></Image>
                    </Link>)}
                </ImagesContainer>
            </div>
        </SponsorsContainer>
    );
};

export default Sponsors;