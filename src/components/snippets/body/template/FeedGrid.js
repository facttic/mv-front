import React from 'react';
import styled, {withTheme} from "styled-components";

const Grid = styled.div`
  position: relative;
  z-index: 9;
  display: grid;
  grid-template-columns: repeat(${props => props.theme.columns.s}, 1fr);
  gap: ${props => props.theme.columns.gap.s}px;
  margin: 30px 0;
  transform: rotate3d(0deg, 0deg, 0deg);

  @media (min-width: ${props => props.theme.pageWidth.s}px) {
    grid-template-columns: repeat(${props => props.theme.columns.s}, 1fr);
    gap: ${props => props.theme.columns.gap.s}px;
  }
  @media (min-width: ${props => props.theme.pageWidth.m}px) {
    grid-template-columns: repeat(${props => props.theme.columns.m}, 1fr);
    gap: ${props => props.theme.columns.gap.m}px;
  }
  @media (min-width: ${props => props.theme.pageWidth.l}px) {
    grid-template-columns: repeat(${props => props.theme.columns.l}, 1fr);
    gap: ${props => props.theme.columns.gap.l}px;
  }
  @media (min-width: ${props => props.theme.pageWidth.xl}px) {
    grid-template-columns: repeat(${props => props.theme.columns.xl}, 1fr);
    gap: ${props => props.theme.columns.gap.xl}px;
  }
`;


const FeedGrid = (props) => {
    return (
        <Grid>{props.gallery}</Grid>
    );
};

export default withTheme(FeedGrid);