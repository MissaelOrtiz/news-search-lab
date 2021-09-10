import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ search, onSearchChange, onSubmit }) => (
  <form onSubmit={onSubmit} data-testid="controls-form">
    <label> New Search Query?
      <input
        type="text"
        value={search}
        onChange={onSearchChange}
      />
    </label>
    <button aria-label="find-articles">Submit</button>
  </form>
);

Controls.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Controls;
