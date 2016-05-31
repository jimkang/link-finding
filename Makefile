BROWSERIFY = browserify
UGLIFY = node_modules/.bin/uglifyjs
LAST_SHA = $(shell git rev-parse HEAD)
MYTH = node_modules/.bin/myth

test:
	node tests/basictests.js

run: css
	wzrd app.js:index.js -- \
		-d

build: css
	$(BROWSERIFY) app.js | $(UGLIFY) -c -m -o index.js
	git commit -a -m"Build of $(LAST_SHA)."

pushall: build
	git push origin gh-pages

css:
	$(MYTH) app-src.css app.css
