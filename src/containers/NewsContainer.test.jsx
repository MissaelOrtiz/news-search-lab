/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {
  it('should display a list of news articles by category', async () => {
    render(<NewsContainer />);
    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).not.toBeEmptyDOMElement();

    const input = await screen.findByLabelText('New Search Query?');
    userEvent.type(input, 'dogs');

    const submitButton = await screen.findByRole('button', { name: 'find-articles' });
    userEvent.click(submitButton);

    return waitFor(() => {
      const articles = screen.getByText('WELCOME TO DOGS NEWS', { exact: false });
      expect(articles).toHaveLength(1);
    });
  });
});
