export default function validFormData(email, password) {
  const isEmailValid =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s]).{8,16}$/.test(password);

  if (!isEmailValid) return "Email not valid";
  if (!isPasswordValid) return "Password not valid";

  return null; // ✅ Both valid
}
