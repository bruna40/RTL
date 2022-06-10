import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../pages/renderWithRouter';
import App from '../App';

describe('Teste componente 6, Pokemon', () => {
  test('É renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);
    const allChoice = screen.getByRole('button', { name: /electric/i });
    userEvent.click(allChoice);
    const name = screen.getByTestId('pokemon-name');
    expect(name.textContent).toBe('Pikachu');
    const type = screen.getByTestId('pokemon-type');
    expect(type.textContent).toBe('Electric');
    const weight = screen.getByTestId('pokemon-weight');
    expect(weight.textContent).toBe('Average weight: 6.0 kg');
    const image = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(image).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png');
  });
  test('O card do pokémon indicado na Pokédex contém um link de navegação.', () => {
    renderWithRouter(<App />);
    const allChoice = screen.getByRole('button', { name: /electric/i });
    userEvent.click(allChoice);

    const details = screen.getByRole('link', { name: /more details/i });
    expect(details).toHaveAttribute('href', '/pokemons/25');
  });
  test('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
    const history = renderWithRouter(<App />);
    history.push('/pokemons/25');

    const favorite = screen.getByRole('checkbox', { name: /pokémon favoritado?/i });
    userEvent.click(favorite);
    expect(favorite).toBeInTheDocument();
    const star = screen.getByAltText('Pikachu is marked as favorite');
    expect(star).toBeInTheDocument();
    expect(star).toHaveAttribute('src', '/star-icon.svg');
  });
});
