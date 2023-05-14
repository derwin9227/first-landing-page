import { html5, css3, javascript, sass, react} from '../../img'

const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <ul>
        <li><img src={html5} alt="html5" /></li>
        <li><img src={css3} alt="css3" /></li>
        <li><img src={sass} alt="sass" /></li>
        <li><img src={javascript} alt="javascript" /></li>
        <li><img src={react} alt="react" /></li>
      </ul>
    </section>
  )
}

export default Skills