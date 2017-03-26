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
    <div className="container">
      <form className={`form ${className}`} onSubmit={handleSubmit(onSubmit)}>
        {renderTitle()}
        {renderErrors()}
        {children}
      </form>
    </div>
  );
};

const renderField = ({ label, type, name, input, placeholder, autoFocus, options = {} }) => {
  if (type === 'select') {
    const renderOptions = () => options.map(option => {
      const { value, text } = option;
      return (
        <option key={value} value={value}>{text}</option>
      );
    });

    return (
      <div className="form-group row">
        <label htmlFor={name} className="col-sm-4 col-form-label">{label}</label>
        <div className="col-sm-8">
          <select
            {...input}
            className="form-control"
            name={name}
            placeholder={placeholder}
            type={type}
          >
            {renderOptions()}
          </select>
      </div>
    </div>
    );
  }

  return (
    <div className="form-group row">
      <label htmlFor={name} className="col-sm-4 col-form-label">{label}</label>
      <div className="col-sm-8">
        <input
          {...input}
          autoFocus={autoFocus}
          className="form-control"
          name={name}
          placeholder={placeholder}
          type={type}
        />
    </div>
  </div>
  );
};

export const Input = ({ name, type, label, placeholder, options, autoFocus }) => {
  return (
    <Field
      autoFocus={autoFocus}
      component={renderField}
      label={label}
      name={name}
      options={options}
      placeholder={placeholder}
      type={type}
    />
  );
};
