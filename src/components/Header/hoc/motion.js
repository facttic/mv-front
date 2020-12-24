import React from 'react'
import styled, { keyframes } from 'styled-components'

export const withFlutter = (Component, settings = {}) => {
  const { duration = '1.5s', x = 0, y = 1, z = 0 } = settings;
  const animation = keyframes`
    0% { transform: rotate3d(${x},${y},${z},75deg) skew(${10*y}deg, 0deg); filter: brightness(60%); }
    100% { transform: rotate3d(${x},${y},${z},0deg); filter: brightness(100%); }
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
  const { duration = '3s', offset = '15px' } = settings;
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
  const { duration = '1.5s', offset = '15px' } = settings;
  const animation = keyframes`
    0% { transform: rotateY(0deg); }
    15% { transform: rotateY(7deg) rotateX(5deg) rotateZ(-0.25deg); }
    25% { transform: rotateY(0deg); }
    40% { transform: rotateY(7deg) rotateX(8deg) rotateZ(-0.25deg); }
    55% { transform: rotateY(5deg) rotateX(5deg) rotateZ(-0.1deg); }
    100% { transform: rotateY(0deg); }
  `;
  const AnimatedComponent = styled(Component)`
    animation-name: ${animation};
    animation-duration: ${duration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
  `
  return props => (<AnimatedComponent {...props} />)
}

export const withRails = (Component, settings = {}) => {
  const { duration = '10s' } = settings;
  const animation = keyframes`
    0% { transform: translateX(0); opacity: 1; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateX(100%); opacity: 0; }
  `;
  const Rails = styled.div`
    animation-name: ${animation};
    animation-duration: ${duration};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  `
  return props => (<Rails className={props.className}><Component {...props} /></Rails>)
}

export const withBlastOff = (Component, settings = {}) => {
  const { duration = '10s', offset = '-30%' } = settings;
  const animation = keyframes`
    0% { transform: translateY(100%); }
    10% { transform: translateY(100%); }
    90% { transform: translateY(0); }
    100% { transform: translateY(0); }
  `;
  const BlastOff = styled.div`
    animation-name: ${animation};
    animation-duration: ${duration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  `
  return props => (<BlastOff className={props.className}><Component {...props} /></BlastOff>)
}

export const withFlight = (Component, settings = {}) => {
  const { duration = '10s', offset = '-30%' } = settings;
  const animation = keyframes`
    0% { transform: translate3d(0,100%,0); }}
    10% { transform: translate3d(0,80%,0); }}
    100% { transform: translate3d(100%,0,0); }
  `;
  const Flight = styled(Component)`
    animation-name: ${animation};
    animation-duration: ${duration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  `
  return props => (<Flight {...props} />)
}

export const withFlightHorizontal = (Component, settings = {}) => {
  const { duration = '10s', offset = '-30%' } = settings;
  const animation = keyframes`
    0% { transform: translateX(0); }}
    100% { transform: translateX(300px); }
  `;
  const Flight = styled.div`
    animation-name: ${animation};
    animation-duration: ${duration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    position: absolute;
    width: 100%;
    height: 100%;
  `
  return props => (<Flight className={props.className}><Component {...props} /></Flight>)
}

export const withFloatingWrap = (Component, settings = {}) => {
  const { duration = '3.25s', offset = '5%' } = settings;
  const animation = keyframes`
    0% { transform: translate3d(0,${offset},0) scale(0.65); }
    100% { transform: translate3d(0,-${offset},0); }
  `;
  const FloatingWrap = styled.div`
    animation-name: ${animation};
    animation-duration: ${duration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
  `
  return props => (<FloatingWrap className={props.className}><Component {...props} /></FloatingWrap>)
}

export const withZoom = (Component, settings = {}) => {
  const { duration = '6s', offset = '5%' } = settings;
  const animation = keyframes`
    0% { transform: scale(0.45); }
    100% { transform: scale(1); }
  `;
  const Zoom = styled.div`
    animation-name: ${animation};
    animation-duration: ${duration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
  `
  return props => (<Zoom className={props.className}><Component {...props} /></Zoom>)
}

export const withSpin = (Component, settings = {}) => {
  const { duration = '12s', direction = 1 } = settings;
  const animation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(${360*direction}deg); }
  `;
  const AnimatedComponent = styled(Component)`
    animation-name: ${animation};
    animation-duration: ${duration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  `
  return props => (<AnimatedComponent {...props} />)
}

export const withTilt = (Component, settings = {}) => {
  const { duration = '2s', direction = 1 } = settings;
  const animation = keyframes`
    0% { transform: rotate(53deg); }
    50% { transform: rotate(53deg); }
    100% { transform: none; }
  `;
  const AnimatedComponent = styled(Component)`
    animation-name: ${animation};
    animation-duration: ${duration};
    animation-timing-function: ease-in-out;
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