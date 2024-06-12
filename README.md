## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Как Катя будет добавлять новый фильм?

1. Нам необходимо создать папку со всеми данными для фильма. В терминале необходимо выполнить следующую команду

```sh
./create-film.sh Название фильма без пробелов на английком
```

2. Создастся папка с "пустыми" данными по пути `src/content/films/Название`
3. Сущность "Фильм" состоит из 3 частей:

- картинка (вертикальная) preview.jpg (тебе необходимо заменить на нужную картинку, но имя должно быть такое же)
- видео (короткое превью, которое отобразится при наведении) video.mov (тебе необходимо заменить на нужное видео, но имя должно быть такое же)
- описание в виде md файла (мы разговаривали с тобой про md редакторы) Название.md

4. Когда ты заменила preview.jpg и video.mov, открывай md файл
5. Замени youtubeVideoId на нужное видео, которое ты загрузила на youtube
6. Поменяй описание в md файле как хочешь (все что ниже ---) - этот текст отобразиться на странице фильма
7. Чтобы проверить, как все работает

```sh
pnpm dev
```

8. Открывай по ссыылке http://localhost:4321/ и смотри
