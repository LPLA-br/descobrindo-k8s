# syntax=docker/dockerfile:1
# lpla/nome-aplicacao:1.0
# extendendo imagem padrão do node

FROM node:latest
LABEL maintainer="lpla@projeto.com"
WORKDIR /project
COPY . .
RUN npm install
EXPOSE 8080/tcp
CMD ["npm","run","prod"]

