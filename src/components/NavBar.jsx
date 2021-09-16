import '../App'

const NavBar =(productos) => {
    return (
        <div>
        <NavBar>
        <nav>
        <ul className="lista">


            <li classname="listaProductos">{productos[0]}</li>
            <li classname="listaProductos">{productos[1]}</li>
            <li classname="listaProductos">{productos[2]}</li>
            <li classname="listaProductos">{productos[3]}</li>

        </ul>    
        </nav>
        <CartWidget/>
        </NavBar>

        </div>
    )
}


export default NavBar