import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

    function Sumar(){
        setCount(count + 1)
        
    }
    function Restar(){
        setCount(count - 1)

    }
    const agregarCarrito = ()=>{
        onAdd(count)
    }

    return (
        <div>
            <h3>SOy itemCount</h3>
            <label>{count}</label>
            <button onClick={Sumar}>+</button>
            <button onClick={agregarCarrito}>Agregar al carrito</button>
            <button onClick={Restar}>-</button>
        </div>
    )
}

export default ItemCount
