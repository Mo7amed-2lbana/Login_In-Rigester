import { NavLink } from "react-router-dom";


const Navbar = () => {

    const lists = ['Home' , 'About' , 'Products' , 'Cart' , 'Contact'];
    
  return <>
  
    <nav >
            <div className="container ">
                <div className="logo">
                    <h2 className="">Store</h2>
                </div>
                <ul className="lists">

                    {lists.map((list)=> <><li> <NavLink to={list}>{list}</NavLink></li></>)}

                </ul>
            </div>




    </nav>
  
  
  </>
}

export default Navbar