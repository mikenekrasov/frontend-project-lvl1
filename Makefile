# Makefile

install: # установка зависимостей
	npm ci
brain-games: # Запуск приложения brain-games
	node bin/brain-games.js
brain-even: # Запуск приложения brain-even
	node bin/brain-even.js
publish: # Публикация приложения
	npm publish --dry-run
lint: # Запуск линтера
	npx eslint .