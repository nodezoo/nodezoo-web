FROM node:4

ADD . /

EXPOSE 8000
EXPOSE 43000

CMD ["node","app.js"]


