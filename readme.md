### `yarn start`

Запускает сервер в режиме development nodemon.\
При успешном запуске, в терминале будет `### Database connection successful! Server running. Use our API on port: ${PORT}`

### `yarn start:start`

Запускает сервер в режиме production node.

# Contacts

| Метод  | Путь                              | Описание                                            |
| ------ | --------------------------------- | --------------------------------------------------- |
| GET    | /api/contacts                     | Получить все контакты                               |
| GET    | /api/contacts/:contactId          | Получить контакт по id                              |
| POST   | /api/contacts                     | Создать новый контакт                               |
| DELETE | /api/contacts/:contactId          | Удалить контакт                                     |
| PUT    | /api/contacts/:contactId          | Обновить существующий контакт по id                 |
| PATCH  | /api/contacts/:contactId/favorite | Обновить поле favorite существующего контакта по id |
