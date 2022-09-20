// @ts-check

export default {
  translation: {
    appName: 'Менеджер задач',
    flash: {
      session: {
        create: {
          success: 'Вы залогинены',
          error: 'Неправильный емейл или пароль',
        },
        delete: {
          success: 'Вы разлогинены',
        },
      },
      users: {
        create: {
          error: 'Не удалось зарегистрировать',
          success: 'Пользователь успешно зарегистрирован',
        },
      },
      authError: 'Доступ запрещён! Пожалуйста, авторизируйтесь.',
    },
    layouts: {
      application: {
        users: 'Пользователи',
        signIn: 'Вход',
        signUp: 'Регистрация',
        signOut: 'Выход',
      },
    },
    views: {
      submit: {
        save: 'Зарегестрироваться',
      },
      session: {
        email: 'Введи почту',
        password: 'Введите пароль',
        new: {
          signIn: 'Вход',
          submit: 'Войти',
        },
      },
      users: {
        id: 'ID',
        username: 'Полное имя',
        email: 'Email',
        createdAt: 'Дата создания',
        move: 'Действия',
        create: {
          email: 'Введи вашу почту',
          password: 'Придумайте пароль',
          firstName: 'Введите ваше имя',
          lastName: 'Введите вашу фамилию',
        },
        control: { edit: 'Изменить', delete: 'Удалить' },
        new: {
          submit: 'Сохранить',
          signUp: 'Регистрация',
        },
      },
      errors: {
        firstName: 'Должно содержать минимум 1 символ',
        lastName: 'Должно содержать минимум 1 символ',
        email: 'Должно быть формата email',
        password:
          'Должно содержать минимум 8 символов: минимум 1 заглавная, 1 маленькая буква и 1 специальный символ',
      },
      welcome: {
        index: {
          hello: 'Привет от Хекслета!',
          description: 'Практические курсы по программированию',
          more: 'Узнать Больше',
        },
      },
    },
  },
};
