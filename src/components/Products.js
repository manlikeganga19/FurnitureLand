import React from 'react';
import {products} from '../data';
import ProductSlider from '../components/ProductSlider';

const Products = () => {
  const {title, subtitle} = products
  return (
    <section className='section'> 
      <div className='container mx-auto'>
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <ProductSlider/>
      </div>
    </section>
  );
};

export default Products;
