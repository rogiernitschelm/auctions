import React from 'react';
import { Field } from 'redux-form';

export const Form = props => {
  const { title, children, handleSubmit, onSubmit, className, errors = [] } = props;

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
    <form className={`form ${className}`} onSubmit={handleSubmit(onSubmit)}>
      {renderTitle()}
      {renderErrors()}
      {children}
    </form>
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
