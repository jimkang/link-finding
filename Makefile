BROWSERIFY = browserify
UGLIFY = node_modules/.bin/uglifyjs

test:
	node tests/basictests.js

run:
	wzrd app.js:index.js -- \
		-d

build:
	$(BROWSERIFY) app.js | $(UGLIFY) -c -m -o index.js

pushall:
	git push origin gh-pages
