import './Menu.css'
import { Link } from 'react-router-dom'
import { EXTERNAL_URLS } from '../../data/urls'

export default function Menu() {
    return (
      <div id="menu">
          <ul>
             <Link to='/' className='menu-item'>Home</Link>
             <Link to={EXTERNAL_URLS.store} className='menu-item' target="_blank" rel="noopener">
               Shop
             </Link>
             <Link to='/portfolio' className='menu-item'>
               Portfolio
             </Link>
             <Link to='/about' className='menu-item'>About</Link>
             {/* <Link to='/contact' className='menu-item'>Contact</Link> */}
          </ul>
      </div>
    )
  }
  