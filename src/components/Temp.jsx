// import React from "react";

// import { useState } from "react";
// const Content = () => {

//     const [name, setName] = useState('Shivam');
//    const updateName = () => {
//         const people = ['Arun', 'Sam', 'Aditya'];
//         const i = Math.floor(Math.random() * 3);
//         setName(people[i]);
//     }


//     const handleName = () => {
//         const names = ['Bob', 'Shivam', 'Cheems']
//         const i = Math.floor(Math.random() * 3);
//         return names[i];
//     }
//     const handleClick = () => {
//         console.log("You clicked it !")
//     }
//     const handleClick2 = (name) => {
//         console.log(`You clicked ${name}!`)
//     }
//     const handleClick3 = (e) => {
//         console.log(e)
//     }
//     const temp = () => {
//         const list = document.querySelectorAll(".button-sec");
//         list.forEach(() => {
//             console.log("HAPPY")
//         })
//     }
//     return (
//         <div>
//             <ul>
//                 <li onClick={updateName}> {name}</li>
//                 <li >{handleName()}</li>
//                 <li >{handleName()}</li>
//                 <button className="button-sec" onClick={handleClick}>Click it</button>
//                 <button className="button-sec" onClick={() => { handleClick2('Shivam') }}>Click it</button>
//                 <button className="button-sec" onClick={(e) => handleClick3(e)}>Click it</button>
//                 <button className="button-sec" onDoubleClick={handleName()}>Clicked on {handleName()}</button>
//             </ul>
//             <button onClick={() => temp()}>Urusai</button>
//         </div>
//     )
// }

// export default Content;