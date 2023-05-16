import { web, responsive, logic } from "../../img"

const Todo = ({img, alt, heading}) => (
  <div className="about__me-card">
    <img src={img} alt={alt} />
    <h3 className="heading">{heading}</h3>
  </div>
);

const About = () => {
  return (
    <section className='about' id='about'>
      <h4 className="heading">What can i do for you</h4>
      <div className="about__me">
        <Todo img={web} alt={"web"} heading={""} text={""}/>
        <Todo img={responsive} alt={"responsive"} heading={"Responsive web design"} text={""}/>
        <Todo img={logic} alt={"logic"} heading={"Business logic"} text={""}/>
        <Todo img={web} heading={""} text={""}/>
      </div>
    </section>
  )
}

export default About

