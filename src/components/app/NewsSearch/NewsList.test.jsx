/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsList from './NewsList';

describe('NewsList', () => {
  it('renders out a list of an article', () => {
    render(
      <NewsList articles={[
        {
          author: 'The Man Himself',
          title: 'How to Play: A comprehensive guide',
          content: 'You just gotta roll some dice and BIM BOOM BAM all done.',
          urlToImage: 'https://cdn.discordapp.com/attachments/870470157275910204/882420160567345162/20210624_003711.jpg',
          name: 'Me.'
        },
        {
          author: 'The Man Himself',
          title: 'How to Code: A comprehensive guide',
          content: 'You just gotta write some code and BIM BOOM BAM all done.',
          urlToImage: 'https://cdn.discordapp.com/attachments/870470157275910204/882420160567345162/20210624_003711.jpg',
          name: 'Me.'
        }
      ]} />
    );

    const ul = screen.getByRole('list', { name: 'articles' });
    expect(ul).toMatchSnapshot();
  });
});
