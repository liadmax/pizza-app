import React from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductsElements';
import product1 from '../../images/product1.jpg'
import product2 from '../../images/product2.jpg'
import product3 from '../../images/product3.jpg'
export const productData = [
  {
    img: product1,
    alt: 'Pizza',
    name: 'Supreme Pizza',
    Desc:
      'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
    price: '$19.99',
    button: 'Add to Cart'
  },
  {
    img: product2,
    alt: 'Pizza',
    name: 'Hawaiian Paradise',
    Desc:
      ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
    price: '$16.99',
    button: 'Add to Cart'
  },
  {
    img: product3,
    alt: 'Pizza',
    name: 'Veggie Overload',
    Desc:
      ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
    price: '$14.99',
    button: 'Add to Cart'
  }
];



const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {productData.map((product, index) =>{
            return(
                <ProductCard key={index}>
                    <ProductImg src={product.img} alt={product.alt}/>
                    <ProductInfo>
                        <ProductTitle>{product.name}</ProductTitle>
                        <ProductDesc>{product.Desc}</ProductDesc>
                        <ProductPrice>{product.price}</ProductPrice>
                        <ProductButton>{product.button}</ProductButton>
                    </ProductInfo>
                </ProductCard>
                
            )
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;