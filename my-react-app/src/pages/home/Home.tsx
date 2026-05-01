import Menu from '../../components/menu/Menu'
import cocoonSeries from '../../assets/cocoon_series.png'
import './Home.css'

export default function Home() {
    return (
      <div id='home'>
        <Menu></Menu> 
        <div id='home-intro'>
          <h1>Rebecca Xiaoyi</h1>
          <div>Expressive figurative artist based in New York City</div>
        </div>
          <div>
            <img src={cocoonSeries} alt="Hero"  id='hero-img'/>
          </div>
      </div>
    )
  }
  