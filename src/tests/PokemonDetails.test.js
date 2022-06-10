import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../pages/renderWithRouter';
import App from '../App';

const pokemon = '/pokemons/143';

describe('Teste componente 7, PokemonDetails', () => {
  test('As informações detalhadas do pokémon selecionado são mostradas na tela', () => {
    const history = renderWithRouter(<App />);
    history.push(pokemon);
    const details = screen.getByText(/snorlax details/i);
    expect(details).toBeInTheDocument();
    const summary = screen.getByRole('heading', { name: /summary/i });
    expect(summary).toBeInTheDocument();
    const info = screen.getByText(/what sounds like its cry may actually/i);
    expect(info).toBeInTheDocument();
  });

  test('Existe na página uma seção com mapas contendo as localizações do pokémon', () => {
    const history = renderWithRouter(<App />);
    history.push(pokemon);
    const img = screen.getByAltText(/snorlax location/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://pwo-wiki.info/images/8/86/Vermilion_City.gif');
    const title = screen.getByRole('heading', { name: /game locations of snorlax/i });
    expect(title).toBeInTheDocument();
    const name = screen.getByText(/kanto vermillion city/i);
    expect(name).toBeInTheDocument();
  });
  test('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
    const history = renderWithRouter(<App />);
    history.push(pokemon);
    const check = screen.getByRole('checkbox', { name: /pokémon favoritado/i });
    userEvent.click(check);
    expect(check).toBeInTheDocument();
  });
});
