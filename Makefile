# Makefile

install: # установка зависимостей
	npm ci
brain-games: # Запуск приложения brain-games
	node bin/brain-games.js
brain-even: # Запуск приложения brain-even
	node bin/brain-even.js
brain-calc: # Запуск приложения brain-calc
	node bin/brain-calc.js
brain-gcd: # Запуск приложения brain-gcd
	node bin/brain-gcd.js
brain-progression: # Запуск приложения brain-progression
	node bin/brain-progression.js
publish: # Публикация приложения
	npm publish --dry-run
lint: # Запуск линтера
	npx eslint .