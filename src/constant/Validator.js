import React from 'react';
import Moment from 'moment';

export const Validator = {
  handleDateToString: function (dateString) {
    Moment.locale('en');
    return Moment(dateString).format('DD/MM/YYYY');
  },
  handleDateObjectToString: function (date, format) {
    Moment.locale('en');
    return Moment(date).format(format);
  },
  isNullOrEmptyValue: function (text) {
    if (text === null || text === undefined) {
      return false;
    } else {
      text = String(text).trim();
      return text ? true : false;
    }
  },
  isValidEmail: function (email) {
    return (
      String(email)
        .replace(/\s+/g, ' ')
        // .trimStart()
        // .trimEnd()
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    );
  },
  isValidPassword: function (password) {
    return String(password).match(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
    );
  },
  isValidGSTIN: function (password) {
    return String(password).match(
      /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/,
    );
  },
  isValidValue: function (value) {
    return String(value).match(/[^0-9]/);
  },
  isValidPhoneValue: function (value) {
    return value.length > 9 && value.length < 15;
  },
  /** 
  function to validate pay range.
  * @param {string} value - The value to be validate.
  */
  isValidPayRange: function (value) {
    return String(value).match(/^[0-9]+(\.[0-9]+)?$/);
  },
};

export default Validator;
