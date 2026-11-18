import { useState } from 'react';
import BlogCard from '../components/BlogCard';
import './Articles.css';

const articles = [
  {
    id: 1,
    category: 'Fashion',
    title: 'Building a Timeless Wardrobe',
    description: 'Discover how to create a wardrobe that reflects your personality and never goes out of style.',
    image: '/Images/fashion3.jpg',
  },
  {
    id: 2,
    category: 'Travel',
    title: 'The Beauty of Exploring New Places',
    description: 'Discover new destinations, different cultures and experiences that make every journey special.',
    image: '/Images/travel3.jpg',
  },
  {
    id: 3,
    category: 'Food',
    title: 'The Secret to Enjoying Simple Meals',
    description: 'Explore the beauty of everyday cooking and how simple ingredients can create wonderful meals.',
    image: '/Images/food3.jpg',
  },
  {
    id: 4,
    category: 'Lifestyle',
    title: 'Creating a Life You Love',
    description: 'Small everyday choices can help you create a more meaningful and balanced lifestyle.',
    image: '/Images/lifestyle3.jpg',
  },
  {
    id: 5,
    category: 'Personal Growth',
    title: 'The Power of Small Habits',
    description: 'Learn how small consistent actions can make a meaningful difference in your personal growth.',
    image: '/Images/growth3.jpg',
  },
  {
    id: 6,
    category: 'Inspiration',
    title: 'Finding Inspiration in Everyday Life',
    description: 'Sometimes the most beautiful inspiration comes from ordinary moments around us.',
    image: '/Images/food3.jpg',
  },
];

const featuredArticle = {
  category: 'EDITOR’S PICK',
  title: 'The Art of Living Beautifully',
  description: 'A fresh perspective on finding beauty, meaning and inspiration in the everyday moments that make life special.',
  image: '/Images/art.jpg',
};

function Articles() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Fashion',
    'Travel',
    'Food',
    'Lifestyle',
    'Personal Growth',
    'Inspiration',
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      article.category === selectedCategory;

    const matchesSearch =
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="articles-page">

      {/* Magazine Introduction */}
      <section className="articles-header">
        <p>THE JOURNAL / EXPLORE</p>
        <h1>Stories Worth Reading.</h1>
        <span>
          Ideas, experiences and inspiration for curious minds.
        </span>
      </section>

      {/* Editor's Pick */}
      <section className="editors-pick">
        <div className="editors-image">
          <img src={featuredArticle.image} alt="Editor's pick" />
        </div>

        <div className="editors-content">
          <p>{featuredArticle.category}</p>
          <h2>{featuredArticle.title}</h2>
          <span>{featuredArticle.description}</span>
          <a href="#latest-stories">Explore Stories →</a>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="article-discovery">
        <div className="discovery-heading">
          <p>FIND YOUR NEXT READ</p>
          <h2>Discover Stories</h2>
        </div>

        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="article-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category ? 'selected' : ''
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Latest Stories */}
      <section className="all-articles" id="latest-stories">
        <div className="all-articles-heading">
          <h2>Latest Stories</h2>
          <p>{filteredArticles.length} articles found</p>
        </div>

        <div className="articles-grid">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <BlogCard
                key={article.id}
                image={article.image}
                category={article.category}
                title={article.title}
                description={article.description}
              />
            ))
          ) : (
            <p>No articles found. Try another search.</p>
          )}
        </div>
      </section>

    </main>
  );
}

export default Articles;