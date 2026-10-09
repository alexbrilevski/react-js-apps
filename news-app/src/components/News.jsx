import { useEffect, useState } from "react";
import axios from "axios";
import { ImageWithFallback } from "./ImageWithFallback";
import NewsModal from "./NewsModal";
import noImg from "../assets/images/no-img.png";
import "./News.css";

const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
const categories = [
  "general",
  "world",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
  "nation",
];

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [headline, setHeadline] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      // const response = await axios.get(
      //   `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&country=us&max=10&apikey=${apiKey}`,
      // );
      const response = "";
      console.log(response);

      const fetchedNews = response.data.articles;

      setHeadline(fetchedNews[0]);
      setNews(fetchedNews.slice(1, 7));
    };

    fetchNews();
  }, [selectedCategory]);

  const handleSelectCategory = (e, category) => {
    e.preventDefault();
    setSelectedCategory(category);
  };

  return (
    <div className="news-app">
      <div className="news-header">
        <h1 className="logo">News App</h1>
      </div>
      <div className="news-content">
        <nav className="navbar">
          <h1 className="nav-heading">Categories</h1>
          <div className="categories">
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                className="nav-link"
                onClick={(e) => handleSelectCategory(e, category)}
              >
                {category}
              </a>
            ))}
          </div>
        </nav>
        <div className="news-section">
          {headline && (
            <div className="headline">
              <ImageWithFallback
                fallbackSrc={noImg}
                src={headline.image}
                alt={headline.title}
              />
              <h2 className="headline-title">{headline.title}</h2>
            </div>
          )}

          <div className="news-grid">
            {news.map((article) => (
              <div key={article.id} className="news-grid-item">
                <ImageWithFallback
                  fallbackSrc={noImg}
                  src={article.image}
                  alt={article.title}
                />
                <h3>{article.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <NewsModal/>
      </div>
      <footer>
        <p className="copyright">
          <span>News App</span>
        </p>
        <p>&copy; All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default News;
