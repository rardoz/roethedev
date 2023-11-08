FROM node:20-alpine
WORKDIR /usr/app
COPY . .
EXPOSE 1234
RUN npm i
CMD [ "npm", "start" ]