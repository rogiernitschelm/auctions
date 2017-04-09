import React from 'react';
import { Column } from 'common';

export default () => (
  <Column columns={{ xs: 12, lg: 6 }}>
    <div className="jumbotron">
      <h1>Reclameveiling</h1>
      <p className="lead">Adverteren tot je erbij neervalt.</p>
      <hr className="my-4" />
      <p>Maak een account aan en start met bieden!</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">Meer weten?</a>
      </p>
    </div>
  </Column>
);
