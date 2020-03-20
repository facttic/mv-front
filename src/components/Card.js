import React from 'react';
import styled, { withTheme } from 'styled-components';

const CardWrapper = styled.div`
  width: 300px;
  height: 200px;
  background-color: #ddd;
`;

const Image = styled.img`
  display:block;
  margin: 0;
  width: 100%;
  height: 100%;
`;

const Card = (props) => {
  
  return (
    <CardWrapper className="Card">
      <div onClick={props.click}>
        <Image src={props.src} />
      </div>
    </CardWrapper>
  );
}

export default withTheme(React.memo(Card));