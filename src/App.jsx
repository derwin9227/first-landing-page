import './sass/main.scss';
import {Navbar, Home, Skills, Projects, About, Footer} from './components/index';

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Skills />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
