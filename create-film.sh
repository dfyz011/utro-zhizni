#!/bin/bash

# Проверка, что передан ровно один параметр
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <название фильма на английском без пробелов>"
    exit 1
fi

# Сохранение параметра в переменную и преобразование в нижний регистр
parameter=$(echo "$1" | tr '[:upper:]' '[:lower:]')

cp -R src/content/filmTemplateFolder src/content/films/$parameter

mv src/content/films/$parameter/filmTemplate.md src/content/films/$parameter/$parameter.md

echo "Все получилось! Смотри папку src/content/films/$parameter"
