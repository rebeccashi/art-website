import Menu from '../../components/menu/Menu'
import cocoonSeriesList from '../../data/seriesList'
import './Home.css'

export default function Home() {
    return (
      <div id='home'>
        <Menu></Menu> 
        <div id='home-intro'>
          <h1>Rebecca Xiaoyi</h1>
          <h2>Watercolor and Mixed Media Artist based in New York City</h2>
        </div>
          <div>
            <img src={cocoonSeriesList[0].cover} alt="Hero"  id='hero-img'/>
          </div>
      </div>
    )
  }
  