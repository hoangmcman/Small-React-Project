import React, { useState } from 'react';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import products from './data/data';
import Card from './components/Card';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // Filtered products based on search query and selected category
  const filteredProducts = products.filter((product) => {
    // Search filter
    const matchesQuery = product.title.toLowerCase().includes(query.toLowerCase());

    // Category filter
    const matchesCategory = selectedCategory 
      ? product.category === selectedCategory ||
        product.color === selectedCategory ||
        product.company === selectedCategory ||
        product.newPrice.toString() === selectedCategory ||
        product.title === selectedCategory
      : true;

    // Return true if both filters match
    return matchesQuery && matchesCategory;
  });

  // Handlers
  const handleInputChange = (event) => setQuery(event.target.value);
  const handleChange = (event) => setSelectedCategory(event.target.value);
  const handleClick = (event) => setSelectedCategory(event.target.value);

  // Map filtered products to Card components
  const result = filteredProducts.map(({ img, title, star, reviews, newPrice, prevPrice }) => (
    <Card 
      key={Math.random()} // Preferably replace with a unique id
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice}
      prevPrice={prevPrice}
    />
  ));

  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
}

export default App;
