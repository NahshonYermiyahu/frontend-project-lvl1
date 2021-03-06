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

brain-calc:
	node bin/brain-calcNY.js

brain-gcd:
	node bin/brain-gcdNY.js

brain-progression:
	node bin/brain-progressionNY.js

brain-prime:
	node bin/brain-primeNY.js
