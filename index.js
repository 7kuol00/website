import React from 'react';
import  ReactDOM from 'react-dom/client';
import' ./index.css';

const MyFirtstComponent=()=>{
    return <div>
    Hello  There, this first component
    </div>
}

function TheComponent(){
    return <h1>Hey there dear team!</h1>
}

const  root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TheComponent />
);

// cook rice for a family of 3 members

let rice = true;
let water = false;
let energy = true;
let salt = true;






