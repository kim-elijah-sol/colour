function usePasswordValidator(password: string) {
  const specialCharRegExp = /[^a-zA-Z0-9]/;

  return {
    length: password.length >= 8 && password.length <= 16,
    letterAndNumber:
      password.replace(/[^a-z]/gi, '').length !== 0 &&
      password.replace(/[^0-9]/g, '').length !== 0,
    specialChar: specialCharRegExp.test(password),
  };
}

export default usePasswordValidator;
