/**
 * Validates the form values based on the provided keys.
 *
 * @param {object} formValues - The object containing the form values to be validated.
 * @param {Array<string>} [keysToEvaluate=null] - The optional array of keys to be evaluated. If not provided, all keys in the formValues object will be evaluated.
 * @return {boolean} Returns true if all the keys have a value in the formValues object, otherwise returns false.
 */
export const formValidator = (formValues, keysToEvaluate = null) => {
  const keys = keysToEvaluate ? keysToEvaluate : Object.keys(formValues);

  for (const key of keys) {
    if (!formValues[key]) {
      return false;
    }
  }
  return true;
};
