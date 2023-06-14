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

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.map((pizza) => (
        <Pizza
          name={pizza.name}
          image={pizza.photoName}
          ingredient={pizza.ingredients}
          price={pizza.price}
          soldOut={pizza.soldOut}
        />
      ))}
    </main>
  );
}

function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

 
  setTimeout(()=>{
    setCurrentTime(new Date().toLocaleTimeString())
  },1000)

  return (
    <footer className="footer">
      {currentTime}, We're currently open
    </footer>
  );
}

function Pizza(props) {
  const { name, image, ingredient, price, soldOut } = props;

  return (
    <div className="pizza">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{ingredient}</p>
      <p>{price}</p>
      <p>{soldOut}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
  <App/> 
</React.StrictMode>
);