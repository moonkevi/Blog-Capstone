import BlogCard from './BlogCard';
import './LatestArticles.css';

function LatestArticles() {
  return (
    <section className="latest-section">

      <div className="latest-heading">
        <p>FRESH FROM THE JOURNAL</p>
        <h2>Latest Articles</h2>
        <span>
          Explore our newest stories, ideas and inspiration.
        </span>
      </div>

      <div className="latest-grid">
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
      </div>

    </section>
  );
}

export default LatestArticles;
