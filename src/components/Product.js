import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewProduct from './NewProduct';
import './NewProduct.css';

const Product = () => {

    const [data, setData] = useState();
    const [limit, setLimit] = useState(30);
    const [view, setView] = useState(2);

    const getAllProduct = async() => {
    const response = await axios.get('https://dummyjson.com/products');
        console.log("response=> ", response?.data);
        if(response?.data)
        {
            setData(response?.data);
        }
        
    }

    const handleLimit = (e) =>{
        setLimit(Number(e.target.value));
    }

    const handleView = (e) =>{
        setLimit(Number(e.target.value));
    }

    useEffect(() => {
        getAllProduct();
        console.log("data=> ", data?.limit)

    },[]);

  return (
    <>
        <h2>Pruducts</h2>
        {/* <p>{data.limit}</p> */}
        <select value={limit} onChange={handleLimit}>
            <option  value= {2}>2</option>
            <option  value= {5}>5</option>
            <option value={10}>10</option>
            <option value={30}>30</option>

        </select>

        <br/>
        <select value={view} onChange={handleView} >
            <option  value= {1}>List View</option>
            <option  value= {2}>Normal View</option>
        </select>

        <div style={{ display: "flex", width: "100%", flexWrap: "wrap", gap: "3rem", justifyContent: "center", alignItems: "center" }}>
        {data?.products.slice(0, limit).map((product, index)=> (
            view === 2?
            <NewProduct className='product-container'  key={index} product={product} />
            : <NewProduct className='product-list'  key={index} product={product} />
        ))}</div>


    </>
  )
}

export default Product