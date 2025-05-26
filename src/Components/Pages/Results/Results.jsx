import React, { useState, useEffect } from 'react'
import classes from './Results.module.css'
import LayOut from '../../LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../../Api/EndPoints'
import ProductCard from '../../Product/ProductCard'


function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    axios.get(`${productUrl}/category/${categoryName}`).then((res) => {
      setResults(res.data);
    }).catch((err) => {
      console.log(err);
    })
  },[categoryName])
  

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{}}>Category / {categoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {results.map((Product) => (
            <ProductCard key={Product.id} product={Product} renderDesc={false} renderAdd={true} />
          ))}

        </div>
     </section>
    </LayOut>
  );
}

export default Results;

