// src/App.js
import React, { useState } from 'react';

function App() {
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, inputValue]);
    setInputValue('');
  };

  return (
    <div className="app">
      <div className="post">
        <img
          className="post-image"
          src="https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg"
          alt="Miniatura do Batmóvel"
        />
        <p className="post-text">Olha só que legal minha miniatura do Batmóvel.</p>
        <div>
          <ul className="post-comments">
            {comments.map((comment, index) => (
              <li key={index} data-testid="comment">{comment}</li>
            ))}
          </ul>
          <form className="post-comments-form" onSubmit={handleSubmit}>
            <textarea
              data-testid="comment-input"
              className="post-comments-form-textarea"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required
            />
            <button
              data-testid="submit-button"
              className="post-comments-form-button"
              type="submit"
            >
              Comentar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
