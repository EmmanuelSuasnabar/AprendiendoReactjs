import React from 'react'

const ItemDetail = ({anillo}) => {
    return (
        <>
        <h2>{anillo.id}</h2>
        <h2>{anillo.nombre}</h2>
        <h2>{anillo.picture}</h2>
            
        </>
    )
}

export default ItemDetail
