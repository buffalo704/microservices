FROM node:18-alpine

ARG APP_NAME
ARG CLIENT_CI
ARG CLIENT_WDS_SOCKET_PORT

ENV CI=${CLIENT_CI}
ENV WDS_SOCKET_PORT=${CLIENT_WDS_SOCKET_PORT}
ENV env_name=${APP_NAME}
ENV HOST=0.0.0.0

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY ./ ./

CMD ["sh", "-c", "npx nx serve ${env_name} --host=0.0.0.0"]
