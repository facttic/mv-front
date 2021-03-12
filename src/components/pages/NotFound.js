import React from 'react';
const notfoundBackground= require('../../assets/imgs/notfound.jpg')


const NotFound = () => {
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <h1 style={{position:"absolute"}}>No encontramos una marcha</h1>
            <img src={notfoundBackground}/> 
        </div>
    );
};

export default NotFound;