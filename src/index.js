import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "prosciutto.jpg",
      soldOut: false,
    },
  ];

function Header() {
    return (
        <div>
            <h1 style={{color:"orange", fontSize:"48px", textTransform:"uppercase"}}>Jing Yi's Pizza Co.</h1>
        </div>
    );
}

const PizzaItem = ({ name, ingredients, price, photoName }) => {
    return (
      <div>
        <h1>{name}</h1>
        <p style={{fontSize:"12px", fontStyle:"italic"}}>{ingredients}</p>
        <p>Price: ${price.toFixed(2)}</p>
        <img src={photoName} alt={name} width="300"/>
      </div>
    );
  };

function Pizza() {
    return (
      <div className="pizzas">
        {pizzaData.map((pizza, index) => (
          <PizzaItem
            key={index}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoName={pizza.photoName}
          />
        ))}
      </div>
    );
  }


function Menu() {
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            <p style={{fontSize:"20px", fontStyle:"italic"}}>Authentic Italian Cuisine, all from our stone oven</p>
            <Pizza />
        </div>
    );
}

function Footer() {
    const date = new Date();
    const showTime = date.getHours();
    return (
      <footer className="footer">
        {showTime >= 10 && showTime <= 22
          ? "We're currently open"
          : "Sorry we're closed"}
      </footer>
    );
}

function Order() {
    return (
        <button className="btn">Order</button>
    );
}

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
            <Order />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);