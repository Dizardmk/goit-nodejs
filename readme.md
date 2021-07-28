### `yarn start`

Запускает сервер в режиме development nodemon.

### `yarn start:start`

Запускает сервер в режиме production node.

# Users

<div style="background: rgba(97,175,254,.1);border: 1px solid #61affe;border-radius: 4px;padding:10px;margin-bottom:15px">
    <span style="color: #fff;background: #61affe;font-weight: 700;text-align: center;border-radius: 4px;padding: 6px 15px">GET</span>
    <span style="color: #000;font-weight: 700;margin-left:10px">/api/users/current</span>
    <span style="color: #000; margin-left:10px"">Получить информацию о текущем пользователе</span>
</div>

<div style="background: rgba(73,204,144,.1);border: 1px solid #49cc90;border-radius: 4px;padding:10px;margin-bottom:15px">
    <span style="color: #fff;background: #49cc90;font-weight: 700;text-align: center;border-radius: 4px;padding: 6px 15px">POST</span>
    <span style="color: #000;font-weight: 700;margin-left:10px">/api/users/signup</span>
    <span style="color: #000; margin-left:10px"">Создать нового пользователя</span>
</div>

<div style="background: rgba(73,204,144,.1);border: 1px solid #49cc90;border-radius: 4px;padding:10px;margin-bottom:15px">
    <span style="color: #fff;background: #49cc90;font-weight: 700;text-align: center;border-radius: 4px;padding: 6px 15px">POST</span>
    <span style="color: #000;font-weight: 700;margin-left:10px">/api/users/login</span>
    <span style="color: #000; margin-left:10px"">Залогинить пользователя</span>
</div>

<div style="background: rgba(73,204,144,.1);border: 1px solid #49cc90;border-radius: 4px;padding:10px;margin-bottom:15px">
    <span style="color: #fff;background: #49cc90;font-weight: 700;text-align: center;border-radius: 4px;padding: 6px 15px">POST</span>
    <span style="color: #000;font-weight: 700;margin-left:10px">/api/users/logout</span>
    <span style="color: #000; margin-left:10px"">Разлогинить пользователя</span>
</div>

# Contacts

<div style="background: rgba(97,175,254,.1);border: 1px solid #61affe;border-radius: 4px;padding:10px;margin-bottom:15px">
    <span style="color: #fff;background: #61affe;font-weight: 700;text-align: center;border-radius: 4px;padding: 6px 15px">GET</span>
    <span style="color: #000;font-weight: 700;margin-left:10px">/api/contacts</span>
    <span style="color: #000; margin-left:10px"">Получить все контакты пользователя</span>
</div>

<div style="background: rgba(97,175,254,.1);border: 1px solid #61affe;border-radius: 4px;padding:10px;margin-bottom:15px">
    <span style="color: #fff;background: #61affe;font-weight: 700;text-align: center;border-radius: 4px;padding: 6px 15px">GET</span>
    <span style="color: #000;font-weight: 700;margin-left:10px">/api/contacts/:contactId</span>
    <span style="color: #000; margin-left:10px"">Получить контакт</span>
</div>

<div style="background: rgba(73,204,144,.1);border: 1px solid #49cc90;border-radius: 4px;padding:10px;margin-bottom:15px">
    <span style="color: #fff;background: #49cc90;font-weight: 700;text-align: center;border-radius: 4px;padding: 6px 15px">POST</span>
    <span style="color: #000;font-weight: 700;margin-left:10px">/api/contacts</span>
    <span style="color: #000; margin-left:10px"">Создать контакт</span>
</div>

<div style="background: rgba(249,62,62,.1);border: 1px solid #f93e3e;border-radius: 4px;padding:10px;margin-bottom:15px">
    <span style="color: #fff;background: #f93e3e;font-weight: 700;text-align: center;border-radius: 4px;padding: 6px 15px">DELETE</span>
    <span style="color: #000;font-weight: 700;margin-left:10px">/api/contacts/:contactId</span>
    <span style="color: #000; margin-left:10px"">Удалить контакт</span>
</div>

<div style="background: rgba(80,227,194,.1);border: 1px solid #50e3c2;border-radius: 4px;padding:10px;margin-bottom:15px">
    <span style="color: #fff;background: #50e3c2;font-weight: 700;text-align: center;border-radius: 4px;padding: 6px 15px">PUT</span>
    <span style="color: #000;font-weight: 700;margin-left:10px">/api/contacts/:contactId</span>
    <span style="color: #000; margin-left:10px"">Обновить контакт</span>
</div>

<div style="background: rgba(80,227,194,.1);border: 1px solid #50e3c2;border-radius: 4px;padding:10px;margin-bottom:15px">
    <span style="color: #fff;background: #50e3c2;font-weight: 700;text-align: center;border-radius: 4px;padding: 6px 15px">PATCH</span>
    <span style="color: #000;font-weight: 700;margin-left:10px">/api/contacts/:contactId/favorite</span>
    <span style="color: #000; margin-left:10px"">Обновить поле favorite контакта</span>
</div>
