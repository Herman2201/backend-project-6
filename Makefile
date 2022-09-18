setup: prepare install db-migrate

install:
	npm install

db-migrate:
	npx knex migrate:latest

build:
	npm run build

prepare:
	cp -n .env.example .env || true

start:
	heroku local -f Procfile.dev

start-backend:
<<<<<<< HEAD
	npm run start-dev -- --watch --verbose-watch --ignore-watch='node_modules .git .sqlite'
=======
	npm start -- --watch --verbose-watch --ignore-watch='node_modules .git .sqlite'
>>>>>>> 2654f2051f5e540df6ba97a00b51aaaee25c6a22

start-frontend:
	npx webpack --watch --progress

lint:
	npx eslint .

test:
	npm test -s

test-coverage:
	npm test -- --coverage --coverageProvider=v8