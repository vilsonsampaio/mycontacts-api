FROM node:16.13.1-alpine
WORKDIR /home/node/app

COPY package.json yarn*.lock ./

RUN yarn

EXPOSE 3000

COPY . .

CMD ["yarn", "dev"]
