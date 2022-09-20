import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

        const naviagte = useNavigate();
        //custom hooks de react router, se creo para ayudar con la navegacion

    const onLogout = () =>{
        naviagte('/login');
    };


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 container-nav">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => "nav-item nav-link" }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info' >
                        Juan
                    </span>
                    <button 
                        className='nav-item nav-link btn'
                        onClick={  onLogout }
                     >
                        Log out
                    </button>
                </ul>
            </div>
        </nav>
    )
}