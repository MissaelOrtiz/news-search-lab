/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const News = ({ author, title, content, urlToImage, name }) => (
  <>
    <img role="img" src={urlToImage} alt={name} />
    <h2>{title}</h2>
    <p> By {author} [via {name}]</p>
    <p>{content}</p>
  </>
);

News.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  urlToImage: PropTypes.string,
  name: PropTypes.string
};

export default News;
