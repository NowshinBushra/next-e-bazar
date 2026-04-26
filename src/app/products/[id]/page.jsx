"use client"

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {

    const [product, setProduct] = useState([])
    
    const params = useParams()
    const productId = params?.id
    console.log(productId);

    useEffect(() => {
        async function fetchProduct() {
            const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const data = await res.json()
            setProduct(data);
            console.log(data);
        }
        fetchProduct()
    }, [])

    return (
        <div>
            <p>{product.title}</p>
        </div>
    );
};

export default Page;