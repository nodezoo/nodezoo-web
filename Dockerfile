# nodezoo-web

FROM node:4

ADD . /

EXPOSE 8000
EXPOSE 43000

CMD ["node","srv/app-dev.js"]

# build and run:
# $ docker build -t nodezoo-web-01 .
# $ docker run -d -p 8000:8000 -p 43000:43000 -e HOST=192.168.99.1 nodezoo-web-01
# local docker ip:
# $ docker-machine ip default




