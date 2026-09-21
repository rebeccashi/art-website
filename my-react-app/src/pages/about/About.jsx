import Menu from '../../components/menu/Menu'
import './About.css'
import portrait from '../../assets/portrait.jpg'

export default function About() {
    return (
      <div>
        <Menu></Menu> 
        <div id='about'>
          <div id='about-image' className="column">
            <img src={portrait} alt="A photo of the artist in a black cocktail dress standing in front of a watercolor portrait." />
          </div>
          <div className="column">
            <h1 id="about-title">About The Artist</h1>
            <div id='about-body'>Rebecca Xiaoyi is a watercolor and mixed media artist whose work explores emotional vulnerability, transformation, and the expressive nature of the figure. She began studying watercolor in childhood, and eventually returned to the medium as an adult after exploring acrylic painting and oil painting. Drawn to watercolor’s fluidity and unpredictability, she rebuilt her practice through regular figure drawing and watercolor studies focused on expressive portraiture and figures. Her recent work focuses on expressive female figures and portraiture.
  <br/> <br/>In 2026, her works exhibited in two group shows: “Sapphic City” at Enoch’s and “The Rites of Spring: Art of Ritual and Rebirth” at Solas Studio. 
  </div>
        </div>
        </div>
      </div>
    )
  }