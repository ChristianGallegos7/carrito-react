import React from 'react';
import { AddToCartIcon } from './Icons'

import { useState } from 'react';

export const Products = ({ products }) => {

    

    return (

        <div className="container mt-4">


            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <img src={product.thumbnail} alt={product.title} className="card-img-top" style={{ objectFit: "cover", height: "50%" }} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">${product.price}</p>
                            <strong>{product.category}</strong>
                            <div className="mt-auto">
                                <button className="btn btn-dark">
                                    <AddToCartIcon /> Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
