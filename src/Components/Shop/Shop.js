import React, { useEffect, useState } from 'react';
import List from '../List/List';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleBtn = (product) => {
        const newList = [...list, product]
        setList(newList);
    }
    const resetBtn = () => {
        setList([]);
    }

    const randomItems = () => {
        if (list.length > 0) {
            const random = Math.floor(Math.random() * list.length);
            setList([list[random]])
        }
    }

    return (
        <div className='container'>
            <div className='product-container'>

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleBtn={handleBtn}
                    ></Product>)
                }
            </div>
            <div>
                <List
                    key={list.id}
                    list={list}
                    resetBtn={resetBtn}
                    randomItems={randomItems}
                ></List>
            </div>
        </div>
    );
};

export default Shop;