export const fakeSendCode = (email) => {
  console.log(`(Mock) Enviando código para ${email}`);
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

export const fakeValidateCode = (email, code) => {
  console.log(`(Mock) Validando código ${code} para ${email}`);
  return new Promise((resolve) =>
    setTimeout(() => resolve(code === "123456"), 1000)
  );
};
