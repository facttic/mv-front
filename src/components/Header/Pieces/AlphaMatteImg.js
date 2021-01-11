import React, { useRef, useEffect } from 'react'

const AlphaMatteImg = (props) =>{

  const img = document.createElement('img')
  let canvas = useRef(null)
  
  const loaded = () => {
    const context = canvas.current.getContext('2d')
    const mask = document.createElement('canvas')
    const maskContext = mask.getContext('2d')
    let imgData

    mask.width = img.naturalWidth
    mask.height = img.naturalHeight
    canvas.current.width = Math.floor(img.naturalWidth/2)
    canvas.current.height = img.naturalHeight
		maskContext.drawImage(img, 0, 0)
		imgData = maskContext.getImageData(0, 0, mask.width, mask.height)
		for(let j = 0; j < canvas.current.height; j++) {
			for(let i = 0; i < canvas.current.width; i++) {
				const index = (mask.width*j+i)*4
        const indexMascara = (mask.width*j+(i+canvas.current.width))*4
				const gray = imgData.data[indexMascara+1]
				imgData.data[index+3] = gray
			}
		}
		maskContext.putImageData(imgData, 0, 0)
		context.drawImage(mask, 0, 0)
  }
  
  useEffect(() => {    
    img.src = props.src
    img.addEventListener('load', loaded)
    
    return () => { 
      img.removeEventListener('load', loaded)
    }
  })
  return (
    <canvas ref={canvas} className={props.className} style={props.style}></canvas>
  );
}

export default AlphaMatteImg