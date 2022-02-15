# Makefile

install: # установка зависимостей
	npm ci
brain-games: # Запуск приложения
	node bin/brain-games.js
publish: # Публикация приложения
	npm publish --dry-run
lint: # Запуск линтера
	npx eslint .