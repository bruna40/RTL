import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../pages/renderWithRouter';
import App from '../App';

describe('Testar o componente Favorite Pokemons', () => {
  test('Exibe No favorite pokemon found, caso não tenha pokémons favoritos', () => {
    renderWithRouter(<App />);
    const favorite = screen.getByRole('heading', { name: /No favorite pokemon found/i });
    expect(favorite).toHaveBeenCalled();
  });
});
