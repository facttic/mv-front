import React, {useRef, useEffect, useState} from 'react';
import styled, {withTheme} from "styled-components";
import Media from '../media/Media'

const columnsGap = 15

const Grid = styled.div`
  position: relative;
  z-index: 9;
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  gap: ${columnsGap}px;
  margin: 30px 0;
  transform: rotate3d(0deg, 0deg, 0deg);
  
  @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
    grid-template-columns: repeat(7, 1fr);
  }

  @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
    grid-template-columns: repeat(5, 1fr);
  }
    
`;


const FeedGrid = (props) => {

  const [thumnbnailsWidth, setThumbnailsWidth] = useState();
  const gridRef = useRef();
  let columns = props.columns
  let posts = props.posts

  const setColumns = (columns, ref) => {  
    let containerWidth = ref.current.offsetWidth
    let columnWidth = (containerWidth-(columnsGap*columns))/columns 
    setThumbnailsWidth(columnWidth) 
  }  

  useEffect(() => {
      setColumns(columns, gridRef)
  })


  return (
        <Grid ref={gridRef} columns={columns}>
          {posts.map( post => {
                return (
                  <Media
                    mediaWidth={thumnbnailsWidth}
                    mediaHeight={thumnbnailsWidth}
                    key={post.post_id_str}
                    tweet={post}
                    alt=""
                    click={props.mouseClickHandler}
                    enter={props.mouseEnterHandler}
                    leave={props.mouseLeaveHandler}
                  />
                );
            })
          }
        </Grid>
    );
};

export default withTheme(FeedGrid);