import {github, linkedin} from '../../img';

const Footer = () => {
  return (
    <section className='footer' id='footer'>
      <h3 className="footer__heading heading">
        Social Networks
      </h3>
      <div className="footer__items">
        <a href='https://github.com/derwin9227' target='_blank'><img src={github} alt="github logo" /></a>
        <a href='https://www.linkedin.com/in/derwin-hernandez-36bb11262/' target='_blank'><img src={linkedin} alt="linkedin logo" /></a>
      </div>
    </section>
  )
}

export default Footer