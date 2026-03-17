import React, { useState } from 'react';
import './News.css';
import DetailModal from './DetailModal';

const News = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      date: 'March 10, 2024',
      tag: 'Legal Update',
      title: 'New California Lane Splitting Laws in 2024',
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
      content: 'California has introduced updated regulations for lane splitting to improve safety on highways. These changes affect both motorcyclists and passenger vehicle drivers, with new speed differentials and enforcement protocols designed to decrease the incidence of sideswipe accidents.'
    },
    {
      id: 2,
      date: 'March 05, 2024',
      tag: 'Accident Advice',
      title: 'What to Do Immediately After a Ride-Share Accident',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
      content: 'Uber and Lyft accidents involve complex insurance layers. Understanding who is liable depends on the driver status within the app. Our guide breaks down the immediate steps to take, from documenting the scene to dealing with corporate legal teams.'
    },
    {
      id: 3,
      date: 'February 28, 2024',
      tag: 'Expert Insight',
      title: 'Understanding Your Rights in a Commercial Truck Collision',
      image: 'https://images.unsplash.com/photo-1586333242961-21f59e0d238d?auto=format&fit=crop&w=800&q=80',
      content: 'Trucking accidents are significantly different from standard passenger vehicle crashes. Federal motor carrier safety regulations add a layer of legal complexity that requires specialized investigation of black box data and driver logs.'
    }
  ];

  return (
    <section id="news" className="news-section">
      <div className="container">
        <div className="section-header">
          <span className="sub-tag">LATEST INSIGHTS</span>
          <h2 className="section-title">Stay Informed on <strong>Legal Trends</strong></h2>
          <p>Staying informed on legal trends and safety advice.</p>
        </div>

        <div className="news-grid">
          {articles.map((article) => (
            <div key={article.id} className="news-card">
              <div className="news-image">
                <div className="news-badge">{article.tag}</div>
                <img src={article.image} alt={article.title} />
              </div>
              <div className="news-content">
                <span className="news-date">{article.date}</span>
                <h3>{article.title}</h3>
                <button 
                  className="news-link-btn" 
                  onClick={() => setSelectedArticle(article)}
                >
                  Read Full Article →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <DetailModal 
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        title={selectedArticle?.title}
        content={selectedArticle?.content}
      />
    </section>
  );
};

export default News;
