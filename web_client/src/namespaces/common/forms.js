import React from 'react';
import { Field } from 'redux-form';

export const Form = props => {
  const { title, children, handleSubmit, onSubmit, errors = [] } = props;

  const renderTitle = () => {
    if (title) {
      return <h4 className="form-title">{title}</h4>;
    }
  };

  const renderErrors = () => {
    if (errors) {
      return errors.map(({ message }) => (
        <div key={message} className="alert alert-danger" role="alert">
          <strong>{message}</strong>
        </div>
        )
      );
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <form className="form col-11 col-md-10 col-lg-8 col-xl-6" onSubmit={handleSubmit(onSubmit)}>
          {renderTitle()}
          {renderErrors()}
          {children}
        </form>
      </div>
    </div>
  );
};

const renderField = ({ label, type, name, input, placeholder }) => {
  return (
    <fieldset className="form-group">
      <label htmlFor={name} className="sr-only">{label}</label>
      <input
        {...input}
        name={name}
        type={type}
        placeholder={placeholder}
        className="form-control"
      />
    </fieldset>
  );
};

export const Input = ({ name, type, label }) => {
  return (
    <Field
      name={name}
      type={type}
      label={label}
      component={renderField}
      placeholder={label}
    />
  );
};
