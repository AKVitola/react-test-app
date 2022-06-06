import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import ProductComponent from './ProductComponent'
import { getProducts } from '../store/actions/productsActions';

import '../style/generalStyle.css';

const ProductsListing = () => {
    const products = useSelector((state) => state.productListing.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get('https://dummyjson.com/products')
            .catch((err) => {
                console.log('Err: ', err);
            });

        dispatch(getProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className='page-container'>
            <ProductComponent />
        </div>
    );
};

export default ProductsListing;