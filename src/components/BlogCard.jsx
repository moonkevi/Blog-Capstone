
import { Link } from 'react-router-dom';
import './BlogCard.css';

function BlogCard({ id, image, category, title, description }) {
  return (
    <article className="blog-card">

      <div className="blog-card-image">
        <img src={image} alt={title} />
      </div>

      <div className="blog-card-content">

        <p className="blog-category">{category}</p>

        <h3>{title}</h3>

        <p className="blog-description">
          {description}
        </p>

        <Link to={`/blog/${id}`} className="read-more">
          Read More →
        </Link>

      </div>

    </article>
  );
}

export default BlogCard;

