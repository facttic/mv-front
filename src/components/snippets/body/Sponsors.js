import React from 'react';
import styled from 'styled-components'

const Link = styled.a`
  color: ${props => props.color || props.theme.styles.colors.accent};
  font-family:  ${props => props.font || props.theme.styles.text.body.font};
  text-decoration: none;
  display: inline-block;
  margin 0 10px;
`;

const SponsorsContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 40px;
margin-bottom: 70px;
`;

const TextContainer = styled.p`
font-family: ${props => props.font || props.theme.styles.text.body.font};
color: ${props => props.color || props.theme.styles.colors.accent};
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
                <TextContainer color={props.sponsorsColor} font={props.sponsorsFont}> Nos acompañan en esta marcha </TextContainer>
                <ImagesContainer>
                    {props.sponsors.map((sponsor, key) => <Link
                        key={key}
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