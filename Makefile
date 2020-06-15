install:
	npm install

brain-games:
	node bin/brain-gamesNY.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-even:
	node bin/brain-evenNY.js

# <a href = "https://github.com/NahshonYermiyahu/frontend-project-lvl1/actions">
#    <img src = "https://github.com/NahshonYermiyahu/frontend-project-lvl1/workflows/Run%20linter/badge.svg" alt ="Run linter">
#  </a>
