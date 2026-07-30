//import { useEffect,useState } from 'react';
//import axios from 'axios';
import {Row, Col} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
//import products from '../products';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/ProductApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
 

const HomeScreen = () => {

const {keyword,pageNumber}=useParams();
 /** @type {any} */
const {data , isLoading,error}=useGetProductsQuery({keyword,pageNumber});
     
 
  return (
    <>
       {!keyword ? (<ProductCarousel />) : (<Link to='/' className='btn btn-light mb-4'>Go Back</Link>)}
       {isLoading ? (
        <Loader />
        ): error ? (
                    <Message variant='danger'>
                      {typeof error.data?.message === 'string' 
                        ? error.data.message 
                        : error.error || 'An error occurred'}
                    </Message>
                  ):(<>
                          
        <h1>Latest Products</h1>
        <Row>
          {data.products.map((product) => (
            <Col key={product._id}  sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
          ))}
        </Row>
        <Paginate pages={data.pages} page={data.page} keyword={keyword ? keyword : ''} />
       </>) }
         
    </>
  )
}

export default HomeScreen; 