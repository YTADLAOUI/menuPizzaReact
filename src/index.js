import React, { useState } from "react";
import ReactDOM  from "react-dom/client";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
return(
<div>
  <Headar/>
  <Pizza/>
  <Pizza/>
  <Pizza/>
  <Footer/>
</div>
) 
}

function Headar(){

  return (<div><h1>Fast React Pizza Co.</h1></div>)
}

function Menu(){}

function Footer(){
  const [currentTime,setCurrentTime]=useState( new Date().toLocaleTimeString())
 setTimeout(()=>{
    setCurrentTime(new Date().toLocaleTimeString())
   },1000)
return <footer>{currentTime}, We're currently open</footer>
  // return(React.createElement('footer',null,"We're currently open"))
}

function Pizza(){ 
  return(
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza spinaci"/>
        <h2>Pizza Spinaci</h2>
        <p>tomato,mozarella,spanich,and ricotta chesse </p>
    </div>
     );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
  <App/> 
</React.StrictMode>
);