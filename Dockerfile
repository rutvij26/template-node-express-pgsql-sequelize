FROM node:22-slim AS build

WORKDIR /app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

RUN npm run build

FROM node:22-slim

WORKDIR /app

COPY --from=build /app /app

RUN chown -R node:node /app && chmod -R 755 /app

EXPOSE 3000

USER node