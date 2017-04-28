import React from 'react';

export const ListWithSearch = props => {
  const {
    className = '',
    headers = [],
    onButtonClick,
    onButtonClickText,
    onSearchTermChange,
    placeholder = '',
    rows = [],
    title = '',
  } = props;

  return (
    <div className="list-with-search">
      <h3>{title}</h3>
      <input
        className="form-control search"
        onChange={event => onSearchTermChange(event)}
        placeholder={placeholder}
      />
      <table className={`table table-hover ${className}`}>
        <thead className='table-head'>
          <tr>
            {headers.map(header => <th key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => row)}
        </tbody>
      </table>

      <button className="btn btn-primary" onClick={onButtonClick}>{onButtonClickText}</button>
    </div>
  );
};
