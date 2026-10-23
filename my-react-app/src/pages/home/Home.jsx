import Menu from '../../components/menu/Menu'
import {homePageArt} from '@/data/artwork.js'
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
            <img src={homePageArt.cover} alt="Hero"  id='hero-img'/>
          </div>
      </div>
    )
  }
  