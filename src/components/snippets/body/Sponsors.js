import React from 'react';
import styled from 'styled-components'

const sponsorsIconTemplate = require('../../../assets/imgs/sponsor.png')

const Link = styled.a`
  color: ${props => props.color || props.theme.styles.colors.accent};
  font-family:  ${props => props.font || props.theme.styles.text.body.font};
  text-decoration: none;
  display: inline-block;
  margin 0 10px;
`;

const SponsorsContainer = styled.div`
// display: flex;
// justify-content: center;
// margin-top: 40px;
// margin-bottom: 70px;
`;

const TextContainer = styled.p`
font-family: ${props => props.font || props.theme.styles.text.body.font};
// color: ${props => props.color || props.theme.styles.colors.accent};
color: #222222;
text-align: center;
justify-content: center;
display: flex;
text-shadow:#818181 0px 0px 1px;
font-size:.9em;
`;

const ImagesContainer = styled.div`
justify-content: center;
display: block;
margin-top: 24px;
text-align:center;
`;

const Image = styled.img`   
    max-height: 100px;
`;

const Sponsors = (props) => {
    return (
        <SponsorsContainer>
{/*             <div>
                <TextContainer color={props.sponsorsColor} font={props.sponsorsFont}> Nos acompañan en esta marcha </TextContainer>
                <ImagesContainer>
                    {props.sponsors.map((sponsor, key) => <Link
                        key={key}
                        href={sponsor.pageUri}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image alt={sponsor.name} src={sponsor.logoUri || sponsorsIconTemplate}></Image>
                    </Link>)}
                </ImagesContainer>
            </div> */}
            
            <ImagesContainer>
                <Image src={require('../../../assets/imgs/isologotipoPlantamosMemoria.png')}></Image>
            </ImagesContainer>
                
            <TextContainer color={props.sponsorsColor} font={props.sponsorsFont}> Campaña oficial de los Organismos de Derechos Humanos de la República Argentina</TextContainer>

        </SponsorsContainer>
    );
};

export default Sponsors;