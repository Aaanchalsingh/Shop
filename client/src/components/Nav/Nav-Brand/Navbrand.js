import './NavBrand.css'
import { Link } from 'react-router-dom';
import Logo from "./style.png";

const NavBrand = () => {
    return (
        <div href="#home" className='navbrand__container mt-2'>
           <h1 className='navbrand'>
               <Link to="/"><img src={Logo} alt="" srcset="" /></Link>
            </h1>
        </div>
     );
}

export default NavBrand;