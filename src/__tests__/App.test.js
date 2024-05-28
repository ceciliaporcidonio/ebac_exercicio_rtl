import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';  // Certifique-se de que o caminho está correto

test('deve permitir a inserção de dois comentários', () => {
  render(<App />);
  const inputElement = screen.getByTestId('comment-input');
  const submitButton = screen.getByTestId('submit-button');

  fireEvent.change(inputElement, { target: { value: 'Primeiro comentário' } });
  fireEvent.click(submitButton);
  fireEvent.change(inputElement, { target: { value: 'Segundo comentário' } });
  fireEvent.click(submitButton);

  const comments = screen.getAllByTestId('comment');
  expect(comments).toHaveLength(2);
  expect(comments[0]).toHaveTextContent('Primeiro comentário');
  expect(comments[1]).toHaveTextContent('Segundo comentário');
});
