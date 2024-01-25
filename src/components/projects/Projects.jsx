import {natours, esoterismo, gpt3} from '../../img'

const urlLinks = {
    natours: 'https://natours-project-sooty.vercel.app/',
    gpt3: 'https://react-gpt3-three.vercel.app/',
    esoterismo: 'https://esoterismo.vercel.app/'
}

const Card = ({image, alt, url, desc}) => (
    <div className='projects__list-item'>
        <h3>{alt}</h3>
        <a href={url} target='_blank'><img src={image} alt={alt} /></a>
        <a href={url} target='_blank'><p>{desc}</p></a>
    </div>
)

const Projects = () => {
  return (
    <section className='projects' id='projects'>
        <div className='projects__text'>
            <h2>Projects</h2>
        </div>
        <div className="projects__list">
            <Card image={natours} alt={'natours'} url={urlLinks.natours} desc={"Learn more about natours..."}/>
            <Card image={esoterismo} alt={'esoterismo'} url={urlLinks.esoterismo} desc={"Encuentra el amor..."}/>
            <Card image={gpt3} alt={'GPT-3'} url={urlLinks.gpt3} desc={"An amazing OpenAI web..."}/>
        </div>
    </section>
  )
}

export default Projects