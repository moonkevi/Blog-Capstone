import './Hero.css';

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-label">
          WELCOME TO THE JOURNAL
        </p>

        <h1>
          Stories that inspire.
          <br />
          Ideas that matter.
        </h1>

        <p className="hero-description">
          Discover inspiring stories, explore new perspectives
          and find little moments that make life beautiful.
        </p>

        <button className="hero-btn">
          Explore Articles →
        </button>

      </div>

    </section>
  );
}

export default Hero;