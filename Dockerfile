FROM node:10.15

WORKDIR /app

COPY package.json .

RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install --silent

COPY . .

EXPOSE 3000

CMD ["npm", "start"]