build :
	mkdir -p app
	cp -r ../../web.js ../../srv ../../www app
	docker build -t nodezoo-web .

clean :
	rm *~

.PHONY : build clean
