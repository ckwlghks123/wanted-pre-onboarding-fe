export default function validate(name, value) {
  if (!value) return null;

  const regexEmail =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const regexPassword =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-])[A-Za-z\d#?!@$%^&*-]{8,}$/;

  return name === 'email' ? regexEmail.test(value) : regexPassword.test(value);
}
