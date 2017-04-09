import React from 'react';

export const Table = props => {
  const { className = '', headers = [], rows = [] } = props;

  return (
    <table className={`table table-striped ${className}`}>
      <thead className='table-head'>
        <tr>
          {headers.map(header => <th>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => row)}
      </tbody>
    </table>
  );
};
