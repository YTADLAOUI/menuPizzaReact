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
  return (
    <div className="container">
      <Header />
      <Menu pizzaData={pizzaData} />
      <Footer />
    </div>
  );
}

function Header() {
  return <header className="header"><h1>Fast React Pizza Co.</h1></header>;
}

function Menu(props) {
  const { pizzaData } = props;
 const nbrMenu=pizzaData.length
  console.log(nbrMenu);

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
      {
        (nbrMenu>0)?
      pizzaData.map((pizza) => (
        <Pizza
          name={pizza.name}
          image={pizza.photoName}
          ingredient={pizza.ingredients}
          price={pizza.price}
          soldOut={pizza.soldOut}
        />
      )): <p>We're still working on our menu. Please come back later :)</p>
      }
      </ul>
    
    </main>
  );
}
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const hour=new Date().getHours();
  const openHour= 12;
  const closeHour=22;
  const open = hour>= openHour && hour<=closeHour
 
  setTimeout(()=>{
    setCurrentTime(new Date().toLocaleTimeString())
  },1000)

  return (
    <footer className="footer">
      <span className="timedynamic">{currentTime}</span>{open ?<Order openHour={openHour}  closeHour={closeHour}/>:<p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>} 
    </footer>
  );
}

function Pizza(props) {
  const { name, image, ingredient, price, soldOut } = props;

  return (
    <li className={`pizza ${soldOut?"sold-out" : ""}`}>
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
      <p>{ingredient}</p>
      <span>{soldOut ? "SOLD OUT":price}</span>
     </div>
      
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
  <App/> 
</React.StrictMode>
);