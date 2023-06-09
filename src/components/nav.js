import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
export default function nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
            <div className="container">
                <NavLink className='navbar-brand text-uppercase fw-bold d-lg-none' to='/'>Start Bootstrap</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item px-lg-4"><NavLink className='nav-link text-uppercase' to='/'>Home</NavLink></li>
                        <li className="nav-item px-lg-4"><NavLink className='nav-link text-uppercase' to='/about'>About</NavLink></li>
                        <li className="nav-item px-lg-4"><NavLink className='nav-link text-uppercase' to='/product'>Product</NavLink></li>
                        <li className="nav-item px-lg-4"><NavLink className='nav-link text-uppercase' to='/store'>Store</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}