import { Header } from "./components/Header";
import { Products } from "./components/Products"
import { products } from './mocks/products.json';
import { useState } from "react";

function App() {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  });

  const filtrarProductos = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const productosFiltrados = filtrarProductos(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={productosFiltrados} />
    </>
  )
}

export default App
