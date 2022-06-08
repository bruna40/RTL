import React from 'react';
import { screen, render } from '@testing-library/react';
import About from '../pages/About';

describe('Teatando o componente About', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    render(<About />);
    const about = screen.getByRole('heading', {
      name: /About Pokédex/i, level: 2 });
    expect(about).toBeInTheDocument();
  });
  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    render(<About />);
    const paragrafo = screen.getByText(/This application simulates a Pokédex/i);
    const paragrafo2 = screen.getByText(/One can filter Pokémons by type/i);
    expect(paragrafo).toBeInTheDocument();
    expect(paragrafo2).toBeInTheDocument();
  });
  test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    render(<About />);
    const image = screen.getByRole('img', {
      name: /Pokédex/i });
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
