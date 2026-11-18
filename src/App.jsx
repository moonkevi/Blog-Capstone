import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedArticles from './components/FeaturedArticles';
import LatestArticles from './components/LatestArticles';
import Footer from './components/Footer';

function App() {
   return (
      <div>
         <Navbar />
         <Hero />
         <FeaturedArticles />
         <LatestArticles />
         <Footer />
      </div>
   );
}

export default App;
