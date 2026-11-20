
import { Link } from 'react-router-dom';
import './About.css';

const topics = [
  {
    number: '01',
    title: 'Fashion',
    description:
      'Discover personal style, timeless outfits and the latest fashion inspiration.'
  },
  {
    number: '02',
    title: 'Travel',
    description:
      'Explore beautiful destinations, different cultures and unforgettable experiences.'
  },
  {
    number: '03',
    title: 'Food',
    description:
      'Find inspiration in everyday cooking, delicious meals and food experiences.'
  },
  {
    number: '04',
    title: 'Lifestyle',
    description:
      'Explore personal growth, everyday living and ideas for a meaningful life.'
  }
];

function About() {
  return (
    <main className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <p className="about-label">GET TO KNOW US</p>

        <h1>
          Stories that inspire.
          <br />
          Ideas that connect.
        </h1>

        <p className="about-hero-text">
          Welcome to The Journal, a space dedicated to creativity,
          inspiration and the little things that make life beautiful.
        </p>

        <Link to="/articles" className="about-button">
          Explore Our Stories →
        </Link>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <div className="story-heading">
          <p className="about-label">OUR STORY</p>
          <h2>A little about The Journal.</h2>
        </div>

        <div className="story-text">
          <p>
            The Journal was created for people who appreciate stories,
            creativity and fresh perspectives. We believe that inspiration
            can be found everywhere, from the clothes we wear to the places
            we visit and the experiences we share.
          </p>

          <p>
            Through our articles, we explore fashion, travel, food and
            lifestyle. Our goal is to share ideas that inform, inspire and
            encourage readers to see everyday life differently.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="about-purpose">
        <div className="purpose-card">
          <p className="about-label">01 — OUR MISSION</p>
          <h2>Inspire through every story.</h2>
          <p>
            Our mission is to create meaningful content that informs,
            inspires creativity and connects people through shared ideas
            and experiences.
          </p>
        </div>

        <div className="purpose-card">
          <p className="about-label">02 — OUR VISION</p>
          <h2>Make everyday stories matter.</h2>
          <p>
            We envision The Journal as a welcoming space where curiosity,
            creativity and inspiration come together to celebrate the
            different ways people experience life.
          </p>
        </div>
      </section>

      {/* What We Cover */}
      <section className="about-topics">
        <div className="topics-heading">
          <p className="about-label">WHAT WE EXPLORE</p>
          <h2>Something for every curious mind.</h2>
          <p>
            From everyday inspiration to new experiences,
            there is always something worth discovering.
          </p>
        </div>

        <div className="topics-grid">
          {topics.map((topic) => (
            <div className="topic-card" key={topic.number}>
              <span>{topic.number}</span>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Section */}
      <section className="about-closing">
        <p className="about-label">THANK YOU FOR BEING HERE</p>
        <h2>Every story has something to say.</h2>
        <p>
          Take a moment, explore our stories and find something
          that inspires you.
        </p>

        <Link to="/articles" className="about-button">
          Discover More →
        </Link>
      </section>

    </main>
  );
}

export default About;
