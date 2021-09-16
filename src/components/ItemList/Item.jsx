import React from 'react'

const Item = ({joya}) => {
    return (
        
    <div key={joya.id} className='card w-50 mt-3'>
          <div className='card-header'>{joya.nombre}</div>
          <div className='card-body'>
              <img src={joya.picture} alt='picture' />
          </div>
          <div className="card-footer"
              <button className='btn btn-outline-primary btn-block"> Detalles </button>
          </div>
    </div>

    )}


export default Item
