import './sass/main.scss';
import {Navbar, Home, Skills, About, Footer} from './components/index';

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Skills />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
