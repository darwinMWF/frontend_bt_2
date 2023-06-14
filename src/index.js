import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals'
import App from './App';
// import './index.css';
// import App from './App';
;

// ReactDOM --> virtualDOM

// jsx --> javascript-xml  it is combination of javascript + html
//jsx -->.... converted by babel into react.createlement
{/* <>content</> --> jsx Fragment */}
const name = "mukesh"
// function by defination
function abc(para){

  return 7+9;
}
//function by expression  --> anonymous
const printinfo = function (){
  console.log("hello world");
}

//arrow function
const xyz = () => {
  console.log(new Date());
}


// const obj = {
//   name:"yogesh",
//   age:25,
//   work:()=>{
//     console.log("dancing")
//   }
// }



// component --> it is javascript function which return JSX
// rule to make component
// name of components first will capital








const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
