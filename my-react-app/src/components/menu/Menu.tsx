import './Menu.css'
import { Link } from 'react-router-dom'
import { EXTERNAL_URLS } from '../../constants/urls'

export default function Menu() {
    return (
      <div id="menu">
          <ul>
             <Link to='/' className='link'>Home</Link>
             {/* <Link to='/gallery' className='link'>Gallery</Link> */}
             <Link to={EXTERNAL_URLS.store} className='link' target="_blank" rel="noopener">
               Shop
             </Link>
             {/* <Link to='/about' className='link'>About</Link>
             <Link to='/contact' className='link'>Contact</Link> */}
          </ul>
      </div>
    )
  }
  