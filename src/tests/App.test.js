import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../pages/renderWithRouter';
import App from '../App';

describe('Aplicação contém um conjunto fixo de links  de navegação', () => {
  test('na URL / ao clicar no link Home da barra de navegação é redirecionada', () => {
    renderWithRouter(<App />);
    const home = screen.getByText('Home');
    expect(home).toBeInTheDocument();
  });
  test('URL /about, ao clicar no link About da barra navegação é redirecionada', () => {
    renderWithRouter(<App />);
    const about = screen.getByText('About');
    expect(about).toBeInTheDocument();
  });
  test('URL /favorites, ao clicar no link Favorite Pokémons da barra navegação', () => {
    renderWithRouter(<App />);
    const favorite = screen.getByText('Favorite Pokémons');
    expect(favorite).toBeInTheDocument();
  });
  test('É redirecionado para a pagina Not Found', () => {
    const history = renderWithRouter(<App />);
    history.push('/*');
    const notFound = screen.getByRole('heading', { name: 'Not Found', level: 1 });
    expect(notFound).toBeInTheDocument();
  });
});
