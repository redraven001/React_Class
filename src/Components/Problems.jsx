import React, { useState } from 'react'

export default function problems() {
    // Problem 1: Create a component with a text input. As the user types, save the input value to local storage. When the component mounts, initialize the input value from local storage if it exists.
//     const defaultText = localStorage.getItem("autoSave-text");
//     const [inputText, setInputText] = useState(defaultText ? defaultText : "");
//     const handleChange = (e) => {
//         localStorage.setItem("autoSave-text", e.target.value);
//         setInputText(e.target.value);
//     }
//   return (
//     <div>
//         <h3>Enter some text</h3>
//         <input type='text' onChange={handleChange} value={inputText}/>
//         <button onClick={()=>setInputText("")}>Clear text</button>
//     </div>
//   )
//p2 : passwaord strength checker
    // const [level,setLevel]=useState("");
    // const handleChange=(e)=>{
    //     const p=e.target.value;
    //     let c=0;
    //     if(p.length>=8){c++;
    //     if(/[A-Z]/.test(p))c++;
    //     if(/[0-9]/.test(p))c++;
    //     if(/[a-z]/.test(p))c++;
    //     if(/[^A-Za-z0-9]/.test(p))c++;}
    //     if(c==1)setLevel("Level 1");
    //     if(c==2 || c==3)setLevel("Level 2");
    //     if(c==4 || c==5)setLevel("Level 3");
    //     if(c==0)setLevel("Weak Password");
    // }
    // return(
    //     <div>
    //         <input type='password' onChange={handleChange} placeholder='enter your password'/>
    //         <div>{level}</div>
    //     </div>
    // )
//p3 progress bar
// const [p,setP]=useState(0);
// const getC=()=>{
//     if(p>79)return "green";
//     if(p>40)return "orange";
//     return "red";
// }
// const inc=()=>{
//     if(p==100)return;
//     setP(prev=>prev+10)
// }
// const desc=()=>{
//     if(p==0)return;
//     setP(prev=>prev-10)
// }
// return(
//     <div>
//         <div style={{width:"100%",height:"30px",border:'1px solid black'}}>
//             <div style={{width:`${p}%`,height:"100%",backgroundColor:getC(),}}>
//                 <span style={{position:"absolute",left:"50%", transform:"translateX(-50%)"}}>{p}%</span>
//                 </div>
//         </div>
//         <div style={{display:"flex",justifyContent:'center',gap:"1rem"}}>
//             <button onClick={inc}>+10%</button>
//             <button onClick={desc}>-10%</button>
//         </div>
//     </div>
// )
//p4: counter
const [count,setCount]=useState(0);
return(
    <><div>Count:{count}</div>
    <div>
        <button onClick={()=>setCount(prev=>prev+1)}>Inc</button>
        <button onClick={()=>setCount(prev=>prev-1)}>Desc</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div></>
)
}
