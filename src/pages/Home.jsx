import Hero from '../components/Hero';
import FeaturedArticles from '../components/FeaturedArticles';
import LatestArticles from '../components/LatestArticles';

function Home() {
  return (
    <main>
      <Hero />
      <FeaturedArticles />
      <LatestArticles />
    </main>
  );
}

export default Home;