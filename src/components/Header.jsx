import React from 'react'
import { Filters } from './Filters'

export const Header = ({ changeFilters }) => {
    return (
        <header>
            <h1 className='text-center'>React Shop 👜 </h1>
            <Filters changeFilters={changeFilters} />
        </header>
    )
}
