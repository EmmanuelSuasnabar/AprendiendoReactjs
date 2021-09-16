import {useState, useEffect} from 'react'
import {getFetch} from '../../utils/Mock'
import ItemCount from '/components/ItemCount'
import ItemList from '../ItemList/ItemList'


function ItemListContainer ({Saludo}) {
    const [joyas, setJoyas] = useState([])
    const [loading,setLoading] = useState(true)

    const onAdd = (cant) =>{
        console.log(cant)
    }

    useEffect(()=>{
        getFetch.then(respuesta =>{
            setJoyas(respuesta)
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))

    })

    return (
        
 
        <div>
          <h1><p>{Saludo}</p></h1>
          { loading ? <h2>Cargando...</h2> : <itemList joyas={joyas}/>}
          <ItemCount stock={8} initial={1} onAdd={onAdd}/>
        </div>
    )
}


export default ItemListContainer