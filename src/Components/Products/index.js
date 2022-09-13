import React from 'react';
import { ProductData, ProductDataTwo } from './Data';

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
  ProductButton,
  ProductSweet
} from './ProductsElements';





const Products = ({ heading }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {ProductData.map((Product, index) =>{
            return(
                <ProductCard key={index}>
                    <ProductImg src={Product.img} alt={Product.alt} />
                    <ProductInfo>
                        <ProductTitle>{Product.name}</ProductTitle>
                        <ProductDesc>{Product.Desc}</ProductDesc>
                        <ProductPrice>{Product.price}</ProductPrice>
                        <ProductButton>{Product.button}</ProductButton>
                    </ProductInfo>
                </ProductCard>
                
            )
        })}
        </ProductWrapper>
        <ProductSweet>
          {ProductDataTwo.map((Product, index) =>{
            return(
                <ProductCard key={index}>
                    <ProductImg src={Product.img} alt={Product.alt} />
                    <ProductInfo>
                        <ProductTitle>{Product.name}</ProductTitle>
                        <ProductDesc>{Product.Desc}</ProductDesc>
                        <ProductPrice>{Product.price}</ProductPrice>
                        <ProductButton>{Product.button}</ProductButton>
                    </ProductInfo>
                </ProductCard>
                
            )
        })}
      </ProductSweet>
    </ProductsContainer>
  );
};

export default Products;