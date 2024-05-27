import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CommentForm from '../components/CommentForm'; // ajuste o caminho conforme necessário

test('adiciona dois comentários', () => {
  const { getByTestId, getByPlaceholderText } = render(<CommentForm />);
  
  const inputNome = getByPlaceholderText('Nome');
  const inputComentario = getByPlaceholderText('Comentário');
  const botaoAdicionar = getByTestId('botao-adicionar');
  
  fireEvent.change(inputNome, { target: { value: 'Primeiro Nome' } });
  fireEvent.change(inputComentario, { target: { value: 'Primeiro Comentário' } });
  fireEvent.click(botaoAdicionar);
  
  fireEvent.change(inputNome, { target: { value: 'Segundo Nome' } });
  fireEvent.change(inputComentario, { target: { value: 'Segundo Comentário' } });
  fireEvent.click(botaoAdicionar);
  
  expect(getByTestId('lista-comentarios')).toHaveTextContent('Primeiro Comentário');
  expect(getByTestId('lista-comentarios')).toHaveTextContent('Segundo Comentário');
});