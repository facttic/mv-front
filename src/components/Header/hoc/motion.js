import React from 'react'
import styled, { keyframes } from 'styled-components'

export const withFloat = (Component, settings = {}) => {
  const { duration = '4s', offset = '15px' } = settings;
  const animation = keyframes`
    0% { transform: translate3d(0,${offset},0); }
    100% { transform: translate3d(0,-${offset},0); }
  `;
  const AnimatedComponent = styled(Component)`
    animation-name: ${animation};
    animation-duration: ${duration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
  `
  return props => (<AnimatedComponent {...props} />)
}

export const withWind = (Component, settings = {}) => {
  const { duration = '5s', offset = '35px' } = settings;
  const animation = keyframes`
    0% { transform: skew(1deg, -2deg) rotate3d(0,1,0,3deg); }
    100% { transform: skew(-1deg, 2deg) rotate3d(0,1,0,-3deg); }
  `;
  const AnimatedComponent = styled(Component)`
    animation-name: ${animation};
    animation-duration: ${duration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
  `
  return props => (<AnimatedComponent {...props} />)
}

export const withBeat = (Component, settings = {}) => {
  const { duration = '1.5s', offset = '15px' } = settings;
  const animation = keyframes`
    0% { transform: scale(1); }
    15% { transform: scale(1.02) rotateX(8deg); }
    25% { transform: scale(1); }
    35% { transform: scale(1.015) rotateX(8deg); }
    45% { transform: scale(1.005); }
    100% { transform: scale(1); }
  `;
  const AnimatedComponent = styled(Component)`
    animation-name: ${animation};
    animation-duration: ${duration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
  `
  return props => (<AnimatedComponent {...props} />)
}

export const withBeat2 = (Component, settings = {}) => {
  const { duration = '5s', offset = '15px', delay = '1s' } = settings;
  const animation = keyframes`
    0% { transform: rotateY(0deg);
        transform: skew(.5deg, -1deg)}
    15% { transform: rotateY(7deg) rotateX(5deg) rotateZ(-0.25deg);transform: skew(-.5deg, 1deg)  }
    25% { transform: rotateY(0deg); transform: skew(.5deg, -1deg) }
    40% { transform: rotateY(7deg) rotateX(8deg) rotateZ(-0.25deg);  transform: skew(-.5deg, 1deg) }
    55% { transform: rotateY(5deg) rotateX(5deg) rotateZ(-0.1deg);  transform: skew(.5deg, -1deg)}
    100% { transform: rotateY(0deg);skew(-.5deg, 1deg)}
  `;
  const AnimatedComponent = styled(Component)`
    animation-name: ${animation};
    animation-duration: ${duration};
    animation-delay:${delay};
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
  `
  return props => (<AnimatedComponent {...props} />)
}


export const withSwinging = (Component, settings = {}) => {
  const { duration = '3s', swinging = 8 } = settings;
  const animation = keyframes`
    0% { transform: rotate(${swinging}deg); }
    100% { transform: rotate(${-swinging}deg); }
  `;
  const AnimatedComponent = styled(Component)`
    animation-name: ${animation};
    animation-duration: ${duration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
  `
  return props => (<AnimatedComponent {...props} />)
}

export const wingWithSwinging = (Component, settings = {}) => {
  const { duration = '.5s', swinging = 6 } = settings;
  const animation = keyframes`
    0% { transform: rotate(${swinging}deg); }
    100% { transform: rotate(${-swinging}deg); }
  `;
  const AnimatedComponent = styled(Component)`
    animation-name: ${animation};
    animation-duration: ${duration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
  `
  return props => (<AnimatedComponent {...props} />)
}