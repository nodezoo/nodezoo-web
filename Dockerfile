# nodezoo-web
FROM node:4


RUN mkdir /src
ADD package.json /src/

WORKDIR /src

RUN npm install

COPY . /src

RUN npm run build

EXPOSE 8000

CMD ["node", "server/start.js", "--seneca.options.tag=nodezoo-web", "--seneca-log=type:act"]
