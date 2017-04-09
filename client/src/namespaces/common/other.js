import React from 'react';

export const Jumbotron = ({ title, lead, paragraph, icon }) => {
  return (
    <div className="jumbotron">
      <article>
        <h2>{title}</h2>
        <i className="material-icons">{icon}</i>
        <p className="lead">{lead}</p>
        <hr className="my-4" />
        <p>{paragraph}</p>
      </article>
    </div>
  );
};
