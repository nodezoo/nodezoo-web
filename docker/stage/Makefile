build :
	mkdir -p app
	cp -r ../../web.js ../../srv ../../www app
	docker build -t nodezoo-web:1 .
	docker build -t nodezoo-web-prod:1 -f Dockerfile-prod .

clean :
	rm *~

.PHONY : build clean
