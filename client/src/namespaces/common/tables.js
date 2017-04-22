import React from 'react';

export const Table = props => {
  const { className = '', headers = [], rows = [] } = props;

  return (
    <table className={`table table-striped ${className}`}>
      <thead className='table-head'>
        <tr>
          {headers.map(header => <th key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => row)}
      </tbody>
    </table>
  );
};

export const ListWithSearch = props => {
  const { className = '', headers = [], rows = [], placeholder = '', title = '' } = props;

  return (
    <div className="list-with-search">
      <h3>{title}</h3>
      <input className="form-control search" placeholder={placeholder} />
      <table className={`table ${className}`}>
        <thead className='table-head'>
          <tr>
            {headers.map(header => <th key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => row)}
        </tbody>
      </table>
    </div>
  );
};
