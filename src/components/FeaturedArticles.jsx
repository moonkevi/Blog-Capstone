import BlogCard from './BlogCard';
import './FeaturedArticles.css';

function FeaturedArticles() {
  return (
    <section className="featured-section">

      <div className="featured-heading">
        <p>EXPLORE OUR WORLD</p>

        <h2>Featured Articles</h2>

        <span>
          Discover stories, ideas and inspiration
          from different corners of life.
        </span>
      </div>

      <div className="featured-grid">

        <BlogCard
          image="/Images/fashion.jpg"
          category="Fashion"
          title="The Art of Personal Style"
          description="Discover how to express your personality through fashion and everyday style."
        />

        <BlogCard
          image="/Images/food.jpg"
          category="Food"
          title="A Taste of Everyday Life"
          description="Explore delicious meals and discover the beauty of good food."
        />

        <BlogCard
          image="/Images/lifestyle.jpg"
          category="Lifestyle"
          title="Finding Beauty in Small Things"
          description="Sometimes the smallest moments bring the greatest happiness."
        />

        <BlogCard
          image="/Images/travel.jpg"
          category="Travel"
          title="The World Is Waiting"
          description="Explore new destinations, experiences and unforgettable adventures."
        />

      </div>

    </section>
  );
}

export default FeaturedArticles;