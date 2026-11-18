import BlogCard from '../components/BlogCard';
import './Articles.css';

function Articles() {
  return (
    <main className="articles-page">

      <section className="articles-header">
        <p>EXPLORE OUR JOURNAL</p>
        <h1>All Articles</h1>
        <span>
          Discover stories, ideas and inspiration from our journal.
        </span>
      </section>

      <section className="articles-grid">

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

        <BlogCard
          image="/Images/travel2.jpg"
          category="Travel"
          title="Discovering New Places"
          description="Travel opens our minds to new cultures, experiences and adventures."
        />

        <BlogCard
          image="/Images/food2.jpg"
          category="Food"
          title="The Joy of Good Food"
          description="Discover simple meals and the pleasure of sharing good food."
        />

        <BlogCard
          image="/Images/fashion2.jfif"
          category="Fashion"
          title="Creating Your Own Style"
          description="Learn how small fashion choices can express your personality."
        />

      </section>

    </main>
  );
}

export default Articles;