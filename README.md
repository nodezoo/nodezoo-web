
## Console

``sh
$ node app.js
``

## Docker


``sh
$ docker build -t nodezoo-web-00 .
docker run -p 8000:8000 -p 43000:43000 -e HOST=192.168.99.1 nodezoo-web-01
``


