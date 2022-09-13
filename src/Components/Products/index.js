import React from 'react';
import { productData, productDataTwo } from './Data';

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
        {productData.map((product, index) =>{
            return(
                <ProductCard key={index}>
                    <ProductImg src={product.img} alt={product.alt} />
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
        <ProductSweet>
          {productDataTwo.map((product, index) =>{
            return(
                <ProductCard key={index}>
                    <ProductImg src={product.img} alt={product.alt} />
                    <ProductInfo>
                        <ProductTitle>{product.name}</ProductTitle>
                        <ProductDesc>{product.Desc}</ProductDesc>
                        <ProductPrice>{product.price}</ProductPrice>
                        <ProductButton>{product.button}</ProductButton>
                    </ProductInfo>
                </ProductCard>
                
            )
        })}
      </ProductSweet>
    </ProductsContainer>
  );
};

export default Products;