Чтобы запустить проект на сервере нужно установить последнюю версию nodejs.
В проекте нет базы данных, он загружает файлы на сервер.
По url(/your-domain-name/uploads) пожно зайти в админку где вы можете загрузить свои файлы и получить ссыли для них.

Что бы запустить проект
```
"start": "node ./bin/www"
"dev": "nodemon ./bin/www"
```