import React from 'react';
import { useState } from 'react';

export const Filters = ({ changeFilters }) => {

    const [minPrice, setMinPrice] = useState(0);

    const handleChangeMinPrice = (e) => {
        setMinPrice(e.target.value)
        changeFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        changeFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <label htmlFor="price" className="form-label">Precio a partir de:</label>
                    <input type="range" id="price" className="form-range" min="0" max="1700"
                        onChange={handleChangeMinPrice}
                    />
                    ${minPrice}

                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="categoria" className="form-label">Categoría</label>
                    <select name="categoria" id="categoria" className="form-select" onChange={handleChangeCategory}>
                        <option value="all">Todas</option>
                        <option value="laptops">Portátiles</option>
                        <option value="smartphones">Celulares</option>
                    </select>
                </div>
            </div>
        </div>
    );
};
