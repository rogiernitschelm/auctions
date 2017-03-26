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

const renderField = ({ label, type, name, input, placeholder, options = {} }) => {
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
            name={name}
            type={type}
            placeholder={placeholder}
            className="form-control"
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
          name={name}
          type={type}
          placeholder={placeholder}
          className="form-control"
        />
    </div>
  </div>
  );
};

export const Input = ({ name, type, label, placeholder, options }) => {
  return (
    <Field
      options={options}
      name={name}
      type={type}
      label={label}
      component={renderField}
      placeholder={placeholder}
    />
  );
};
