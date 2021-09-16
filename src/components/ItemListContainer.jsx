import 'App'
import ItemCount from './ItemCount'

function ItemListContainer ({Saludo}) {

    const onAdd = (cant) =>{
        console.log(cant)
    }

    return (
        <div>
          <h1><p>{Saludo}</p></h1>
          <ItemCount stock={8} initial={} onAdd={onAdd}/>
        </div>
    )
}


export default ItemListContainer