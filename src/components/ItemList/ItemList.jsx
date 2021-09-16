import React from 'react'
import Item from './Item'

function ItemList({joyas}) {
    return (
        <>
          {joyas.map(joya => <Item joya = {joya} /> )}
        </>
    )
}

export default ItemList
