import React from 'react'
import './Products.css'
import Card from '../components/Card'

function Products({result}) {
  return (
    <div>
      <section className="card-container">{result}</section>
    </div>
  )
}

export default Products
