import { useState } from "react";
import "./QuotesApp.css";

const QuotesApp = () => {
  const [quote, setQuote] = useState({
    text: "Ask not what your country can do for you. Ask what you can do for your country.",
    author: "John Kennedy",
  });
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const fetchNewQuote = async () => {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();

    setQuote({
      text: data.quote,
      author: data.author,
    });
  };

  const toggleFavorites = () => {
    setShowFavorites((prevState) => !prevState);
  };

  const addToFavorites = () => {
    const isAlreadyAdded = favorites.some(
      (fav) => fav.text === quote.text && fav.author === quote.author,
    );

    if (!isAlreadyAdded) {
      const id = `q-${Date.now()}-${Math.random().toString(36)}`;
      setFavorites((prevFav) => [{ id, ...quote }, ...prevFav]);
    }
  };

  const deleteFromFavorites = (id) => {
    setFavorites((prevFav) => prevFav.filter((fav) => fav.id !== id));
  };

  return (
    <div className="container">
      <div className="quotes-app">
        <h1 className="app-heading">Quote.</h1>
        <i className="bx bxs-heart fav-icon" onClick={toggleFavorites}></i>
        <div className="quote">
          <i className="bx bxs-quote-alt-left left-quote"></i>
          <p className="quote-text">{quote.text}</p>
          <p className="quote-author">{quote.author}</p>
          <i className="bx bxs-quote-alt-right right-quote"></i>
        </div>
        <div className="circles">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
          <div className="circle-4"></div>
        </div>
        <div className="buttons">
          <button className="btn btn-new" onClick={fetchNewQuote}>
            New Quote
          </button>
          <button className="btn btn-fav" onClick={addToFavorites}>
            Add to Favorites
          </button>
        </div>
        {showFavorites && (
          <div className="favorites">
            <button className="btn-close" onClick={toggleFavorites}>
              <i className="bx bx-x"></i>
            </button>
            {favorites.map((favorite) => {
              return (
                <div key={favorite.id} className="fav-quote">
                  <div className="fav-quote-delete">
                    <i
                      className="bx bx-x-circle"
                      onClick={() => deleteFromFavorites(favorite.id)}
                    ></i>
                  </div>
                  <div className="fav-quote-content">
                    <div className="fav-quote-text">{favorite.text}</div>
                    <div className="fav-quote-author">{favorite.author}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuotesApp;
