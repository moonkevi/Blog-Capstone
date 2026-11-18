import './BlogCard.css';

function BlogCard({ image, category, title, description }) {
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

        <a href="#">Read More →</a>

      </div>

    </article>
  );
}

export default BlogCard;