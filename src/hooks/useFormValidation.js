import { useCallback, useState } from "react";

export function useFormValidation(initValues = {}) {
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});
  const [inputsValid, setInputsValid] = useState({});
  const [isValid, setIsValid] = useState(false);

  const checkValidityFormSubmit = (evt) => {
    setIsValid(evt.target.closest("form").checkValidity());
    return evt.target.closest("form").checkValidity();
  }

  const handleChange = (evt) => {
    const target = evt.target;
    const {
      name,
      type,
      value,
      checked,
      validity,
      validationMessage
    } = target;

    if (type === "checkbox") {
      setValues({ ...values, [name]: checked });
    } else {
      setValues({ ...values, [name]: value });
    }
    setErrors({ ...errors, [name]: validationMessage });
    setInputsValid({ ...inputsValid, [name]: validity.valid })
    setIsValid(target.closest("form").checkValidity());
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
    checkValidityFormSubmit
  };
}