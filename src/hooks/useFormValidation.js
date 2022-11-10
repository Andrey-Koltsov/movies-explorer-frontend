import isEmail from 'validator/es/lib/isEmail';
import { useCallback, useEffect, useState } from "react";

export function useFormValidation(initValues = {}) {
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});
  const [inputsValid, setInputsValid] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    console.log(Object.values(inputsValid).every(item => item === true));
    setIsValid(Object.values(inputsValid).every(item => item === true));
  }, [inputsValid]);

  const handleChange = (evt) => {
    const {
      name,
      type,
      value,
      checked,
      validity,
      validationMessage
    } = evt.target;

    if (type === "checkbox") {
      setValues({ ...values, [name]: checked });
      setInputsValid({ ...inputsValid, [name]: validity.valid });
    } else if (type === "email") {
      setValues({ ...values, [name]: value });
      setInputsValid({ ...inputsValid, [name]: isEmail(value) });
      if (isEmail(value)) {
        setErrors({ ...errors, [name]: '' });
      } else {
        setErrors({ ...errors, [name]: 'Неправильно введена почта' });
      }
    } else {
      setValues({ ...values, [name]: value });
      setInputsValid({ ...inputsValid, [name]: validity.valid })
      setErrors({ ...errors, [name]: validationMessage });
    }
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, []);

  return {
    values,
    handleChange,
    errors,
    inputsValid,
    isValid,
    setIsValid,
    resetForm,
  };
}