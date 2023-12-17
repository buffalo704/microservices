FROM node:18-alpine

ARG APP_NAME

ENV env_name=${APP_NAME}
ENV HOST=0.0.0.0

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY ./ ./

CMD ["sh", "-c", "npx nx serve ${env_name} --host=0.0.0.0"]
