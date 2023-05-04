FROM node:18

WORKDIR /app

COPY . .

RUN npm ci 

RUN npm run build

ENV NODE_ENV production

EXPOSE 5000

CMD [ "npx", "serve", "build" ]
