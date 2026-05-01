import Menu from '../../components/menu/Menu'
import cocoonSeries from '../../assets/cocoon_series.png'
import './Home.css'

export default function Home() {
    return (
      <div id='home'>
        <Menu></Menu> 
          <div>
            <img src={cocoonSeries} alt="Hero"  id='hero-img'/>
          </div>
      </div>
    )
  }
  