import Menu from '../../components/menu/Menu'
import cocoonSeries from '../../assets/cocoon_series_web.jpg'
import './Home.css'

export default function Home() {
    return (
      <div id='home'>
        <Menu></Menu> 
        <div id='home-intro'>
          <h1>Rebecca Xiaoyi</h1>
          <div>Watercolor and Mixed Media Artist based in New York City</div>
        </div>
          <div>
            <img src={cocoonSeries} alt="Hero"  id='hero-img'/>
          </div>
      </div>
    )
  }
  