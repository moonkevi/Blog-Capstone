
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
          id="1"
          image="/Images/fashion3.jpg"
          category="Fashion"
          title="Building a Timeless Wardrobe"
          description="Discover how to create a wardrobe that reflects your personality and never goes out of style."
        />

        <BlogCard
          id="3"
          image="/Images/food3.jpg"
          category="Food"
          title="The Secret to Enjoying Simple Meals"
          description="Explore the beauty of everyday cooking and how simple ingredients can create wonderful meals."
        />

        <BlogCard
          id="4"
          image="/Images/lifestyle3.jpg"
          category="Lifestyle"
          title="Creating a Life You Love"
          description="Small everyday choices can help you create a more meaningful and balanced lifestyle."
        />

        <BlogCard
          id="2"
          image="/Images/travel3.jpg"
          category="Travel"
          title="The Beauty of Exploring New Places"
          description="Discover new destinations, different cultures and experiences that make every journey special."
        />

      </div>

    </section>
  );
}

export default FeaturedArticles;


