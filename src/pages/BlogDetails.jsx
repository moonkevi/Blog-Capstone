

import { Link, useParams } from 'react-router-dom';
import './BlogDetails.css';

const articles = [
  {
    id: '1',
    category: 'FASHION',
    title: 'Building a Timeless Wardrobe',
    subtitle: 'Discover how to create a wardrobe that reflects your personality and never goes out of style.',
    author: 'The Journal Editorial Team',
    date: 'November 19, 2026',
    readTime: '5 min read',
    image: '/Images/fashion3.jpg',
    introduction:
      'Fashion is more than following trends. It is about expressing your personality, feeling confident and choosing clothes that make you feel comfortable. A timeless wardrobe focuses on pieces that remain stylish regardless of changing trends.',
    sections: [
      {
        heading: 'Choose quality over quantity',
        paragraphs: [
          'A timeless wardrobe does not need to contain hundreds of clothes. Instead, focus on buying fewer pieces that are comfortable, durable and easy to combine.',
          'Neutral colours such as black, white, beige and navy are useful because they can be styled in many different ways.'
        ]
      },
      {
        heading: 'Find your personal style',
        paragraphs: [
          'Your personal style should reflect who you are. Pay attention to the colours, fabrics and outfits that make you feel confident.',
          'You do not have to follow every fashion trend. Choose clothes that suit your lifestyle and personality.'
        ]
      },
      {
        heading: 'Build outfits that last',
        paragraphs: [
          'Simple combinations often create the most elegant looks. A well-fitted pair of trousers, a classic shirt and comfortable shoes can work for many occasions.',
          'Taking care of your clothes also helps them last longer and keeps your wardrobe looking fresh.'
        ]
      }
    ]
  },

  {
    id: '2',
    category: 'TRAVEL',
    title: 'The Beauty of Exploring New Places',
    subtitle: 'Discover new destinations, different cultures and experiences that make every journey special.',
    author: 'The Journal Editorial Team',
    date: 'November 18, 2026',
    readTime: '5 min read',
    image: '/Images/travel3.jpg',
    introduction:
      'Travelling gives us an opportunity to step outside our daily routines and discover the world from a different perspective. Every destination has something unique to offer, from beautiful landscapes to interesting traditions and unforgettable experiences.',
    sections: [
      {
        heading: 'Discover different cultures',
        paragraphs: [
          'Every place has its own traditions, food, language and lifestyle. Exploring these differences helps us understand and appreciate the world around us.',
          'Talking to local people and experiencing their daily lives can make a journey even more meaningful.'
        ]
      },
      {
        heading: 'Enjoy the journey',
        paragraphs: [
          'Travelling is not only about reaching a destination. It is also about enjoying the small experiences along the way.',
          'A beautiful view, a local meal or an unexpected conversation can become one of your favourite travel memories.'
        ]
      },
      {
        heading: 'Create unforgettable memories',
        paragraphs: [
          'You do not need to visit expensive destinations to have meaningful travel experiences. Sometimes a simple weekend trip can bring happiness and new perspectives.',
          'The most important thing is to remain curious and open to new experiences.'
        ]
      }
    ]
  },

  {
    id: '3',
    category: 'FOOD',
    title: 'The Secret to Enjoying Simple Meals',
    subtitle: 'Explore the beauty of everyday cooking and how simple ingredients can create wonderful meals.',
    author: 'The Journal Editorial Team',
    date: 'November 17, 2026',
    readTime: '4 min read',
    image: '/Images/food3.jpg',
    introduction:
      'Good food does not always have to be complicated or expensive. Sometimes the simplest meals bring the greatest satisfaction. With fresh ingredients and a little creativity, everyday cooking can become an enjoyable experience.',
    sections: [
      {
        heading: 'Appreciate fresh ingredients',
        paragraphs: [
          'Fresh vegetables, fruits, grains and other everyday ingredients can create delicious meals without requiring complicated recipes.',
          'Choosing ingredients that are in season can also make cooking more affordable and enjoyable.'
        ]
      },
      {
        heading: 'Make cooking enjoyable',
        paragraphs: [
          'Cooking can be more than a daily responsibility. It can be an opportunity to experiment with flavours and discover new combinations.',
          'Try preparing your favourite meals, listening to music or learning a new recipe.'
        ]
      },
      {
        heading: 'Enjoy meals mindfully',
        paragraphs: [
          'Taking time to enjoy your food helps you appreciate its flavours and textures.',
          'A simple homemade meal shared with family or friends can become a special moment in an ordinary day.'
        ]
      }
    ]
  },

  {
    id: '4',
    category: 'LIFESTYLE',
    title: 'Creating a Life You Love',
    subtitle: 'Small everyday choices can help you create a more meaningful and balanced lifestyle.',
    author: 'The Journal Editorial Team',
    date: 'November 16, 2026',
    readTime: '5 min read',
    image: '/Images/lifestyle3.jpg',
    introduction:
      'Creating a life you love does not happen overnight. It begins with understanding what matters to you and making small decisions that bring you closer to the life you want.',
    sections: [
      {
        heading: 'Understand what makes you happy',
        paragraphs: [
          'Everyone has different ideas of happiness. For some people, it means building a successful career, while others value relationships, personal freedom or peaceful everyday moments.',
          'Take time to understand what gives your life meaning instead of comparing your journey with other people.'
        ]
      },
      {
        heading: 'Create healthy routines',
        paragraphs: [
          'Simple routines can make everyday life more organised and less stressful. Planning your day, getting enough rest and making time for activities you enjoy can improve your daily experience.',
          'You do not need a perfect routine. Start with small changes that you can maintain.'
        ]
      },
      {
        heading: 'Appreciate your progress',
        paragraphs: [
          'Building a meaningful life is a continuous process. There will be challenges, unexpected changes and moments when things do not go according to plan.',
          'Celebrate your progress and remember that every small positive decision matters.'
        ]
      }
    ]
  },

  {
    id: '5',
    category: 'PERSONAL GROWTH',
    title: 'The Power of Small Habits',
    subtitle: 'Learn how small consistent actions can make a meaningful difference in your personal growth.',
    author: 'The Journal Editorial Team',
    date: 'November 15, 2026',
    readTime: '6 min read',
    image: '/Images/growth3.jpg',
    introduction:
      'Personal growth is not always about making huge changes. Often, the habits we practise every day have the greatest influence on our future. Small actions, repeated consistently, can help us develop confidence, discipline and new skills.',
    sections: [
      {
        heading: 'Start with small goals',
        paragraphs: [
          'Trying to change everything at once can feel overwhelming. Instead, choose one simple habit and focus on practising it regularly.',
          'You could start by reading for ten minutes, learning a new word or planning your tasks for the next day.'
        ]
      },
      {
        heading: 'Stay consistent',
        paragraphs: [
          'Motivation naturally changes from one day to another. Building a habit means continuing even when you do not feel particularly motivated.',
          'If you miss a day, do not give up. Return to your routine and keep moving forward.'
        ]
      },
      {
        heading: 'Recognise your improvement',
        paragraphs: [
          'Tracking your progress allows you to see how far you have come. Small achievements can encourage you to continue working towards your goals.',
          'Remember that personal growth takes time, patience and commitment.'
        ]
      }
    ]
  },

  {
    id: '6',
    category: 'INSPIRATION',
    title: 'Finding Inspiration in Everyday Life',
    subtitle: 'Sometimes the most beautiful inspiration comes from ordinary moments around us.',
    author: 'The Journal Editorial Team',
    date: 'November 14, 2026',
    readTime: '4 min read',
    image: '/Images/food3.jpg',
    introduction:
      'Inspiration is not always found in extraordinary experiences. It can come from a conversation, a beautiful morning, a good book or the determination to try something new. Learning to notice these moments can change how we experience everyday life.',
    sections: [
      {
        heading: 'Notice the little things',
        paragraphs: [
          'Everyday life is full of small moments that we sometimes overlook. A kind gesture, a peaceful walk or time spent with someone you love can bring unexpected happiness.',
          'Paying attention to these details can help you develop a more positive outlook.'
        ]
      },
      {
        heading: 'Learn from the people around you',
        paragraphs: [
          'People have different experiences, ideas and stories. Listening to others can introduce you to new perspectives and encourage you to think differently.',
          'Sometimes a simple conversation can inspire you to take a new direction or pursue a goal.'
        ]
      },
      {
        heading: 'Turn inspiration into action',
        paragraphs: [
          'Feeling inspired is a good beginning, but taking action is what creates progress.',
          'Whether you want to learn something new, develop a skill or explore a different opportunity, start with one small step.'
        ]
      }
    ]
  }
];

