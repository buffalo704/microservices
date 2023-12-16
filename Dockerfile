FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./ ./

ARG APP_NAME
ARG CLIENT_CI
ARG CLIENT_WDS_SOCKET_PORT

ENV CI=${CLIENT_CI}
ENV WDS_SOCKET_PORT=${CLIENT_WDS_SOCKET_PORT}
ENV env_name=${APP_NAME}
ENV HOST=0.0.0.0

CMD ["sh", "-c", "npm start ${env_name}"]
