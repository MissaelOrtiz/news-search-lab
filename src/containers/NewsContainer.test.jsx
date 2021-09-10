import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {
  it('should display a list of news articles by category', async () => {
    render(<NewsContainer />);
    screen.getByText('Loading...');
  });
});
