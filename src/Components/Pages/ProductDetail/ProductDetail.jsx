import React, { useEffect, useState } from 'react'
import classes from './ProductDetail.module.css'
import LayOut from '../../LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../../Api/EndPoints'
import ProductCard from '../../Product/ProductCard'
import Loader from '../../Loader/Loader'




function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/${productId}`).then((res) => {
      setProduct(res.data)
      
      setIsLoading(false);
    }).catch((err) => {
      console.log(err);
      setIsLoading(false);
    })
  },[productId])
  return (
    <LayOut>
      {isLoading ? (<Loader />) : (<ProductCard product={product}
        flex={true}
        renderDesc={true}
        renderAdd={true}
      
      />)}
    {/* {product && Object.keys(product).length > 0 ? (
      <ProductCard product={product} />
    ) : (
      <p>Loading product...</p>
    )} */}
      
  </LayOut>
  )
}

export default ProductDetail
