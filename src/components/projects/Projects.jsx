import {natours, modern, gpt3} from '../../img'

const urlLinks = {
    natours: 'https://natours-project-sooty.vercel.app/',
    gpt3: 'https://react-gpt3-three.vercel.app/',
    modern: 'https://bank-modern-ten.vercel.app/'
}

const Card = ({image, alt, url}) => (
    <div className='projects__list-item'>
        <h3>{alt}</h3>
        <a href={url} target='_blank'><img src={image} alt={alt} /></a>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
)

const Projects = () => {
  return (
    <section className='projects' id='projects'>
        <div className='projects__text'>
            <h2>Projects</h2>
        </div>
        <div className="projects__list">
            <Card image={natours} alt={'natours'} url={urlLinks.natours}/>
            <Card image={modern} alt={'modern bank'} url={urlLinks.modern}/>
            <Card image={gpt3} alt={'GPT-3'} url={urlLinks.gpt3}/>
        </div>
    </section>
  )
}

export default Projects