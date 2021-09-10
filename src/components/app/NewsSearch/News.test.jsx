/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import News from './News';

describe('News', () => {
  it('renders out a single article', () => {
    render(
      <News author="The Technowizard" title="How NOT to fail" content="git gud." urlToImage="https://cdn.discordapp.com/attachments/870470157275910204/882420160567345162/20210624_003711.jpg"/>
    );

    const article = screen.getByText('How NOT to fail');
    expect(article).toMatchSnapshot();
  });
});
