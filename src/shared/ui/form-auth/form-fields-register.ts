export const formFieldsRegister = [
  {
    name: "fullname",
    label: "фио",
    type: "text",
    rules: {
      pattern: {
        value: /^[а-яёА-ЯЁ\s-]{1,90}$/,
        message: "некорректное фио",
      },
    },
  },
  {
    name: "group",
    label: "Группа",
    type: "text",
    rules: {
      required: "Введите группу",
    },
  },
  {
    name: "email",
    label: "Почта",
    type: "text",
    rules: {
      required: "Введите почту",
    },
  },
  {
    name: "login",
    label: "Логин",
    type: "text",
    rules: {
      required: "Введите логин",
    },
  },
  {
    name: "password",
    label: "пароль",
    type: "password",
    rules: {
      required: "введите пароль",
      pattern: {
        value: /^.{8,}$/,
        message: "введите пароль от 8 символов",
      },
    },
  },
] as const;
