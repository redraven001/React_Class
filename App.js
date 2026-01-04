import React from 'react';
import ReactDOM from 'react-dom/client';
import Problems from './src/Components/Problems';
const rheading=React.createElement('div',{id:"p",key:"1"},React.createElement('div',{id:'c',key:"2"},[React.createElement('h3',{id:"rhdg",key:"3"},"Welcome to React"),React.createElement('p',{id:"ptxt",key:"4"},"lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque!")])); 
console.log(rheading);
const jsxheading = <h1 id='ptxt'> This is a jsx element </h1>
console.log(jsxheading);
const ReactFuntionalComponent=()=><h1> This is React Functional Component </h1>;
const lineNumber=3;
const BodyComponent = () => (
    <div>
        {/* Component composition using one component in another */}
        {/* {jsxheading}
        <ReactFuntionalComponent/>
        {ReactFuntionalComponent()}
        <h2> This is Body Component </h2>
        <p> This is a paragraph inside body component at line number {lineNumber}</p> */}
        <Problems/>
    </div>
)
const rootelement=ReactDOM.createRoot(document.getElementById('rRoot'));
//rootelement.render(rheading);
//rootelement.render(jsxheading);
rootelement.render(<BodyComponent/>);
