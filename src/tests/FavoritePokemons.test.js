import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../pages/renderWithRouter';
import App from '../App';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Testar o componente Favorite Pokemons', () => {
  test('Exibe No favorite pokemon found, caso não tenha pokémons favoritos', () => {
    renderWithRouter(<FavoritePokemons />);
    const favorite = screen.getByText(/No favorite pokemon found/i);
    expect(favorite).toBeInTheDocument();
  });
  test('Teste se são exibidos todos os cards de pokémons favoritados', () => {
    renderWithRouter(<App />);
    const name = screen.getByTestId('pokemon-name');
    expect(name).toBeInTheDocument();
    const type = screen.getByTestId('pokemon-type');
    expect(type).toBeInTheDocument();
    const weight = screen.getByTestId('pokemon-weight');
    expect(weight).toBeInTheDocument();
  });
});
