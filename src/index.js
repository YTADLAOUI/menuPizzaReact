import React, { useState } from "react";
import ReactDOM  from "react-dom/client";
import './index.css'
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
<div className="container">
  <Headar/>
  <Menu />
  <Footer/>
</div>
) 
}

function Headar(){

  return (<header className="header"><h1 >Fast React Pizza Co.</h1></header>)
}

function Menu(){
  console.log(pizzaData.map(el=>(el.name)
  ))
  return(
  
  <main className="menu">
    <h2>Our Menu</h2>
  <Pizza/>
  </main>)
}

function Footer(){
  const [currentTime,setCurrentTime]=useState( new Date().toLocaleTimeString())
 setTimeout(()=>{
    setCurrentTime(new Date().toLocaleTimeString())
   },1000)
return <footer className="footer">{currentTime}, We're currently open</footer>
  // return(React.createElement('footer',null,"We're currently open"))
}

function Pizza(){ 
  return(
    <div className="pizza">
      <img src="pizzas/spinaci.jpg" alt="Pizza spinaci"/>
        <h3>Pizza Spinaci</h3>
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