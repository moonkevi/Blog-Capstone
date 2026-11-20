
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Faq.css';

const questions = [
  {
    question: 'What is The Journal about?',
    answer:
      'The Journal is a digital magazine that explores fashion, food, travel, lifestyle and personal growth. Our goal is to share stories, ideas and inspiration with curious minds.'
  },
  {
    question: 'How often do you publish new articles?',
    answer:
      'We regularly publish fresh articles and stories to keep our readers informed, inspired and entertained.'
  },
  {
    question: 'Can I contribute an article?',
    answer:
      'Yes! We welcome creative ideas and interesting stories. You can contact our editorial team through the contact form to discuss your contribution.'
  },
  {
    question: 'Is The Journal free to read?',
    answer:
      'Yes. You can explore and read our published articles without paying a subscription fee.'
  },
  {
    question: 'What topics can I explore?',
    answer:
      'You can explore different topics including fashion, travel, food, lifestyle, personal growth and inspiration.'
  },
  {
    question: 'How can I contact your team?',
    answer:
      'You can reach us through the contact form on our website. We would love to hear your questions, suggestions and feedback.'
  }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">

      <div className="faq-heading">
        <p>GOT QUESTIONS?</p>
        <h2>Frequently Asked Questions</h2>
        <span>
          Everything you need to know about The Journal.
        </span>
      </div>

      <div className="faq-container">

        {questions.map((item, index) => (
          <div
            className={`faq-item ${
              activeIndex === index ? 'active' : ''
            }`}
            key={index}
          >

            <button
              className="faq-question"
              onClick={() => toggleQuestion(index)}
              aria-expanded={activeIndex === index}
            >
              <span>{item.question}</span>

              <ChevronDown
                className="faq-icon"
                size={20}
              />
            </button>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default FAQ;
