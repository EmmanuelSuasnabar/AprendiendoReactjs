import {useState, useEffect} from 'react'
import {getFetchOne} from '../../utils/Mock'

const ItemDetailContainer = () => {
    
    useEffect(() =>{
        const [anillo, setAnillo] = useState({})

        getFetchOne
        .then(resp => setAnillo(resp))

    },[])
    
    return (
        <>
            <ItemDetail anillo={anillo}/>
        </>
    )
}

export default ItemDetailContainer
