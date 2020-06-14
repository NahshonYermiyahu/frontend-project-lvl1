install:
	npm install

brain-games:
	node bin/brain-gamesNY.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

