import React from 'react';
import { Field } from 'redux-form';

export const Form = props => {
  const { title, children, handleSubmit, onSubmit } = props;

  const renderTitle = () => {
    if (title) {
      return <h4>{title}</h4>;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <form className="form col-12" onSubmit={handleSubmit(onSubmit)}>
          {renderTitle()}
          {children}
        </form>
      </div>
    </div>
  );
};

const renderField = ({ label, type, name, input, placeholder }) => {
  return (
    <fieldset className="form-group">
      <label htmlFor={name}>{label}</label>
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
