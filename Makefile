BROWSERIFY = browserify
UGLIFY = node_modules/.bin/uglifyjs

test:
	node tests/basictests.js

run: css
	wzrd app.js:index.js -- \
		-d

build: css
	$(BROWSERIFY) app.js | $(UGLIFY) -c -m -o index.js

pushall:
	git push origin gh-pages

# You need to `npm install -g myth`.
css:
	myth app-src.css app.css
