import React, { useState } from 'react';

const CommentForm = () => {
  const [nome, setNome] = useState('');
  const [comentario, setComentario] = useState('');
  const [comentarios, setComentarios] = useState([]);

  const adicionarComentario = () => {
    setComentarios([...comentarios, { nome, comentario }]);
    setNome('');
    setComentario('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <textarea
        placeholder="Comentário"
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
      />
      <button data-testid="botao-adicionar" onClick={adicionarComentario}>
        Adicionar Comentário
      </button>
      <div data-testid="lista-comentarios">
        {comentarios.map((c, index) => (
          <div key={index}>
            <p>{c.nome}</p>
            <p>{c.comentario}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentForm;
