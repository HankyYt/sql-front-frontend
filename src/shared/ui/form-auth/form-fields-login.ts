export const formFieldsLogin = [
  {
    name: "login",
    label: "логин",
    type: "text",
    rules: {
      required: "Введите логин",
      pattern: {
        value: /^[a-zA-Z][a-zA-Z0-9_-]{1,28}[a-zA-Z0-9]$/,
        message: "неверный логин",
      },
    },
  },
  {
    name: "password",
    label: "Пароль",
    type: "password",
    rules: {
      required: "Введите пароль",
      pattern: {
        value: /^.{8,}$/,
        message: "Неверный пароль",
      },
    },
  },
] as const;
