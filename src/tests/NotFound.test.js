import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../pages/renderWithRouter';
import App from '../App';

describe('Teste na pagina Not Found', () => {
  test('Teste se a página contém um h2 com o texto Page requested not found', () => {
    const history = renderWithRouter(<App />);
    history.push('/*');
    const notFound = screen.getByRole('heading', {
      name: /Page requested not found/i, level: 2 });
    expect(notFound).toBeInTheDocument();
  });
  test('Teste se a página mostra a imagem', () => {
    const history = renderWithRouter(<App />);
    history.push('/*');
    const image = screen.getByRole('img', {
      name: /Pikachu crying because the page requested was not found/i });
    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
