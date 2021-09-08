

export const NavBar =(props) => {
    return (
        <div>
        <nav>
        <ul className="lista">


            <li classname="listaProductos">{props.productos[0]}</li>
            <li classname="listaProductos">{props.productos[1]}</li>
            <li classname="listaProductos">{props.productos[2]}</li>
            <li classname="listaProductos">{props.productos[3]}</li>

        </ul>    

        </nav>

        </div>
    )
}



