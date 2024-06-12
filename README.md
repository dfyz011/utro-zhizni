## 👀 Как Катя будет добавлять новый фильм?

1. Открыть терминал (пункт в меню сверху) -> new terminal

2. Нам необходимо создать папку со всеми данными для фильма. В терминале необходимо выполнить следующую команду

```sh
./create-film.sh Название фильма без пробелов на английком
```

3. Создастся папка с "пустыми" данными по пути `src/content/films/Название`

4. Сущность "Фильм" состоит из 3 частей:

- картинка (вертикальная) preview.jpg (тебе необходимо заменить на нужную картинку, но имя должно быть такое же - "preview.jpg")
- видео (короткое превью, которое отобразится при наведении) video.mov (тебе необходимо заменить на нужное видео, но имя должно быть такое же - "video.mov"). Не делай видео слишком длинным, чтобы оно грузилось быстрее - 5сек достаточно
- описание в виде md файла (мы разговаривали с тобой про md редакторы) Название.md

5. Когда ты заменила preview.jpg и video.mov, открывай файл c расширением md
6. Замени youtubeVideoId на нужное видео, которое ты загрузила на youtube
7. Поменяй описание в md файле как хочешь (все что ниже ---) - этот текст отобразиться на странице фильма
8. Чтобы проверить, как все работает выполни в терминале - запуститься локальный сайт

```sh
pnpm dev
```

9. Открывай по ссылке http://localhost:4321/ и смотри, что все ок (На твой сайт пока это никак не вляет)

10. Если локально все супер, то нам нужно загрузить изменения в github

11. Для этого в Vscode, слева в меню выбери пункт, где горят изменения (source control)

12. В нем увидишь список всех файлов, которые ты изменила (должно быть 3)

13. Нам надо загрузить(push) эти изменения на сервер

14. В поле message введи сообщение о том, какие изменения ты внесла (можно название фильма)

15. Нажми плюс рядом с каждым из файлов, чтобы они попали в "Staged changes"

16. Нажми "Commit"

17. Нажми "Sync changes" - это отправит твои изменения на github

18. Перейди по ссылка https://github.com/dfyz011/utro-zhizni/actions и проверь, что последнее изменение зеленое!

19. Если что-то не так - напиши Ване

20. Любуйся на https://utrozhizni.ru/
