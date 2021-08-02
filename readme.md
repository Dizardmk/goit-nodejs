### `yarn start`

Запускает сервер в режиме development.

### `yarn start:start`

Запускает сервер в режиме production.

# Users

| Метод | Путь               | Описание                                   |
| :---- | :----------------- | :----------------------------------------- |
| GET   | /api/users/current | Получить информацию о текущем пользователе |
| POST  | /api/users/signup  | Создать нового пользователя                |
| POST  | /api/users/login   | Залогинить пользователя                    |
| POST  | /api/users/logout  | Разлогинить пользователя                   |
| PATCH | /api/users/avatars | Обновить аватарку пользователя             |

# Contacts

| Метод  | Путь                              | Описание                           |
| :----- | :-------------------------------- | :--------------------------------- |
| GET    | /api/contacts                     | Получить все контакты пользователя |
| GET    | /api/contacts/:contactId          | Получить контакт                   |
| POST   | /api/contacts                     | Создать контакт                    |
| DELETE | /api/contacts/:contactId          | Удалить контакт                    |
| PUT    | /api/contacts/:contactId          | Обновить контакт                   |
| PATCH  | /api/contacts/:contactId/favorite | Обновить поле favorite контакта    |
