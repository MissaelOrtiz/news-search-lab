/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import News from './News';

const NewsList = ({ articles }) => (
  <ul aria-label="articles">
    {articles.map(({ author, title, content, urlToImage, name }) => (
      <li key={`${name}-${title}-${author}`}>
        <News author={author} title={title} content={content} urlToImage={urlToImage}/>
      </li>
    ))}
  </ul>
);

NewsList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string.isRequired,
      urlToImage: PropTypes.string,
      name: PropTypes.string
    })
  ).isRequired,
};

export default NewsList;
