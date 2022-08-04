import Head from 'next/head'
import Header from '../components/header'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Products from '../components/products'
import Footer from '../components/footer'

export default function Home() {
  const [products, getProducts] = useState([]);
  const [pagination, getPagination] = useState({});
  const [display, setDisplay] = useState(false);

  const url = "https://api.tjori.com/api/v7filters/na/women-all-products/?format=json";

  const getAllProducts = () => {
    axios.get(`${url}`)
    .then((response) => {
      const allProducts = response.data.data.products;
      const pagination = response.data.data.pagination;
      //add out data to state
      getProducts(allProducts);
      getPagination(pagination);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  const showFooter = () => {
    setDisplay(true);
  }

  useEffect(() => {
    getAllProducts();
    showFooter();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Tann Trim</title>
        <meta name="description" content="Next and Axios Powered Dynamic Products Listing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Products products={products} pagination={pagination}/>
      </main>
      <Footer display={display}/>
    </div>
  )
}
