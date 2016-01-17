# nodezoo-web

FROM node:4

ADD . /



FROM node:4
ADD . /

EXPOSE 8000
EXPOSE 44000
EXPOSE 43000

RUN npm install
RUN npm build

CMD ["node", "server/start.js"]
