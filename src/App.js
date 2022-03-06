import Navbar from './components/Topbar/navbar'
import Head from './components/Head/head'
import Aboutout from './components/Aboutme/aboutme';
import Skill from './components/Skill/skill'
import Work from './components/Work/work';
import Contact from './components/Contact/contact';

function App() {
  return (
    <>
      <Navbar />
      <Head />
      <Aboutout />
      <Skill />
      <Work />
      <Contact />
    </>


  );
}

export default App;