function BlogDetails() {
  const { id } = useParams();

  const article = articles.find((item) => item.id === id);

  if (!article) {
    return (
      <main className="article-not-found">
        <h1>Article Not Found</h1>
        <p>Sorry, we couldn't find the article you're looking for.</p>
        <Link to="/articles">Back to Articles</Link>
      </main>
    );
  }

  return (
    <main className="blog-details-page">

      <div className="article-top">
        <Link to="/articles">← Back to Articles</Link>
      </div>

      <header className="article-header">
        <p className="article-category">{article.category}</p>

        <h1>{article.title}</h1>

        <p className="article-subtitle">{article.subtitle}</p>

        <div className="article-meta">
          <span>By {article.author}</span>
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>
      </header>

      <div className="article-hero-image">
        <img src={article.image} alt={article.title} />
      </div>

      <article className="article-content">

        <p className="article-introduction">
          {article.introduction}
        </p>

        {article.sections.map((section, index) => (
          <section className="article-section" key={index}>
            <h2>{section.heading}</h2>

            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{paragraph}</p>
            ))}
          </section>
        ))}

        <div className="article-end">
          <p>Thank you for reading The Journal.</p>

          <Link to="/articles" className="explore-more">
            Explore more stories →
          </Link>

          <div className="back-to-articles-bottom">
            <Link to="/articles">
              ← Back to All Articles
            </Link>
          </div>
        </div>

      </article>

    </main>
  );
}

export default BlogDetails;


