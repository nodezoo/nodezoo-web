build :
	mkdir -p app
	cp -r ../../app.js ../../bower_components ../../srv ../../www app
	docker build -t nodezoo-web .

clean :
	rm *~

.PHONY : build clean
