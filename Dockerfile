FROM node:lts-slim

WORKDIR /app

COPY --chown=node:node package*.json ./

RUN npm install

COPY --chown=node:node . .

USER node

CMD [ "sh" ]
