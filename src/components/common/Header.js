import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
                <div className='container-fluid'>
                    <NavLink className='navbar-brand' to='/'>DHL</NavLink>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                            data-bs-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false'
                            aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'/>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarCollapse'>
                        <ul className='navbar-nav me-auto mb-2 mb-md-0'>
                            <li className='nav-item'>
                                <NavLink className='nav-link' end to='/'>Albums</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/favorites'>Favorites</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
