import { Link } from 'react-router-dom';
import './Categories.css';

function Categories() {
  const categories = [
    {
      number: '01',
      name: 'Fashion & Style',
      description:
        'Explore personal style, timeless outfits, fashion trends and the art of expressing yourself through clothing.',
      image: '/Images/fsh4.jpg',
      slug: 'Fashion',
    },
    {
      number: '02',
      name: 'Food & Culture',
      description:
        'Discover inspiring recipes, food traditions and the stories behind the meals we enjoy.',
      image: '/Images/food4.jpg',
      slug: 'Food',
    },
    {
      number: '03',
      name: 'Travel & Places',
      description:
        'Explore destinations, different cultures and experiences that make the world interesting.',
      image: '/Images/travel4.jpg',
      slug: 'Travel',
    },
    {
      number: '04',
      name: 'Everyday Living',
      description:
        'Ideas for creating a meaningful, balanced and beautiful everyday life.',
      image: '/Images/life4.jpg',
      slug: 'Lifestyle',
    },
    {
      number: '05',
      name: 'Personal Growth',
      description:
        'Stories about self-development, building good habits and becoming your best self.',
      image: '/Images/growth4.jpg',
      slug: 'Personal Growth',
    },
    {
      number: '06',
      name: 'Inspiration',
      description:
        'Thought-provoking ideas and stories that encourage you to see life differently.',
      image: '/Images/insp4.jpg',
      slug: 'Inspiration',
    },
  ];

  const featured = categories[0];
  const remainingCategories = categories.slice(1);

  return (
    <main className="categories-page">

      <section className="category-intro">
        <p>THE JOURNAL / CATEGORIES</p>
        <h1>Explore What Interests You.</h1>
        <span>
          Every great story begins with curiosity. Find your next read.
        </span>
      </section>

      {/* FEATURED CATEGORY */}

      <section className="featured-category">

        <div className="featured-category-image">
          <img src={featured.image} alt={featured.name} />
        </div>

        <div className="featured-category-content">
          <p>FEATURED COLLECTION / {featured.number}</p>
          <h2>{featured.name}</h2>
          <span>{featured.description}</span>

          <Link to={`/articles?category=${encodeURIComponent(featured.slug)}`}>
            Explore Collection →
          </Link>
        </div>

      </section>

      {/* ALL OTHER CATEGORIES */}

      <section className="category-directory">

        <div className="directory-heading">
          <div>
            <p>FIND YOUR INTEREST</p>
            <h2>Browse All Topics</h2>
          </div>

          <span>06 Collections</span>
        </div>

        <div className="directory-list">

          {remainingCategories.map((category) => (
            <article className="directory-item" key={category.number}>

              <span className="directory-number">
                {category.number}
              </span>

              <div className="directory-image">
                <img src={category.image} alt={category.name} />
              </div>

              <div className="directory-content">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>

              <Link
                to={`/articles?category=${encodeURIComponent(category.slug)}`}
                className="directory-link"
                aria-label={`Explore ${category.name}`}
              >
                →
              </Link>

            </article>
          ))}

        </div>

      </section>

    </main>
  );
}

export default Categories;